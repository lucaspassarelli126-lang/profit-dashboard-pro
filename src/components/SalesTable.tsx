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
  { cliente: "Maria Silva", produto: "Curso de Marketing Digital", valor: "R$ 297,00", status: "Aprovado", data: "05/04/2026" },
  { cliente: "João Santos", produto: "E-book Renda Extra", valor: "R$ 47,90", status: "Aprovado", data: "05/04/2026" },
  { cliente: "Ana Oliveira", produto: "Mentoria Premium", valor: "R$ 997,00", status: "Pendente", data: "04/04/2026" },
  { cliente: "Carlos Lima", produto: "Curso de Tráfego Pago", valor: "R$ 197,00", status: "Aprovado", data: "04/04/2026" },
  { cliente: "Fernanda Costa", produto: "Pack de Templates", valor: "R$ 67,00", status: "Cancelado", data: "03/04/2026" },
  { cliente: "Roberto Alves", produto: "Curso de Copywriting", valor: "R$ 347,00", status: "Aprovado", data: "03/04/2026" },
  { cliente: "Patrícia Rocha", produto: "E-book Renda Extra", valor: "R$ 47,90", status: "Aprovado", data: "02/04/2026" },
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
