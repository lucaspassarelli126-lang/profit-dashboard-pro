import { Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { label: "Abandono C.", value: "3" },
  { label: "Reembolso", value: "2,1%" },
  { label: "Charge Back", value: "0%" },
  { label: "MED", value: "0%" },
];

export function SideMetrics() {
  return (
    <Card className="animate-fade-in h-full" style={{ animationDelay: "250ms" }}>
      <CardContent className="p-0 divide-y divide-border">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-sm text-muted-foreground">{m.label}</p>
              <p className="text-xl font-bold text-foreground mt-0.5">{m.value}</p>
            </div>
            <Eye className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
