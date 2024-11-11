import { test, expect } from '@playwright/test';

test('Has relevant content', async ({ page }) => {
  await page.goto('/');
  const paragraph = page.getByText('Playwright example');
  await expect(paragraph).toBeVisible(); 
});

test('Get started link', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Learn how to use Playwright' }).click();
});
