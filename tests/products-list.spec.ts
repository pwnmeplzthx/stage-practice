import { test, expect } from '@playwright/test';

test('add product then delete it', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Название').click();
    await page.getByLabel('Название').fill('Test product');
    await page.getByLabel('Описание').click();
    await page.getByLabel('Описание').fill('Test product description');
    await page.getByRole('button', { name: 'Добавить' }).click();
    await expect(
        page.getByText('Test productTest product descriptionУдалить').first()
    ).toBeVisible();
    await page.getByRole('button', { name: 'Удалить' }).first().click();
    await expect(
        page.getByText('Test productTest product descriptionУдалить')
    ).not.toBeVisible();
});