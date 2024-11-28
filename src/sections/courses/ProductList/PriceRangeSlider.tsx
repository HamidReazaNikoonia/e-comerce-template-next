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
      <div className="flex justify-between text-sm pt-2">
        
        <span className="text-xs font-medium">
          تومان &nbsp;{range[0]} - تومان&nbsp;{range[1]}
        </span>
        <Label htmlFor="price-range" className="text-xs font-medium">
          بازه ی قیمت
        </Label>
      </div>
      <div className='pt-4'>
      <RangeSlider defaultValue={[0, 50]} onInput={handleRangeChange} />
      </div>
    </div>
  )
}

