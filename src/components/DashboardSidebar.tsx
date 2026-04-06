import {
  Home,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  Store,
  CreditCard,
  UserCheck,
  Building2,
  Link2,
  Ticket,
  TrendingUp,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Produtos", url: "/produtos", icon: Package },
  { title: "Vitrine", url: "/vitrine", icon: Store },
  { title: "Minhas Vendas", url: "/vendas", icon: ShoppingCart },
  { title: "Assinaturas", url: "/assinaturas", icon: CreditCard },
  { title: "Relatórios", url: "/relatorios", icon: BarChart3 },
  { title: "Equipe", url: "/equipe", icon: Users },
  { title: "Afiliados", url: "/afiliados", icon: UserCheck },
  { title: "Financeiro", url: "/financeiro", icon: Building2 },
  { title: "Integrações", url: "/integracoes", icon: Link2 },
  { title: "Cupons", url: "/cupons", icon: Ticket },
  { title: "Configurações", url: "/configuracoes", icon: Settings },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="font-bold text-xl text-foreground">Dashboard</span>
          )}
        </div>
        {!collapsed && (
          <div className="mt-4 rounded-lg bg-secondary border border-border p-3">
            <p className="text-xs text-muted-foreground">Faturamento</p>
            <p className="text-sm font-semibold text-foreground">
              R$ 11.989,89 / R$ 50K
            </p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-border">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: "24%" }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1 text-right">24%</p>
          </div>
        )}
      </SidebarHeader>
      <SidebarContent className="pt-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-accent text-primary font-medium"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
