import { test, expect } from "@playwright/test";

test.describe("Pet CRUD Operations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("should add a new pet", async ({ page }) => {
    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/pet") &&
        response.request().method() === "POST",
    );

    await page.getByTestId("add-new-pet-button").click();

    await page.getByRole("textbox", { name: /pet name/i }).fill("Test Dog");
    await page.getByRole("textbox", { name: /category/i }).fill("Dogs");
    await page.selectOption('select[name="status"]', "available");

    await page.getByTestId("save-button").click();

    const response = await responsePromise;
    expect(response.status()).toBe(200);
  });

  test("should update an existing pet", async ({ page }) => {
    await page.waitForSelector('[data-testid="pet-card"]');
    await page.getByTestId("edit-button").first().click();

    await page.waitForSelector('[data-testid="update-pet-button"]');

    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/pet") &&
        response.request().method() === "PUT",
    );

    await page.fill('input[name="name"]', "Updated Pet Name");
    await page.getByTestId("update-pet-button").click();

    const response = await responsePromise;
    expect(response.status()).toBe(200);
  });

  test("should delete a pet", async ({ page }) => {
    await page.waitForSelector('[data-testid="pet-card"]');

    await page.getByTestId("delete-button").first().click();

    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("/pet/") &&
        response.request().method() === "DELETE",
    );

    await page.getByTestId("delete-pet-button").click();

    const response = await responsePromise;
    expect(response.status()).toBe(200);
  });
});
