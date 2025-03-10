"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FilterProps {
  filter: "uf" | "party";
}

export default function Filter({ filter }: FilterProps) {
  const router = useRouter();
  const [year, setYear] = useState("2024");

  const addParams = (key: string, year: string) => {
    router.push(`/?filter=${key}&year=${year}`);
  };

  const handleChangeYear = (value: string) => {
    setYear(value);
    const params = new URLSearchParams(window.location.search);
    params.set("year", value);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <div className="space-x-1 flex items-center">
        <Button
          onClick={() => addParams("uf", year)}
          variant={filter === "uf" ? "default" : "outline"}
        >
          UF
        </Button>
        <Button
          onClick={() => addParams("party", year)}
          variant={filter === "party" ? "default" : "outline"}
        >
          Partido
        </Button>
      </div>

      <div className="w-px h-8 bg-border " />

      <Select value={year} onValueChange={(value) => handleChangeYear(value)}>
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
