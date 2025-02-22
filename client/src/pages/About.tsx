import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="bg-background">
      <div className="container py-16 sm:py-24">
        <motion.div className="max-w-3xl mx-auto text-center" {...fadeIn}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About HawksFootwear
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Pioneering excellence in men's footwear since 2010, delivering unmatched comfort and style.
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div 
              className="flex flex-col items-center text-center"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-primary/10 p-6 mb-6">
                <svg
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Quality Craftsmanship</h3>
              <p className="mt-2 text-muted-foreground">
                Every pair is crafted with precision and care, using premium materials for lasting comfort.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-primary/10 p-6 mb-6">
                <svg
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="mt-2 text-muted-foreground">
                Embracing cutting-edge technology to provide the best in comfort and performance.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-lg bg-primary/10 p-6 mb-6">
                <svg
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Global Reach</h3>
              <p className="mt-2 text-muted-foreground">
                Delivering excellence to customers worldwide with strategic partnerships.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-24 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold tracking-tight">Connect With Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Follow us on social media for the latest updates, releases, and exclusive offers.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
