import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative"
    >
      <Link href={`/product/${product.id}`}>
        <a className="block">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
            <p className="mt-1 text-sm font-medium">${product.price}</p>
          </div>
        </a>
      </Link>
      <Button
        variant="secondary"
        size="sm"
        className="absolute bottom-0 right-0 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/product/${product.id}`;
        }}
      >
        <ShoppingBag className="mr-2 h-4 w-4" />
        View Details
      </Button>
    </motion.div>
  );
}
