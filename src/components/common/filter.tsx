import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filter() {
  return (
    <div className="flex items-center justify-end gap-2">
      <span>filtrar por: </span>
      <div className="space-x-1">
        <Button variant={"outline"}>Gastos por UF</Button>
        <Button variant={"outline"}>Gastos por Partido</Button>
      </div>

      <div className="w-px h-8 bg-border " />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="year" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem defaultValue={"2024"} value="2024">
            2024
          </SelectItem>
          <SelectItem value="2023">2023</SelectItem>
          <SelectItem value="2022">2022</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
