import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, CreditCard, Smartphone, QrCode } from "lucide-react";

const paymentMethods = [
  { name: "Pix", icon: QrCode, conversao: "0%", valor: "R$ 0,00" },
  { name: "Boleto", icon: () => <span className="text-base font-mono tracking-tighter text-muted-foreground">||||</span>, conversao: "0%", valor: "R$ 0,00" },
  { name: "Cartão de crédito", icon: CreditCard, conversao: "0%", valor: "R$ 0,00" },
  { name: "Pic Pay", icon: () => <span className="text-sm font-bold text-muted-foreground">P°</span>, conversao: "0%", valor: "R$ 0,00" },
  { name: "Apple Pay", icon: () => <span className="text-xs border border-muted-foreground rounded px-1 text-muted-foreground">Pay</span>, conversao: "0%", valor: "R$ 0,00" },
  { name: "Google Pay", icon: () => <span className="text-xs font-medium text-muted-foreground">G Pay</span>, conversao: "0%", valor: "R$ 0,00" },
  { name: "3DS", icon: CreditCard, conversao: "0%", valor: "R$ 0,00" },
  { name: "PIX Automático", icon: QrCode, conversao: "0%", valor: "R$ 0,00" },
];

export function PaymentMethodsTable() {
  return (
    <Card className="animate-fade-in h-full" style={{ animationDelay: "200ms" }}>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-primary font-medium text-sm pl-5 py-4">Meios de Pagamento</TableHead>
              <TableHead className="text-primary font-medium text-sm py-4">Conversão</TableHead>
              <TableHead className="text-primary font-medium text-sm py-4">
                <span className="flex items-center gap-1.5">
                  Valor <Eye className="h-4 w-4 text-muted-foreground" />
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <TableRow key={method.name} className="hover:bg-muted/20 transition-colors border-none">
                  <TableCell className="pl-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="text-foreground text-sm">{method.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm py-3.5">{method.conversao}</TableCell>
                  <TableCell className="text-muted-foreground text-sm py-3.5">{method.valor}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
