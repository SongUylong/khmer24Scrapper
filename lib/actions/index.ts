import { scrapeKhmer24Product } from "../scraper";
export const scrapAndStoreProduct = async (productUrl: string) => {
  if (!productUrl) return;
  try {
    const scrapedProduct = await scrapeKhmer24Product(productUrl);
  } catch (error) {
    throw new Error(
      `Failed to scrape product from ${productUrl}: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
};
