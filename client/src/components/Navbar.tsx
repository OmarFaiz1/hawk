import { Link } from "wouter";
import { ShoppingBag, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import Cart from "./Cart";
import { getCart } from "@/lib/cart";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = getCart();
      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };

    updateCount();
    window.addEventListener("storage", updateCount);
    return () => window.removeEventListener("storage", updateCount);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/">
          <motion.a 
            className="mr-6 flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold tracking-tight">HawksFootwear</span>
          </motion.a>
        </Link>

        <div className="hidden md:flex space-x-6 mx-6">
          <Link href="/products">
            <motion.a 
              className="text-sm font-medium transition-colors hover:text-primary"
              whileHover={{ y: -2 }}
            >
              All Shoes
            </motion.a>
          </Link>
          <Link href="/products?brand=Nike">
            <motion.a 
              className="text-sm font-medium transition-colors hover:text-primary"
              whileHover={{ y: -2 }}
            >
              Nike
            </motion.a>
          </Link>
          <Link href="/products?brand=Adidas">
            <motion.a 
              className="text-sm font-medium transition-colors hover:text-primary"
              whileHover={{ y: -2 }}
            >
              Adidas
            </motion.a>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </motion.div>

          <Sheet>
            <SheetTrigger asChild>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="outline" size="icon" className="relative rounded-full">
                  <ShoppingBag className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent>
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}