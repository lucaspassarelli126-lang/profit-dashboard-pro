import { Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  delay?: number;
}

export function MetricCard({ title, value, delay = 0 }: MetricCardProps) {
  return (
    <Card
      className="animate-fade-in relative overflow-hidden border-l-[3px] border-l-primary"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-5 pb-4">
        <p className="text-sm text-primary font-medium mb-3">{title}</p>
        <div className="flex items-end justify-between">
          <p className="text-3xl font-bold text-foreground">{value}</p>
          <Eye className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        </div>
      </CardContent>
    </Card>
  );
}
