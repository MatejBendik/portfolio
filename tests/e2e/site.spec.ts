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

test("unknown routes use the custom not-found page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /not been shipped/i })).toBeVisible();
});
