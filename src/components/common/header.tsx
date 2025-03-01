interface HeaderProps {
  filter: "uf" | "party";
  year: string;
}

export default function Header({ filter, year }: HeaderProps) {
  const filterValue = filter === "uf" ? "Gastos por UF" : "Gastos por Partido";

  return (
    <header className=" border-b">
      <div className="flex p-4 items-center justify-between max-w-[1400px] mx-auto">
        <div>
          <h1 className="font-bold text-2xl">
            Gastos dos Senadores Brasileiros
          </h1>
          <p className="text-muted-foreground">
            Gastos dos senadores brasileiros total por{" "}
            <span className="font-bold text-primary">{filterValue} </span>em{" "}
            <span className="font-bold text-primary">{year}</span>
          </p>
        </div>
      </div>
    </header>
  );
}
