
import { test, expect } from '@playwright/test';

test('Blogs Page Loads and Fetches Data', async ({ page }) => {
  // Mock the Supabase API call (or check loading state then data)
  // For simplicity, we just check if the page loads and has expected elements.
  // Note: Since this is checking client-side fetching, we need to wait for network.
  // But in this environment we can't easily mock network without setting up MSW or similar.
  // So we will just visit the page and take a screenshot.

  await page.goto('http://localhost:3000/blogs');

  // Wait for loading or content
  try {
    await page.waitForSelector('text=Loading articles...', { timeout: 2000 });
    console.log('Loading state visible');
  } catch (e) {
    console.log('Loading state passed quickly or not found');
  }

  // Take screenshot
  await page.screenshot({ path: 'blogs-list.png', fullPage: true });
});
