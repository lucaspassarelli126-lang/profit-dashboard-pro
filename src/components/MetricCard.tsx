import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  delay?: number;
}

export function MetricCard({ title, value, icon: Icon, trend, delay = 0 }: MetricCardProps) {
  return (
    <Card className="hover-lift animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {trend && (
              <p className="text-xs font-medium text-primary">
                {trend}
              </p>
            )}
          </div>
          <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center">
            <Icon className="h-6 w-6 text-accent-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
