import { test, expect } from '@playwright/test';

test('Has relevant content', async ({ page }) => {
  await page.goto('/');
  const paragraph = page.getByText('Playwright example');
  await expect(paragraph).toBeVisible(); 
});

test('Get started link', async ({ page }) => {
  await page.goto('/');
  const link = page.getByRole('link', { name: 'Learn how to use Playwright' });
  const href = await link.getAttribute('href');
  expect(href).toBe('https://playwright.dev/docs/intro');

  // do not do this unless you control domain
  await link.click();
  await page.waitForURL('https://playwright.dev/docs/intro');
});
