import { Bell, Search, User, Moon, Sun, RefreshCw } from "lucide-react";
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
    <header className="border-b border-border bg-card">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <Search className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        </div>
        <div className="flex items-center gap-2">
          {/* Theme toggles */}
          <div className="flex items-center bg-secondary rounded-full p-0.5 gap-0.5">
            <button className="p-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors">
              <Sun className="h-4 w-4" />
            </button>
            <button className="p-1.5 rounded-full bg-primary/20 text-primary transition-colors">
              <Moon className="h-4 w-4" />
            </button>
          </div>
          {/* Notification bell */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 h-[18px] min-w-[18px] px-1 rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground flex items-center justify-center">
              10
            </span>
          </Button>
          {/* Avatar */}
          <div className="h-9 w-9 rounded-full bg-muted-foreground/30 flex items-center justify-center cursor-pointer">
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="px-4 md:px-6 pb-4 flex flex-wrap items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Última atualização: há 2 minutos
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 ml-auto">
          <Select defaultValue="todos">
            <SelectTrigger className="w-[120px] bg-secondary border-border text-sm">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Tipo</SelectItem>
              <SelectItem value="digital">Digital</SelectItem>
              <SelectItem value="fisico">Físico</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="todos">
            <SelectTrigger className="w-[150px] bg-secondary border-border text-sm">
              <SelectValue placeholder="Produtos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Produtos</SelectItem>
              <SelectItem value="curso1">Curso Marketing</SelectItem>
              <SelectItem value="ebook1">E-book</SelectItem>
            </SelectContent>
          </Select>
          <div>
            <p className="text-[10px] text-muted-foreground mb-1">Período</p>
            <Select defaultValue="hoje">
              <SelectTrigger className="w-[120px] bg-secondary border-border text-sm">
                <SelectValue placeholder="Hoje" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hoje">Hoje</SelectItem>
                <SelectItem value="7dias">7 dias</SelectItem>
                <SelectItem value="30dias">30 dias</SelectItem>
                <SelectItem value="90dias">90 dias</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-lg px-5">
            Atualizar
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
