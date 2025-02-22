import { useState, useEffect } from "react";
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
import { Heart } from "lucide-react";
import SizeGuide from "@/components/SizeGuide";
import { toggleWishlist, isInWishlist } from "@/lib/wishlist";
import { addToRecentlyViewed, getRecentlyViewed } from "@/lib/recentlyViewed";

export default function ProductDetails() {
  const { id } = useParams();
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [inWishlist, setInWishlist] = useState(false);
  const [recentProducts, setRecentProducts] = useState<typeof MOCK_PRODUCTS>([]);

  const product = MOCK_PRODUCTS.find(p => p.id === Number(id));

  useEffect(() => {
    if (product) {
      // Update recently viewed
      addToRecentlyViewed(product.id);

      // Check wishlist status
      setInWishlist(isInWishlist(product.id));

      // Load recent products
      const recentIds = getRecentlyViewed().filter(rid => rid !== product.id);
      const recent = recentIds
        .map(rid => MOCK_PRODUCTS.find(p => p.id === rid))
        .filter((p): p is NonNullable<typeof p> => p != null)
        .slice(0, 4);
      setRecentProducts(recent);
    }
  }, [product]);

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

  const handleToggleWishlist = () => {
    const isNowInWishlist = toggleWishlist(product.id);
    setInWishlist(isNowInWishlist);

    toast({
      title: isNowInWishlist ? "Added to wishlist" : "Removed from wishlist",
      description: product.name,
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
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleWishlist}
              className={inWishlist ? "text-red-500" : ""}
            >
              <Heart className="h-6 w-6" fill={inWishlist ? "currentColor" : "none"} />
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">{product.brand}</p>
          <p className="mt-4 text-2xl font-bold">${product.price}</p>

          <p className="mt-6">{product.description}</p>

          <div className="mt-8 flex items-end gap-4">
            <div className="flex-1">
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
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
            <SizeGuide />
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

      {/* Recently Viewed Products */}
      {recentProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recentProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground">${product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}