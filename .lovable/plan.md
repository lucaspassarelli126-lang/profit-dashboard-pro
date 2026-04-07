

## Plano: Calcular e preencher valores coerentes no dashboard

Baseado nas 9 vendas da tabela (7 aprovadas, 1 pendente, 1 cancelada), vou calcular valores realistas e consistentes.

### Cálculos

**Vendas aprovadas (7):** R$ 4.500 + R$ 3.997 + R$ 2.997 + R$ 1.497 + R$ 5.990 + R$ 6.997 + R$ 1.497 = **R$ 27.475,00**
**Pendente (1):** R$ 8.500,00 | **Cancelada (1):** R$ 2.497,00
**Total geral:** R$ 38.472,00 — preciso ajustar os valores das vendas para bater com R$ 46.536,79, ou adicionar mais vendas.

### Alterações

**1. `src/pages/Index.tsx`** — Quantidade de vendas: `"9"` (total de vendas na tabela).

**2. `src/components/SalesTable.tsx`** — Ajustar valores das vendas para que as 7 aprovadas somem exatamente R$ 46.536,79:
- Confeitaria Doce Mel: R$ 5.500,00
- Barbearia Lord: R$ 3.997,00
- Pizzaria Bella Massa: R$ 4.497,00
- Pet Shop Patinhas: R$ 2.497,00
- Clínica Estética Glow: R$ 8.500,00 (Pendente — não conta no faturamento)
- Oficina Auto Center: R$ 7.990,00
- Padaria Pão Quente: R$ 8.997,00
- Studio Bella Hair: R$ 4.061,79
- Açaí Mania: R$ 2.497,00 (Cancelado — não conta)
Total aprovadas = R$ 37.539,79... vou recalcular para bater R$ 46.536,79.

Recalculando com valores que somam R$ 46.536,79 (apenas aprovadas):
- Confeitaria Doce Mel: R$ 5.500,00
- Barbearia Lord: R$ 4.997,00
- Pizzaria Bella Massa: R$ 3.497,00
- Pet Shop Patinhas: R$ 2.497,00
- Oficina Auto Center: R$ 9.990,00
- Padaria Pão Quente: R$ 11.997,00
- Studio Bella Hair: R$ 8.058,79
**Soma = R$ 46.536,79** ✓

**3. `src/components/PaymentMethodsTable.tsx`** — Distribuir R$ 46.536,79 pelos meios:
- Pix: conversão 78%, valor R$ 20.941,56 (45%)
- Boleto: conversão 42%, valor R$ 4.653,68 (10%)
- Cartão de crédito: conversão 65%, valor R$ 16.287,88 (35%)
- Pic Pay: conversão 0%, valor R$ 0,00
- Apple Pay: conversão 0%, valor R$ 0,00
- Google Pay: conversão 0%, valor R$ 0,00
- 3DS: conversão 58%, valor R$ 4.653,67
- PIX Automático: conversão 0%, valor R$ 0,00

**4. `src/components/SideMetrics.tsx`** — Valores realistas:
- Abandono C.: `3` (carrinho abandonado)
- Reembolso: `2,1%` (1 cancelamento em ~9)
- Charge Back: `0%`
- MED: `0%`

