import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FEATURED_PRODUCT } from "@/lib/products";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted">
        <motion.div 
          className="container relative py-24 sm:py-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              className="max-w-2xl"
              {...fadeIn}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Step into
                <br />
                <span className="text-primary">Excellence</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Discover our curated collection of premium men's footwear, where style meets comfort in perfect harmony.
              </p>
              <motion.div 
                className="mt-10 flex items-center gap-x-6"
                whileHover={{ x: 10 }}
              >
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/products">
                    Shop Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                <img
                  src={FEATURED_PRODUCT.image}
                  alt="Featured shoe"
                  className="h-full w-full object-cover rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of style and comfort with our carefully curated selection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold tracking-tight mb-4">
                {FEATURED_PRODUCT.name}
              </h3>
              <p className="text-muted-foreground">
                {FEATURED_PRODUCT.description}
              </p>
              <div className="mt-6">
                <Button asChild variant="secondary" className="rounded-full">
                  <Link href={`/product/${FEATURED_PRODUCT.id}`}>
                    Explore Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square overflow-hidden rounded-2xl bg-muted"
            >
              <motion.img
                src={FEATURED_PRODUCT.image}
                alt={FEATURED_PRODUCT.name}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}