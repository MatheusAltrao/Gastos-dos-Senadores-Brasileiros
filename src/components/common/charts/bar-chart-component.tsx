"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatStringToAmount } from "@/lib/utils";
import { useState } from "react";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  total_expenses: {
    label: "Total Gasto",
    color: "hsl(var(--chart-1))",
  },

  label: {
    color: "#fff",
  },
} satisfies ChartConfig;

interface BarChartComponentProps {
  chartData: {
    label: string;
    total_expenses: string;
  }[];
}

export function BarChartComponent({ chartData }: BarChartComponentProps) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <Card className="py-10 border-0">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 100,
            }}
            barGap="20%"
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="label"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 4)}
              fontSize={14}
            />
            <XAxis dataKey="total_expenses" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              barSize={20}
              dataKey="total_expenses"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="total_expenses"
                position="right"
                offset={8}
                formatter={formatStringToAmount}
                className="fill-foreground font-medium"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
