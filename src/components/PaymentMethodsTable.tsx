import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, CreditCard, Smartphone, QrCode, Barcode } from "lucide-react";

const paymentMethods = [
  { name: "Pix", icon: QrCode, conversao: "4,2%", valor: "R$ 5.230,00" },
  { name: "Boleto", icon: Barcode, conversao: "1,8%", valor: "R$ 1.420,00" },
  { name: "Cartão de crédito", icon: CreditCard, conversao: "6,1%", valor: "R$ 3.890,00" },
  { name: "Pic Pay", icon: Smartphone, conversao: "0,9%", valor: "R$ 380,00" },
  { name: "Apple Pay", icon: Smartphone, conversao: "0,5%", valor: "R$ 210,00" },
  { name: "Google Pay", icon: Smartphone, conversao: "0,7%", valor: "R$ 290,00" },
  { name: "3DS", icon: CreditCard, conversao: "0,3%", valor: "R$ 120,00" },
  { name: "PIX Automático", icon: QrCode, conversao: "1,2%", valor: "R$ 449,89" },
];

export function PaymentMethodsTable() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "300ms" }}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Meios de Pagamento</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Meios de Pagamento</TableHead>
              <TableHead>Conversão</TableHead>
              <TableHead className="flex items-center gap-1.5">
                Valor <Eye className="h-4 w-4 text-muted-foreground" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentMethods.map((method) => (
              <TableRow key={method.name} className="hover:bg-muted/30 transition-colors border-none">
                <TableCell className="flex items-center gap-3 font-medium">
                  <method.icon className="h-5 w-5 text-muted-foreground" />
                  {method.name}
                </TableCell>
                <TableCell className="text-muted-foreground">{method.conversao}</TableCell>
                <TableCell className="text-muted-foreground">{method.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
