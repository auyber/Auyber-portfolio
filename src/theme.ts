import { createTheme } from "@mui/material";

// Paleta e tipografia da identidade Codice Genesini.
export const codice = {
  bg: "#0D1016",
  panel: "#141820",
  panel2: "#1A1F29",
  panel3: "#0A0C11",
  line: "rgba(231,236,244,.10)",
  line2: "rgba(231,236,244,.18)",
  fg: "#E7ECF4",
  muted: "#8B95A8",
  faint: "#5A6378",
  ciano: "#22D3C7",
  terra: "#C1553B",
  oliva: "#8A9A5B",
  ouro: "#C99A44",
};

export const fonts = {
  display: "'Bricolage Grotesque', system-ui, sans-serif",
  body: "'Archivo', system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
};

// Mantido em modo claro de propósito: as seções Sobre/Footer têm fundo branco
// próprio. Hero e Projetos pintam o fundo escuro (primary.main) e usam texto
// claro (primary.contrastText) por conta própria.
const theme = createTheme({
  palette: {
    primary: { main: codice.bg, contrastText: codice.fg },
    secondary: { main: codice.ciano },
  },
  typography: {
    fontFamily: fonts.body,
  },
});

export default theme;
