import type { Product } from "@shared/schema";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Runner",
    brand: "Nike",
    description: "Premium running shoe crafted with innovative cushioning technology and breathable mesh upper for ultimate performance and comfort. Features responsive foam midsole and durable rubber outsole.",
    price: "129.99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 2,
    name: "Urban Walker",
    brand: "Adidas", 
    description: "Sleek and stylish sneaker designed for city life. Features premium leather upper, cushioned insole, and versatile design that transitions seamlessly from casual to semi-formal occasions.",
    price: "149.99",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb"
    ],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 3,
    name: "Performance Trainer",
    brand: "Nike",
    description: "High-performance training shoe built for intensive workouts. Features enhanced stability, responsive cushioning, and superior grip for dynamic movements.",
    price: "159.99",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
    images: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329"
    ],
    sizes: ["8", "9", "10", "11", "12"]
  },
  {
    id: 4,
    name: "Heritage Classic",
    brand: "New Balance",
    description: "Timeless design meets modern comfort in this classic sneaker. Features premium suede and mesh construction with enhanced cushioning for all-day comfort.",
    price: "119.99",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570",
      "https://images.unsplash.com/photo-1570464197285-9949b7c7b04e",
      "https://images.unsplash.com/photo-1570464197285-9949b7c7b04e"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"]
  }
];

export const FEATURED_PRODUCT = MOCK_PRODUCTS[0];

export const BRANDS = ["All", "Nike", "Adidas", "New Balance", "Puma", "Under Armour"];

export const CATEGORIES = [
  { name: "Running", path: "/category/running" },
  { name: "Training", path: "/category/training" },
  { name: "Lifestyle", path: "/category/lifestyle" },
  { name: "Basketball", path: "/category/basketball" }
];

export const COLLECTIONS = [
  { name: "New Arrivals", path: "/collections/new-arrivals" },
  { name: "Best Sellers", path: "/collections/best-sellers" },
  { name: "Limited Edition", path: "/collections/limited-edition" }
];