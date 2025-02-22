import { cn } from "@/lib/utils";
import { COLOR_OPTIONS } from "@shared/schema";
import { Check } from "lucide-react";

interface ColorSwatchProps {
  colors: string[];
  selectedColor?: string;
  onColorSelect?: (color: string) => void;
}

export default function ColorSwatch({ colors, selectedColor, onColorSelect }: ColorSwatchProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map(color => {
        const colorData = COLOR_OPTIONS.find(c => c.name === color);
        if (!colorData) return null;

        return (
          <button
            key={color}
            className={cn(
              "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all",
              selectedColor === color ? "border-primary" : "border-transparent hover:border-primary/50"
            )}
            style={{ backgroundColor: colorData.hex }}
            onClick={() => onColorSelect?.(color)}
            title={colorData.name}
          >
            {selectedColor === color && (
              <Check 
                className={cn(
                  "h-4 w-4",
                  colorData.name === "White" ? "text-black" : "text-white"
                )} 
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
