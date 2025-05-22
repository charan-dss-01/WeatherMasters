"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Sample weather data for the chart (temperature and precipitation)
const chartData = [
  { day: "Monday", temperature: 24, precipitation: 0 },
  { day: "Tuesday", temperature: 22, precipitation: 10 },
  { day: "Wednesday", temperature: 19, precipitation: 30 },
  { day: "Thursday", temperature: 18, precipitation: 45 },
  { day: "Friday", temperature: 20, precipitation: 15 },
  { day: "Saturday", temperature: 23, precipitation: 5 },
  { day: "Sunday", temperature: 25, precipitation: 0 },
]

const chartConfig = {
  temperature: {
    label: "Temperature (°C)",
    color: "hsl(25, 95%, 53%)", // Orange
  },
  precipitation: {
    label: "Precipitation (%)",
    color: "hsl(217, 71%, 53%)", // Blue
  },
} satisfies ChartConfig

export function WeatherStatChart() {
  // Calculate trends (simplified for demo)
  const tempTrend = 1.2; // Positive trend
  const isTrendUp = tempTrend > 0;
  
  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 w-full">
      <CardHeader>
        <CardTitle className="text-white">Weekly Weather Trends</CardTitle>
        <CardDescription className="text-gray-300">This Week's Stats</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} stroke="#374151" />
              <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value: string) => value.slice(0, 3)}
                stroke="#e5e7eb"
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="temperature" fill="var(--color-temperature)" radius={4} />
              <Bar dataKey="precipitation" fill="var(--color-precipitation)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm border-t border-gray-800 text-white">
        <div className="flex gap-2 font-medium leading-none items-center">
          {isTrendUp ? (
            <>
              Temperature trending up by {tempTrend}°C this week <TrendingUp className="h-4 w-4 text-orange-500" />
            </>
          ) : (
            <>
              Temperature trending down by {Math.abs(tempTrend)}°C this week <TrendingDown className="h-4 w-4 text-blue-500" />
            </>
          )}
        </div>
        <div className="leading-none text-gray-400">
          Comparing daily temperature and precipitation patterns
        </div>
      </CardFooter>
    </Card>
  )
} 