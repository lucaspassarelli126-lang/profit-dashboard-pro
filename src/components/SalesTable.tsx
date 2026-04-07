import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sales = [
  { cliente: "Confeitaria Doce Mel", produto: "Site Institucional + Catálogo", valor: "R$ 5.500,00", status: "Aprovado", data: "06/04/2026" },
  { cliente: "Barbearia Lord", produto: "Site + Agendamento Online", valor: "R$ 4.997,00", status: "Aprovado", data: "05/04/2026" },
  { cliente: "Pizzaria Bella Massa", produto: "Site com Cardápio Digital", valor: "R$ 3.497,00", status: "Aprovado", data: "05/04/2026" },
  { cliente: "Pet Shop Patinhas", produto: "Landing Page + Google Ads", valor: "R$ 2.497,00", status: "Aprovado", data: "04/04/2026" },
  { cliente: "Clínica Estética Glow", produto: "Site Institucional Premium", valor: "R$ 8.500,00", status: "Pendente", data: "04/04/2026" },
  { cliente: "Oficina Auto Center", produto: "Site + Sistema de Orçamentos", valor: "R$ 9.990,00", status: "Aprovado", data: "03/04/2026" },
  { cliente: "Padaria Pão Quente", produto: "Site com Delivery Integrado", valor: "R$ 11.997,00", status: "Aprovado", data: "02/04/2026" },
  { cliente: "Studio Bella Hair", produto: "Landing Page + Instagram", valor: "R$ 8.058,79", status: "Aprovado", data: "01/04/2026" },
  { cliente: "Açaí Mania", produto: "Site + Cardápio Online", valor: "R$ 2.497,00", status: "Cancelado", data: "01/04/2026" },
];

const statusVariant: Record<string, string> = {
  Aprovado: "bg-accent text-accent-foreground",
  Pendente: "bg-warning/10 text-warning",
  Cancelado: "bg-destructive/10 text-destructive",
};

export function SalesTable() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "400ms" }}>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Vendas Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.map((sale, i) => (
                <TableRow key={i} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">{sale.cliente}</TableCell>
                  <TableCell className="text-muted-foreground">{sale.produto}</TableCell>
                  <TableCell className="font-semibold">{sale.valor}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={statusVariant[sale.status]}>
                      {sale.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{sale.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
