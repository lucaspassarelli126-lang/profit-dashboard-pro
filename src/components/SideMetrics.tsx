import { Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { label: "Abandono C.", value: "12" },
  { label: "Reembolso", value: "0,8%" },
  { label: "Charge Back", value: "0,2%" },
  { label: "MED", value: "0%" },
];

export function SideMetrics() {
  return (
    <Card className="animate-fade-in h-full" style={{ animationDelay: "350ms" }}>
      <CardContent className="p-0 divide-y divide-border">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-muted-foreground">{m.label}</p>
              <p className="text-xl font-bold text-foreground">{m.value}</p>
            </div>
            <Eye className="h-5 w-5 text-muted-foreground" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
