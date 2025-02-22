import { pgTable, text, serial, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  brand: text("brand").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  image: text("image").notNull(),
  images: text("images").array().notNull(),
  sizes: text("sizes").array().notNull(),
  style: text("style").notNull(),
  occasion: text("occasion").notNull(),
  weather: text("weather").notNull(),
  colors: text("colors").array().notNull(),
  stockLevel: integer("stock_level").notNull(),
  isBundle: integer("is_bundle").notNull().default(0),
  relatedProducts: text("related_products").array()
});

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  brand: true,
  description: true,
  price: true,
  image: true,
  images: true,
  sizes: true,
  style: true,
  occasion: true,
  weather: true,
  colors: true,
  stockLevel: true,
  isBundle: true,
  relatedProducts: true
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export const cartItemSchema = z.object({
  productId: z.number(),
  quantity: z.number().min(1),
  size: z.string()
});

export type CartItem = z.infer<typeof cartItemSchema>;

export const PRODUCT_STYLES = [
  "Casual", "Athletic", "Formal", "Outdoor"
] as const;

export const OCCASIONS = [
  "Everyday", "Sport", "Business", "Special Event"
] as const;

export const WEATHER_CONDITIONS = [
  "All-Season", "Summer", "Winter", "Rain"
] as const;

export const COLOR_OPTIONS = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Brown", hex: "#795548" },
  { name: "Navy", hex: "#0D47A1" },
  { name: "Gray", hex: "#9E9E9E" },
  { name: "Red", hex: "#D32F2F" },
  { name: "Green", hex: "#388E3C" },
  { name: "Blue", hex: "#1976D2" }
] as const;