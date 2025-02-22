import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Eye, ShoppingBag, BellPlus, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Product } from "@shared/schema";
import ColorSwatch from "./ColorSwatch";

interface ProductGalleryProps {
  products: Product[];
  onStockNotification?: (productId: number) => void;
}

export default function ProductGallery({ products, onStockNotification }: ProductGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const getBundleSuggestions = (product: Product) => {
    if (!product.isBundle && product.relatedProducts) {
      return products.filter(p => 
        product.relatedProducts?.includes(p.id.toString()) && 
        p.id !== product.id
      ).slice(0, 2);
    }
    return [];
  };

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

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Available Colors:</p>
                        <ColorSwatch colors={product.colors} />
                      </div>

                      {product.stockLevel <= 5 && !product.isBundle && (
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-red-500">
                            {product.stockLevel === 0 ? "Out of stock" : `Only ${product.stockLevel} left`}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onStockNotification?.(product.id)}
                          >
                            <BellPlus className="h-4 w-4 mr-2" />
                            Notify Me
                          </Button>
                        </div>
                      )}

                      {getBundleSuggestions(product).length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Bundle Suggestions:</p>
                          <div className="flex gap-2">
                            {getBundleSuggestions(product).map(suggestion => (
                              <Link 
                                key={suggestion.id} 
                                href={`/product/${suggestion.id}`}
                                className="block w-16 h-16 rounded overflow-hidden"
                              >
                                <img
                                  src={suggestion.image}
                                  alt={suggestion.name}
                                  className="w-full h-full object-cover"
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      <Button asChild>
                        <Link href={`/product/${product.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
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
                  </TooltipTrigger>
                  <TooltipContent>
                    View Product
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-semibold">{product.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm opacity-90">${product.price}</p>
                {product.isBundle && (
                  <span className="inline-flex items-center text-xs bg-primary/20 px-2 py-1 rounded">
                    <Package className="h-3 w-3 mr-1" />
                    Bundle
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}