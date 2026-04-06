import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { day: "01/03", valor: 420 },
  { day: "05/03", valor: 680 },
  { day: "08/03", valor: 510 },
  { day: "12/03", valor: 890 },
  { day: "15/03", valor: 750 },
  { day: "18/03", valor: 1120 },
  { day: "21/03", valor: 980 },
  { day: "24/03", valor: 1340 },
  { day: "27/03", valor: 1100 },
  { day: "30/03", valor: 1580 },
  { day: "02/04", valor: 1420 },
  { day: "05/04", valor: 1890 },
];

export function RevenueChart() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "300ms" }}>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Faturamento</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(153, 60%, 38%)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(153, 60%, 38%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" tickFormatter={(v) => `R$${v}`} />
            <Tooltip
              formatter={(value: number) => [`R$ ${value.toFixed(2)}`, "Faturamento"]}
              contentStyle={{
                borderRadius: "0.75rem",
                border: "1px solid hsl(220, 13%, 91%)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
            <Area
              type="monotone"
              dataKey="valor"
              stroke="hsl(153, 60%, 38%)"
              strokeWidth={2.5}
              fill="url(#colorValor)"
              dot={{ r: 4, fill: "hsl(153, 60%, 38%)", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, fill: "hsl(153, 60%, 38%)", strokeWidth: 2, stroke: "#fff" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
