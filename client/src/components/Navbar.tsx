import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ShoppingBag, Sun, Moon, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import Cart from "./Cart";
import { getCart } from "@/lib/cart";
import { CATEGORIES, COLLECTIONS } from "@/lib/products";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [cartCount, setCartCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateCount = () => {
      const cart = getCart();
      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };

    updateCount();
    window.addEventListener("storage", updateCount);
    return () => window.removeEventListener("storage", updateCount);
  }, []);

  const NavLinks = () => (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium hover:text-primary">
          <span>Categories</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {CATEGORIES.map((category) => (
            <DropdownMenuItem key={category.path}>
              <Link href={category.path}>
                <a className="w-full">{category.name}</a>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium hover:text-primary">
          <span>Collections</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {COLLECTIONS.map((collection) => (
            <DropdownMenuItem key={collection.path}>
              <Link href={collection.path}>
                <a className="w-full">{collection.name}</a>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/about">
        <motion.a 
          className="text-sm font-medium hover:text-primary"
          whileHover={{ y: -2 }}
        >
          About Us
        </motion.a>
      </Link>

      <Link href="/contact">
        <motion.a 
          className="text-sm font-medium hover:text-primary"
          whileHover={{ y: -2 }}
        >
          Contact
        </motion.a>
      </Link>
    </>
  );

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 mx-6">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {mounted && (
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
          )}

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