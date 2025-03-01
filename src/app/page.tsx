import ChartArea from "@/components/common/chart-area";
import Filter from "@/components/common/filter";

import Header from "@/components/common/header";

import { SenatorByPartyProps, SenatorByUFProps } from "@/types/senator.types";

async function fetchSummaryByParty(year: string = "2024") {
  try {
    const response = await fetch(
      "https://apis.codante.io/senator-expenses/summary/by-party"
    );
    const senatorsByParty: SenatorByPartyProps[] = await response.json();
    const filteredSenatorsByParty = senatorsByParty
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

    return filteredSenatorsByParty || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchSummaryByUF(year: string = "2024") {
  try {
    const response = await fetch(
      "https://apis.codante.io/senator-expenses/summary/by-uf"
    );
    const senatorsByUf: SenatorByUFProps[] = await response.json();
    const filteredSenatorsByUf = senatorsByUf
      .filter((senator) => senator.year === year)
      .map((senator) => {
        return senator.data.map((senatorData) => {
          return {
            label: senatorData.uf,
            total_expenses: senatorData.total_expenses,
          };
        });
      })
      .flat();

    return filteredSenatorsByUf || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

interface HomeProps {
  searchParams: {
    filter: string;
    year: string;
  };
}

type FilterType = "uf" | "party";

export default async function Home({ searchParams }: HomeProps) {
  const year = searchParams.year || "2024";
  const filter: FilterType = (searchParams.filter as FilterType) || "party";

  const senatorsByParty = await fetchSummaryByParty(year);
  const senatorsByUF = await fetchSummaryByUF(year);

  const list = filter === "party" ? senatorsByParty : senatorsByUF;
  const title = filter === "party" ? "Gasto por Partido" : "Gasto por UF";
  return (
    <div className="space-y-8">
      <Header filter={filter} year={year} />

      <div className="p-4 w-full max-w-[1400px] mx-auto space-y-4">
        <Filter filter={filter} />
        <ChartArea list={list} title={title} year="2024" />
      </div>
    </div>
  );
}
