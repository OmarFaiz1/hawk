import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ruler, Footprints } from "lucide-react";

const sizeChart = [
  { us: "7", uk: "6", eu: "40", cm: "25" },
  { us: "8", uk: "7", eu: "41", cm: "26" },
  { us: "9", uk: "8", eu: "42", cm: "27" },
  { us: "10", uk: "9", eu: "43", cm: "28" },
  { us: "11", uk: "10", eu: "44", cm: "29" },
  { us: "12", uk: "11", eu: "45", cm: "30" },
];

export default function SizeGuide() {
  const [footLength, setFootLength] = useState("");
  const [recommendedSize, setRecommendedSize] = useState("");

  const calculateSize = (length: string) => {
    const lengthInCm = parseFloat(length);
    if (isNaN(lengthInCm)) return;

    const size = sizeChart.find((size) => {
      const sizeCm = parseFloat(size.cm);
      return lengthInCm <= sizeCm;
    });

    setRecommendedSize(size ? `US ${size.us}` : "Size not found");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Ruler className="h-4 w-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Size Guide</DialogTitle>
          <DialogDescription>
            Find your perfect fit with our size guide and measurement tool.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Size Calculator */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Find Your Size</h3>
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="text-sm">Foot Length (cm)</label>
                <Input
                  type="number"
                  value={footLength}
                  onChange={(e) => {
                    setFootLength(e.target.value);
                    calculateSize(e.target.value);
                  }}
                  placeholder="Enter foot length"
                />
              </div>
              {recommendedSize && (
                <div className="mb-2">
                  <span className="text-sm font-medium">Recommended Size:</span>
                  <span className="ml-2 text-primary">{recommendedSize}</span>
                </div>
              )}
            </div>
          </div>

          {/* Measurement Instructions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">How to Measure</h3>
            <div className="flex items-start gap-4">
              <Footprints className="h-6 w-6 text-primary" />
              <ol className="list-decimal space-y-2 text-sm">
                <li>Stand on a piece of paper with your heel against a wall.</li>
                <li>Mark the tip of your longest toe on the paper.</li>
                <li>Measure the distance from the wall to the mark in centimeters.</li>
                <li>Use this measurement in our size calculator above.</li>
              </ol>
            </div>
          </div>

          {/* Size Conversion Chart */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Size Conversion Chart</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>US</TableHead>
                  <TableHead>UK</TableHead>
                  <TableHead>EU</TableHead>
                  <TableHead>CM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sizeChart.map((size) => (
                  <TableRow key={size.us}>
                    <TableCell>{size.us}</TableCell>
                    <TableCell>{size.uk}</TableCell>
                    <TableCell>{size.eu}</TableCell>
                    <TableCell>{size.cm}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
