import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2 } from "lucide-react";
import { getCart, removeFromCart } from "@/lib/cart";
import { MOCK_PRODUCTS } from "@/lib/products";
import type { CartItem } from "@shared/schema";

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [, navigate] = useLocation();

  useEffect(() => {
    const updateCart = () => setCart(getCart());
    updateCart();
    window.addEventListener("storage", updateCart);
    return () => window.removeEventListener("storage", updateCart);
  }, []);

  const total = cart.reduce((sum, item) => {
    const product = MOCK_PRODUCTS.find(p => p.id === item.productId);
    return sum + (product ? parseFloat(product.price) * item.quantity : 0);
  }, 0);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
      
      <ScrollArea className="flex-1">
        {cart.map(item => {
          const product = MOCK_PRODUCTS.find(p => p.id === item.productId);
          if (!product) return null;
          
          return (
            <div key={`${item.productId}-${item.size}`} className="flex items-center gap-4 mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="h-20 w-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                <p className="text-sm">Qty: {item.quantity}</p>
                <p className="font-medium">${product.price}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  removeFromCart(item.productId, item.size);
                  setCart(getCart());
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          );
        })}
      </ScrollArea>

      <div className="border-t pt-4 mt-auto">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="font-medium">${total.toFixed(2)}</span>
        </div>
        <Button 
          className="w-full" 
          onClick={() => navigate("/checkout")}
          disabled={cart.length === 0}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
