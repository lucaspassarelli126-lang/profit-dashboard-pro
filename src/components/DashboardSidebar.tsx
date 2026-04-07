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
        <div className="flex items-center gap-3.5 mb-8 overflow-hidden select-none px-1">
          <div className="h-12 w-12 rounded-[12px] bg-[#00a669] flex items-center justify-center shrink-0 shadow-sm">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0a161d]">
              {/* High-fidelity Cactus Silhouette */}
              <path 
                d="M12 6.5C12.55 6.5 13 6.95 13 7.5V17.5C13 18.05 12.55 18.5 12 18.5C11.45 18.5 11 18.05 11 17.5V7.5C11 6.95 11.45 6.5 12 6.5Z" 
                fill="currentColor"
              />
              <path 
                d="M8.5 10.5V11.5C8.5 12.6 9.4 13.5 10.5 13.5H11V15.5" 
                stroke="currentColor" 
                strokeWidth="2.8" 
                strokeLinecap="round"
              />
              <path 
                d="M15.5 8.5V9.5C15.5 10.6 14.6 11.5 13.5 11.5H13V14" 
                stroke="currentColor" 
                strokeWidth="2.8" 
                strokeLinecap="round"
              />
            </svg>
          </div>
          {!collapsed && (
            <span 
              className="font-bold text-[32px] text-[#00a669] tracking-tight leading-none"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              cakto
            </span>
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
