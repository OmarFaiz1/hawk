import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductGallery from "@/components/ProductGallery";
import { MOCK_PRODUCTS, BRANDS, STYLES, OCCASIONS, WEATHER_CONDITIONS, COLORS } from "@/lib/products";
import ColorSwatch from "@/components/ColorSwatch";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { BellPlus } from "lucide-react";

export default function Products() {
  const { toast } = useToast();
  const [priceRange, setPriceRange] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [selectedStyle, setSelectedStyle] = useState<string>("All");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("All");
  const [selectedWeather, setSelectedWeather] = useState<string>("All");
  const [selectedColor, setSelectedColor] = useState<string>();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
    const matchesStyle = selectedStyle === "All" || product.style === selectedStyle;
    const matchesOccasion = selectedOccasion === "All" || product.occasion === selectedOccasion;
    const matchesWeather = selectedWeather === "All" || product.weather === selectedWeather;
    const matchesColor = !selectedColor || product.colors.includes(selectedColor);

    const price = parseFloat(product.price);
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "0-100" && price <= 100) ||
      (priceRange === "100-200" && price > 100 && price <= 200) ||
      (priceRange === "200+" && price > 200);

    return matchesSearch && matchesBrand && matchesStyle && 
           matchesOccasion && matchesWeather && matchesColor && 
           matchesPrice;
  });

  const handleStockNotification = (productId: number) => {
    toast({
      title: "Stock Notification Set",
      description: "We'll notify you when this item is back in stock.",
    });
  };

  return (
    <div className="container py-8">
      <div className="mb-8 space-y-6">
        {/* Search and Basic Filters */}
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
            />
          </div>

          <div>
            <Label>Brand</Label>
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {BRANDS.map((brand: string) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Price Range</Label>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-100">$0 - $100</SelectItem>
                <SelectItem value="100-200">$100 - $200</SelectItem>
                <SelectItem value="200+">$200+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Smart Filters */}
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Label>Style</Label>
            <Select value={selectedStyle} onValueChange={setSelectedStyle}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Styles</SelectItem>
                {STYLES.map((style: string) => (
                  <SelectItem key={style} value={style}>
                    {style}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Occasion</Label>
            <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Occasions</SelectItem>
                {OCCASIONS.map((occasion: string) => (
                  <SelectItem key={occasion} value={occasion}>
                    {occasion}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Weather</Label>
            <Select value={selectedWeather} onValueChange={setSelectedWeather}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Weather</SelectItem>
                {WEATHER_CONDITIONS.map((weather: string) => (
                  <SelectItem key={weather} value={weather}>
                    {weather}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Color Swatch Filter */}
        <div>
          <Label>Color</Label>
          <ColorSwatch
            colors={COLORS.map(c => c.name)}
            selectedColor={selectedColor}
            onColorSelect={setSelectedColor}
          />
        </div>
      </div>

      <ProductGallery 
        products={filteredProducts}
        onStockNotification={handleStockNotification}
      />

      {filteredProducts.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          No products found matching your criteria.
        </p>
      )}
    </div>
  );
}