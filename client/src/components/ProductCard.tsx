import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition-shadow"
    >
      <Link href={`/product/${product.id}`}>
        <a className="block">
          <div 
            className="aspect-square overflow-hidden bg-muted relative"
            onMouseEnter={() => {
              setIsHovered(true);
              if (product.images.length > 1) {
                setCurrentImageIndex(1);
              }
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setCurrentImageIndex(0);
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          <div className="p-4">
            <h3 className="font-semibold truncate">{product.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{product.brand}</p>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-lg font-bold">${product.price}</p>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/product/${product.id}`;
                  }}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  View
                </Button>
              </motion.div>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}