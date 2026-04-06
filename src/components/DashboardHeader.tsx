import { Bell, Search, User, RefreshCw } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card px-4 md:px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground flex items-center justify-center">
              10
            </span>
          </Button>
          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-xs text-muted-foreground">
            Última atualização: há 2 minutos
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 ml-auto">
          <Select defaultValue="todos">
            <SelectTrigger className="w-[120px] bg-secondary border-border">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="digital">Digital</SelectItem>
              <SelectItem value="fisico">Físico</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="todos">
            <SelectTrigger className="w-[140px] bg-secondary border-border">
              <SelectValue placeholder="Produtos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Produtos</SelectItem>
              <SelectItem value="curso1">Curso Marketing</SelectItem>
              <SelectItem value="ebook1">E-book Renda Extra</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="hoje">
            <SelectTrigger className="w-[120px] bg-secondary border-border">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hoje">Hoje</SelectItem>
              <SelectItem value="7dias">7 dias</SelectItem>
              <SelectItem value="30dias">30 dias</SelectItem>
              <SelectItem value="90dias">90 dias</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <RefreshCw className="h-4 w-4" />
            Atualizar
          </Button>
        </div>
      </div>
    </header>
  );
}
