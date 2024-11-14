// Sudhanshu Ranjan - 12 Nov 2024
"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  Label,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/layout/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/layout/chart";
import { Circle } from "lucide-react";
import { Avatar, AvatarFallback } from "../layout/avatar";
import { useStoreState } from "@/lib/store";

interface ChartData {
  percentile: number;
  "total count": number;
}

const chartData: ChartData[] = [
  { percentile: 0, "total count": 1 },
  { percentile: 10, "total count": 2 },
  { percentile: 20, "total count": 4 },
  { percentile: 30, "total count": 5 },
  { percentile: 40, "total count": 8 },
  { percentile: 50, "total count": 12 },
  { percentile: 60, "total count": 5 },
  { percentile: 70, "total count": 3 },
  { percentile: 80, "total count": 2 },
  { percentile: 90, "total count": 3 },
  { percentile: 100, "total count": 1 },
];

const chartConfig = {
  frequency: {
    label: "Students",
    color: "rgb(67 56 202)",
  },
} satisfies ChartConfig;

const AVERAGE_PERCENTILE = 72;

export function ComparisonGraph() {
  const { percentile } = useStoreState();

  return (
    <Card id="comparison-graph">
      <CardHeader>
        <CardTitle>Comparison Graph</CardTitle>
        <div className="text-base flex justify-between items-start">
          <CardDescription className="w-4/5 mt-2 lg:text-base text-xs">
            <span className="font-semibold">
              You scored {percentile}% percentile
            </span>{" "}
            which is {percentile > AVERAGE_PERCENTILE ? "higher" : "lower"} than
            the average {AVERAGE_PERCENTILE}% of all the engineers who took this
            assessment
          </CardDescription>
          <div className="h-12 aspect-square">
            <Avatar className="text-2xl bg-slate-100 ring-1 ring-slate-200 flex justify-center items-center h-full w-full">
              <AvatarFallback>📈</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="percentile"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="frequency"
                  nameKey="percentile"
                  indicator="line"
                />
              }
            />
            <ReferenceLine
              x={Math.round(percentile / 10) * 10}
              strokeDasharray="8 5"
              ifOverflow="visible"
              label={
                <Label
                  value={"Your Percentile"}
                  className="font-sans font-medium md:text-base"
                />
              }
            />
            <Line
              dataKey="total count"
              type="natural"
              stroke="rgb(67 56 202)"
              strokeWidth={1}
              dot={({ cx, cy, payload }) => (
                <Circle
                  key={payload.percentile}
                  x={cx - 8 / 2}
                  y={cy - 8 / 2}
                  width={8}
                  height={8}
                  fill="white"
                  stroke="rgb(67 56 202)"
                />
              )}
              activeDot={{ r: 8, stroke: "white" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
