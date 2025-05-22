import * as React from "react"
import { TooltipProps } from "recharts"
import { cn } from "@/lib/utils"

export interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartContainerProps {
  children: React.ReactNode
  config: ChartConfig
}

export function ChartContainer({ children, config }: ChartContainerProps) {
  return (
    <div
      style={{
        "--color-temperature": config.temperature.color,
        "--color-precipitation": config.precipitation.color,
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

export function ChartTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-lg border bg-gray-900 p-2 shadow-sm">
      <div className="grid gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="text-sm font-medium text-white">
              {payload[0].value}°C
            </span>
          </div>
          <span className="text-sm text-gray-400">{label}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-white">
              {payload[1].value}%
            </span>
          </div>
          <span className="text-sm text-gray-400">Precipitation</span>
        </div>
      </div>
    </div>
  )
}

interface ChartTooltipContentProps {
  indicator?: "solid" | "dashed"
}

export function ChartTooltipContent({ indicator = "solid" }: ChartTooltipContentProps) {
  return (
    <div className="rounded-lg border bg-gray-900 p-2 shadow-sm">
      <div className="grid gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className={cn("h-2 w-2 rounded-full bg-orange-500", {
              "border border-dashed": indicator === "dashed"
            })} />
            <span className="text-sm font-medium text-white">
              Temperature
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className={cn("h-2 w-2 rounded-full bg-blue-500", {
              "border border-dashed": indicator === "dashed"
            })} />
            <span className="text-sm font-medium text-white">
              Precipitation
            </span>
          </div>
        </div>
      </div>
    </div>
  )
} 