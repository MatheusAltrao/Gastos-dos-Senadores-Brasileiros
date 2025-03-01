export interface SenatorByPartyProps {
  year: string;
  data: {
    party: string;
    senator_ids: string[];
    total_expenses: string;
    total_per_senator: number;
  }[];
}

export interface SenatorByUFProps {
  year: string;
  data: {
    uf: string;
    total_expenses: string;
  }[];
}
