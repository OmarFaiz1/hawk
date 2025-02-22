import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Eye, ShoppingBag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";

interface ProductGalleryProps {
  products: Product[];
}

export default function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="group relative aspect-square overflow-hidden bg-muted rounded-xl"
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px]">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-2xl font-bold">{product.name}</h2>
                      <p className="text-muted-foreground">{product.description}</p>
                      <p className="text-xl font-bold">${product.price}</p>
                      <Button asChild>
                        <Link href={`/product/${product.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                variant="secondary"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link href={`/product/${product.id}`}>
                  <ShoppingBag className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm opacity-90">${product.price}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
