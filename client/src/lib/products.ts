import type { Product } from "@shared/schema";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Runner",
    brand: "Nike",
    description: "Versatile running shoe with superior comfort and support.",
    price: "129.99",
    image: "https://images.unsplash.com/photo-1485736231968-0c8ad5c9e174",
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 2,
    name: "Urban Walker",
    brand: "Adidas", 
    description: "Sleek and stylish for everyday urban adventures.",
    price: "99.99",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    sizes: ["7", "8", "9", "10", "11"]
  },
  // Add 8 more products with different images
];

export const FEATURED_PRODUCT = MOCK_PRODUCTS[0];

export const BRANDS = ["All", "Nike", "Adidas", "Puma", "New Balance"];
