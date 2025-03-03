"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

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
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="border bg-background rounded p-2">
          <p className="text-sm">
            <span className="text-blue-500 font-bold">{label}: </span>
            <span>
              {new Intl.NumberFormat("pt-br").format(payload[0].value)}
            </span>
          </p>
        </div>
      );
    }
  };

  const orderFromHighest = chartData.sort(
    (a, b) => Number(b.total_expenses) - Number(a.total_expenses)
  );

  return (
    <Card className=" border-0 ">
      <CardContent className="p-0">
        <ChartContainer className="min-h-[600px] w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={orderFromHighest}
            layout="vertical"
            margin={{
              right: 20,
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
              hide
            />

            <XAxis
              type="number"
              dataKey="total_expenses"
              tickMargin={10}
              tickFormatter={(value) =>
                new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(value)
              }
            />
            <ChartTooltip content={CustomTooltip} />
            <Bar dataKey="total_expenses" layout="vertical" radius={4}>
              <LabelList
                dataKey="uf"
                position="insideLeft"
                className="fill-white font-bold"
              />
              <LabelList
                dataKey="total_expenses"
                position="insideRight"
                fontSize={10}
                className="fill-white font-medium"
                formatter={(value: any) =>
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(value)
                }
              />
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  className={cn(
                    "fill-current ",
                    entry.label === "Brasil" ? "fill-blue-700" : "fill-blue-500"
                  )}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
