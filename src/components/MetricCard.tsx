import { Eye, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  icon?: LucideIcon;
  trend?: string;
  delay?: number;
  accentBorder?: boolean;
}

export function MetricCard({ title, value, trend, delay = 0, accentBorder = false }: MetricCardProps) {
  return (
    <Card
      className={`animate-fade-in relative overflow-hidden ${accentBorder ? "border-l-4 border-l-primary" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-5">
        <p className="text-sm text-primary font-medium">{title}</p>
        <div className="flex items-end justify-between mt-2">
          <p className="text-3xl font-bold text-foreground">{value}</p>
          <Eye className="h-5 w-5 text-muted-foreground" />
        </div>
        {trend && (
          <p className="text-xs text-muted-foreground mt-1">{trend}</p>
        )}
      </CardContent>
    </Card>
  );
}
