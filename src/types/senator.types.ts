export interface SenatorProps {
  year: string;
  data: {
    party: string;
    senator_ids: string[];
    total_expenses: string;
    total_per_senator: number;
  }[];
}
