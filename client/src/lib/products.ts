import type { Product } from "@shared/schema";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Runner",
    brand: "Nike",
    description: "Premium running shoe crafted with innovative cushioning technology and breathable mesh upper for ultimate performance and comfort.",
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
    description: "Sleek and stylish sneaker designed for city life. Features premium leather upper and cushioned insole.",
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
    description: "High-performance training shoe built for intensive workouts. Features enhanced stability and superior grip.",
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
    description: "Timeless design meets modern comfort. Premium suede and mesh construction.",
    price: "119.99",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570",
      "https://images.unsplash.com/photo-1570464197285-9949b7c7b04e",
      "https://images.unsplash.com/photo-1584735175315-9d5df23860e6"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 5,
    name: "Pro Court",
    brand: "Nike",
    description: "Professional basketball shoe with responsive cushioning and ankle support.",
    price: "179.99",
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
    images: [
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842",
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05",
      "https://images.unsplash.com/photo-1604671801891-93a4d5d8c8eb"
    ],
    sizes: ["8", "9", "10", "11", "12", "13"]
  },
  {
    id: 6,
    name: "Street Essential",
    brand: "Puma",
    description: "Versatile street-style sneaker perfect for everyday wear and casual outings.",
    price: "89.99",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3"
    ],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 7,
    name: "Flex Runner",
    brand: "Under Armour",
    description: "Lightweight running shoe with flexible sole and breathable upper design.",
    price: "139.99",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de",
      "https://images.unsplash.com/photo-1595341887283-a392ef81b7de"
    ],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 8,
    name: "Cloud Walker",
    brand: "Nike",
    description: "Maximum comfort with innovative cushioning technology for all-day wear.",
    price: "149.99",
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
    images: [
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9"
    ],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 9,
    name: "Urban Hiker",
    brand: "Adidas",
    description: "Rugged yet stylish boot perfect for urban exploration and light trails.",
    price: "169.99",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0"
    ],
    sizes: ["8", "9", "10", "11", "12"]
  },
  {
    id: 10,
    name: "Speed Elite",
    brand: "Nike",
    description: "Competition-grade running shoe designed for speed and performance.",
    price: "199.99",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"
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