import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MOCK_PRODUCTS } from "@/lib/products";
import { addToCart } from "@/lib/cart";

export default function ProductDetails() {
  const { id } = useParams();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string>("");
  
  const product = MOCK_PRODUCTS.find(p => p.id === Number(id));
  
  if (!product) {
    navigate("/404");
    return null;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        variant: "destructive",
        title: "Please select a size",
      });
      return;
    }

    addToCart({
      productId: product.id,
      quantity: 1,
      size: selectedSize
    });

    toast({
      title: "Added to cart",
      description: `${product.name} - Size ${selectedSize}`,
    });
  };

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square overflow-hidden rounded-lg bg-gray-100"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-muted-foreground">{product.brand}</p>
          <p className="mt-4 text-2xl font-bold">${product.price}</p>
          
          <p className="mt-6">{product.description}</p>
          
          <div className="mt-8">
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map(size => (
                  <SelectItem key={size} value={size}>
                    Size {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            className="mt-8"
            size="lg"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
