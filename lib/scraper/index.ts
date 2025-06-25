import axios from "axios";

export const scrapeKhmer24Product = async (productUrl: string) => {
  if (!productUrl) return;
  const username: string = "brd-customer-hl_f518b6d9-zone-pricewise";
  const password: string = "n1jlvusru479";
  const port = 33335;
  const session_id = (93132 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };
  try {
    const response = await axios.get(productUrl, options);
  } catch (error) {
    throw new Error(
      `Failed to scrape product from ${productUrl}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    );
  }
};
