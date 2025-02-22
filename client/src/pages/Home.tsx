import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FEATURED_PRODUCT } from "@/lib/products";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
            alt="Hero background"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20" />
        </div>

        <div className="container relative py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Step into Style
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover our curated collection of premium men's footwear, designed for both comfort and style.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Product
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {FEATURED_PRODUCT.description}
              </p>
              <div className="mt-6">
                <Button asChild variant="secondary">
                  <Link href={`/product/${FEATURED_PRODUCT.id}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                src={FEATURED_PRODUCT.image}
                alt={FEATURED_PRODUCT.name}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
