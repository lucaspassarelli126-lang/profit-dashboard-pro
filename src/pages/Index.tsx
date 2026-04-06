import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricCard } from "@/components/MetricCard";
import { PaymentMethodsTable } from "@/components/PaymentMethodsTable";
import { SideMetrics } from "@/components/SideMetrics";
import { RevenueChart } from "@/components/RevenueChart";
import { SalesTable } from "@/components/SalesTable";

const topMetrics = [
  { title: "Vendas realizadas", value: "R$ 11.989,89", accentBorder: true, delay: 0 },
  { title: "Quantidade de vendas", value: "327", accentBorder: true, delay: 100 },
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 space-y-6 overflow-auto">
            {/* Top metric cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topMetrics.map((m) => (
                <MetricCard key={m.title} {...m} />
              ))}
            </div>

            {/* Payment methods + Side metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <PaymentMethodsTable />
              </div>
              <SideMetrics />
            </div>

            {/* Revenue chart */}
            <RevenueChart />

            {/* Sales table */}
            <SalesTable />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
