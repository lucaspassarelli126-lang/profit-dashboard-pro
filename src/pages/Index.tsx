import { DollarSign, ShoppingCart, Package, TrendingUp } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricCard } from "@/components/MetricCard";
import { RevenueChart } from "@/components/RevenueChart";
import { SalesTable } from "@/components/SalesTable";

const metrics = [
  { title: "Faturamento Total", value: "R$ 11.989,89", icon: DollarSign, trend: "+12,5% vs mês anterior", delay: 0 },
  { title: "Vendas Hoje", value: "R$ 1.247,32", icon: TrendingUp, trend: "+8,3% vs ontem", delay: 100 },
  { title: "Número de Pedidos", value: "327", icon: ShoppingCart, trend: "+23 hoje", delay: 150 },
  { title: "Taxa de Conversão", value: "3,8%", icon: Package, trend: "+0,4% vs semana anterior", delay: 200 },
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 space-y-6 overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <MetricCard key={m.title} {...m} />
              ))}
            </div>
            <RevenueChart />
            <SalesTable />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
