import ChartArea from "@/components/common/chart-area";
import Filter from "@/components/common/filter";

import Header from "@/components/common/header";

import { SenatorProps } from "@/types/senator.types";

async function fetchSummaryByParty(year: string = "2024") {
  try {
    const response = await fetch(
      "https://apis.codante.io/senator-expenses/summary/by-party"
    );
    const senators: SenatorProps[] = await response.json();
    const filteredSenators = senators
      .filter((senator) => senator.year === year)
      .map((senator) => {
        return senator.data.map((senatorData) => {
          return {
            label: senatorData.party,
            total_expenses: senatorData.total_expenses,
          };
        });
      })
      .flat();

    console.log(filteredSenators);

    return filteredSenators || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Home() {
  const senators = await fetchSummaryByParty();

  return (
    <div className="space-y-8">
      <Header />

      <div className="p-4 w-full max-w-[1200px] mx-auto space-y-4">
        <Filter />
        <ChartArea list={senators} title="Gasto por Partido" year="2024" />
      </div>
    </div>
  );
}
