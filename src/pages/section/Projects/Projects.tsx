import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { Project } from "../../../components/Card/ProjectCard";
import { codice, fonts } from "../../../theme";
import portfoliocapa from "../../../assets/images/portfoliocapa.png";
import nutri from "../../../assets/images/nutri.jpg";
import fast from "../../../assets/images/fast.png";
import lia from "../../../assets/images/liaartfestas.png";

const Section = styled("section")(({ theme }) => ({
  backgroundColor: codice.bg,
  padding: theme.spacing(10, 0),
  borderTop: `1px solid ${codice.line}`,
}));

const projects: Project[] = [
  {
    title: "API REST — Rede de Lanchonetes",
    category: "BACK-END · API",
    terminal: true,
    desc: "API REST em Node.js para uma rede que atende múltiplos canais (app, totem, balcão, pickup e web). Fluxo completo de pedido com validação de estoque, pagamento (mock) e máquina de estados, autenticação JWT, perfis de acesso, fidelidade com consentimento (LGPD) e documentação Swagger/OpenAPI testável no navegador.",
    stack: ["Node.js", "Express", "Sequelize", "SQLite", "JWT", "Swagger", "Postman"],
    links: [
      { label: "↗ VER DOCS", href: "https://raizes-do-nordeste-backend.onrender.com/api/docs" },
      { label: "</> VER CÓDIGO", href: "https://github.com/auyber/raizes-do-nordeste-backend" },
    ],
  },
  {
    title: "Portfólio",
    category: "FRONT-END",
    image: portfoliocapa,
    desc: "Site responsivo para apresentar minhas informações profissionais — contato, educação, habilidades e projetos de tecnologia. Ícones interativos e cards dinâmicos exibindo os projetos, cada um com botões para o site ou o repositório no GitHub.",
    stack: ["TypeScript", "React", "CSS", "Vite"],
    links: [{ label: "</> VER CÓDIGO", href: "https://github.com/auyber/Auyber-portfolio" }],
  },
  {
    title: "Joyce Genesini — Nutricionista",
    category: "WEBSITE",
    image: nutri,
    desc: 'Site responsivo estruturado em várias páginas (Início, Especialidades, Sobre, Blog e Contato). CTAs estratégicos e botão flutuante "Agende sua consulta", slides automáticos com Bootstrap, versionamento de CSS e metatags otimizadas para SEO.',
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
    links: [
      { label: "↗ VER SITE", href: "https://joycegenesininutri.com.br/" },
      { label: "</> VER CÓDIGO", href: "https://github.com/auyber/joyce_genesini" },
    ],
  },
  {
    title: "Fast Revest Revestimentos",
    category: "WEBSITE",
    image: fast,
    desc: "Site responsivo com abordagem mobile-first, protótipo no Figma e identidade visual da marca. Menu fixo, scroll suave, cards animados com AOS, botão flutuante de WhatsApp e botão de retorno ao topo. Performance e acessibilidade otimizadas com ARIA e metatags.",
    stack: ["HTML5", "CSS3", "JavaScript", "AOS", "Figma"],
    links: [
      { label: "↗ VER SITE", href: "https://www.fastrevestrevestimentos.com.br" },
      { label: "</> VER CÓDIGO", href: "https://github.com/auyber/Fast-Revest-2.0" },
    ],
  },
  {
    title: "Lia Art Festas",
    category: "WEBSITE",
    image: lia,
    desc: "Construído no conceito Mobile First, totalmente responsivo. Protótipo no Figma explorando paletas e tipografias. Interface prática com animações AOS, múltiplos CTAs e carrossel de imagens com Swiper. Versionamento de CSS e metatags otimizadas para SEO.",
    stack: ["HTML", "CSS", "JavaScript", "Swiper", "Figma"],
    links: [
      { label: "↗ VER SITE", href: "https://liaartfestas.com.br" },
      { label: "</> VER CÓDIGO", href: "https://github.com/auyber/Lia.ArtFestas" },
    ],
  },
];

const Projects = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Box
            sx={{
              fontFamily: fonts.mono,
              fontSize: 13,
              letterSpacing: "2px",
              color: codice.ciano,
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            // repositório
          </Box>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: fonts.display,
              fontWeight: 800,
              letterSpacing: "-1px",
              fontSize: { xs: "2rem", md: "3rem" },
              color: codice.fg,
            }}
          >
            Projetos
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid item xs={12} sm={6} md={4} key={p.title} sx={{ display: "flex" }}>
              <ProjectCard project={p} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
