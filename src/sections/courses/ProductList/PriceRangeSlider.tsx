import { useState } from 'react'
// @ts-ignore
import RangeSlider from 'react-range-slider-input';

import { Label } from "@/components/Input/Label";

interface PriceRangeSliderProps {
  onRangeChange: (range: [number, number]) => void
}

export default function PriceRangeSlider({ onRangeChange }: PriceRangeSliderProps) {
  const [range, setRange] = useState<[number, number]>([0, 50])

  const handleRangeChange = (newRange: number[]) => {
    //@ts-ignore
    const updatedRange: [number, number] = [newRange[0], newRange[1]]
    setRange(updatedRange)
    onRangeChange(updatedRange)
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <Label htmlFor="price-range" className="text-sm font-medium">
          Price Range:
        </Label>
        <span className="text-sm font-medium">
          ${range[0]} - ${range[1]}
        </span>
      </div>
      <div>
      <RangeSlider defaultValue={[0, 50]} onInput={handleRangeChange} />
      </div>
    </div>
  )
}

