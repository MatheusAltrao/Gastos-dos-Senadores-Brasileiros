import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className=" border-b">
      <div className="flex p-4 items-center justify-between max-w-[1200px] mx-auto">
        <div>
          <h1 className="font-bold text-2xl">
            Gastos dos Senadores Brasileiros
          </h1>
          <p className="text-muted-foreground">
            Gastos dos senadores brasileiros total por estado (UF) - CEAPS
          </p>
        </div>
      </div>
    </header>
  );
}
