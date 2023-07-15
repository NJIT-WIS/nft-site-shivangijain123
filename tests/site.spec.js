const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants
const expectedTitle = 'KRYPTO';

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test('Check All Navigation Links', async ({ page }) => {
  const navLinks = await page.locator('.menu-item');
  const count = await navLinks.count();

  for (let i = 0; i < count; i++) {
    const link = navLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});


test('Check All Featured Company Logos', async ({ page }) => {
  const images = await page.locator('.image-container img');
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const image = images.nth(i);
    expect(await image.isVisible()).toBe(true);
  }
});


test('Check All Testimonials', async ({ page }) => {
  const testimonials = await page.locator('.testimonial');
  const count = await testimonials.count();

  for (let i = 0; i < count; i++) {
    const testimonial = testimonials.nth(i);
    expect(await testimonial.isVisible()).toBe(true);
  }
});

test('Check All Footer Links', async ({ page }) => {
  const footerLinks = await page.locator('.footer-link');
  const count = await footerLinks.count();

  for (let i = 0; i < count; i++) {
    const link = footerLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});

test('Check All Footer Icons', async ({ page }) => {
  const footerIcons = await page.locator('.footer-link i');
  const count = await footerIcons.count();

  for (let i = 0; i < count; i++) {
    const icon = footerIcons.nth(i);
    expect(await icon.isVisible()).toBe(true);
  }
});


