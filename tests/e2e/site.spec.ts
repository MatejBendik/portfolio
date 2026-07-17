import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/products",
  "/products/shipsafe-ai",
  "/blog",
  "/blog/security-before-you-ship",
  "/about",
];

for (const route of routes) {
  test(`${route} renders without document errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));

    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("main")).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("command menu opens from the keyboard and navigates", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop command palette shortcut");
  await page.goto("/");
  await page.getByRole("button", { name: "Open command menu" }).click();
  await expect(page.getByPlaceholder("Go anywhere…")).toBeVisible();
  await page.keyboard.press("Escape");
  await page.keyboard.press(process.platform === "darwin" ? "Meta+k" : "Control+k");
  await expect(page.getByPlaceholder("Go anywhere…")).toBeVisible();
  await page.getByRole("option", { name: "Products", exact: true }).click();
  await expect(page).toHaveURL(/\/products$/);
});

test("theme choice persists", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.removeItem("theme"));
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/light/);
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  const theme = await page.locator("html").getAttribute("class");
  expect(theme).toMatch(/dark|light/);
  await page.reload();
  expect(await page.locator("html").getAttribute("class")).toContain(theme?.includes("dark") ? "dark" : "light");
});

test("core pages have no serious accessibility violations", async ({ page }) => {
  for (const route of ["/", "/products", "/blog", "/about"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .disableRules(["color-contrast"])
      .analyze();
    expect(results.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""))).toEqual([]);
  }
});

test("reduced motion preference keeps the homepage usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: /Explore products/i })).toBeVisible();
});

test("experience details and contribution tooltips are interactive", async ({ page }) => {
  await page.goto("/");

  const hackathon = page.getByRole("button", { name: /What2Eat · 3rd place/i });
  await hackathon.scrollIntoViewIfNeeded();
  await hackathon.click();
  await expect(page.getByText(/won a €1,000 prize/i)).toBeVisible();

  const contributionDay = page.locator('[data-slot="tooltip-trigger"]').last();
  await contributionDay.scrollIntoViewIfNeeded();
  await contributionDay.hover();
  await expect(page.getByRole("tooltip")).toContainText(/contribution.*on/i);

  const emptyContributionDay = page.locator('[data-slot="tooltip-trigger"]:has(rect[data-count="0"])').first();
  await emptyContributionDay.hover();
  await expect(page.getByRole("tooltip")).toContainText(/0 contributions on/i);
});

test("the rolling contribution graph shows both July endpoints without desktop overflow", async ({ page, isMobile }) => {
  test.skip(isMobile, "The compact mobile graph remains touch-scrollable");
  await page.goto("/");

  const calendar = page.getByLabel("GitHub Contributions");
  await calendar.scrollIntoViewIfNeeded();
  const labels = calendar.locator('[data-slot="month-labels"] text');

  await expect(labels.filter({ hasText: "Jul" })).toHaveCount(2);
  expect(await calendar.evaluate((element) => element.scrollWidth <= element.clientWidth + 1)).toBeTruthy();
});

test("selected projects are presented with working destinations", async ({ page }) => {
  await page.goto("/");

  const section = page.getByRole("region", { name: "Built to work in the real world." });
  await expect(section.getByRole("heading", { name: "MakeDock" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "What2Eat" })).toBeVisible();
  await expect(section.getByRole("heading", { name: "LrnWithAI" })).toBeVisible();
  await expect(section.getByRole("link", { name: "Open MakeDock" })).toHaveAttribute("href", "https://makedock.vercel.app");
  await expect(section.getByRole("link", { name: "Read the story" })).toHaveAttribute("href", "/blog/the-hackathon-we-won");
});

test("live presence is anonymous and only returns country-scale coordinates", async ({ request }) => {
  const response = await request.post("/api/presence", {
    headers: {
      "x-vercel-ip-city": "Bratislava",
      "x-vercel-ip-country": "SK",
      "x-vercel-ip-latitude": "48.1486",
      "x-vercel-ip-longitude": "17.1077",
      "x-forwarded-for": "203.0.113.10",
    },
    data: { sessionId: "00000000-0000-4000-8000-000000000001" },
  });
  const body = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(body.self.country).toBe("Slovakia");
  expect(body.participants).toEqual(expect.arrayContaining([
    expect.objectContaining({ country: "Slovakia", countryCode: "SK", latitude: 48, longitude: 17 }),
  ]));
  expect(JSON.stringify(body)).not.toContain("203.0.113.10");
  expect(JSON.stringify(body)).not.toContain("Bratislava");
  expect(JSON.stringify(body)).not.toContain("00000000-0000-4000-8000-000000000001");
});

test("unknown routes use the custom not-found page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /not been shipped/i })).toBeVisible();
});
