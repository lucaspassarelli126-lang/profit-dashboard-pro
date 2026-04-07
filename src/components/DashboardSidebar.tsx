import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  ShoppingBag,
  DollarSign,
  FileText,
  Users,
  UserCheck,
  Building2,
  Link2,
  AppWindow,
  Cog,
  Ticket,
  ChevronDown,
  ChevronRight,
  
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

const mainMenuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Produtos", url: "/produtos", icon: Package },
  { title: "Vitrine", url: "/vitrine", icon: ShoppingCart },
  { title: "Minhas Vendas", url: "/vendas", icon: ShoppingBag },
  { title: "Assinaturas", url: "/assinaturas", icon: DollarSign },
  { title: "Relatórios", url: "/relatorios", icon: FileText },
  { title: "Equipe", url: "/equipe", icon: Users },
  { title: "Afiliados", url: "/afiliados", icon: UserCheck },
  { title: "Financeiro", url: "/financeiro", icon: Building2 },
];

const integracoesItems = [
  { title: "Apps", url: "/integracoes/apps", icon: AppWindow },
  { title: "Cakto API", url: "/integracoes/api", icon: Cog },
];

const bottomItems = [
  { title: "Cupons", url: "/cupons", icon: Ticket },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const [integracoesOpen, setIntegracoesOpen] = useState(true);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-5 pb-4">
        {/* Cakto Logo */}
        <div className="flex items-center gap-3 mb-5 overflow-hidden">
          <div className="h-11 w-11 rounded-xl bg-[#00a26e] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,162,110,0.2)]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow-sm">
              <path d="M12 5V19" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <path d="M8 11V13C8 14.1046 8.89543 15 10 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <path d="M16 9V11C16 12.1046 15.1046 13 14 13" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          {!collapsed && (
            <span className="font-bold text-2xl text-foreground tracking-tight select-none">cakto</span>
          )}
        </div>

        {/* Faturamento card */}
        {!collapsed && (
          <div className="rounded-xl bg-secondary border border-border p-3.5">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground leading-tight">Faturamento</p>
                <p className="text-sm font-semibold text-foreground leading-tight">
                  R$ 30,82 / R$ 10K
                </p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-border">
                <div className="h-full rounded-full bg-primary" style={{ width: "0.3%" }} />
              </div>
              <span className="text-xs text-muted-foreground">0%</span>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="pt-1 px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-[14px]"
                      activeClassName="bg-sidebar-accent text-primary font-medium"
                    >
                      <item.icon className="h-[18px] w-[18px] shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Integrações with submenu */}
              <SidebarMenuItem>
                <button
                  onClick={() => setIntegracoesOpen(!integracoesOpen)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-[14px] w-full text-primary font-medium bg-sidebar-accent`}
                >
                  <Link2 className="h-[18px] w-[18px] shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">Integrações</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${integracoesOpen ? "" : "-rotate-90"}`} />
                    </>
                  )}
                </button>
              </SidebarMenuItem>

              {integracoesOpen && !collapsed && integracoesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 pl-10 pr-3 py-2 rounded-lg text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-[13px]"
                      activeClassName="text-primary font-medium"
                    >
                      <item.icon className="h-[16px] w-[16px] shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-[14px]"
                      activeClassName="bg-sidebar-accent text-primary font-medium"
                    >
                      <item.icon className="h-[18px] w-[18px] shrink-0" />
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
