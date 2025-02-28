import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChartComponent } from "./charts/bar-chart-component";

interface ChartAreaProps {
  list: {
    label: string;
    total_expenses: string;
  }[];
  title: string;
  year?: string;
}

export default function ChartArea({
  title,
  list,
  year = "2024",
}: ChartAreaProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>
          Dados de <span className="font-bold">{year}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BarChartComponent chartData={list} />
      </CardContent>
    </Card>
  );
}
