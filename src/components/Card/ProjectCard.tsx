import { Box, Typography } from "@mui/material";
import { codice, fonts } from "../../theme";

export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  category: string;
  desc: string;
  stack: string[];
  links: ProjectLink[];
  image?: string;
  terminal?: boolean;
};

// Card de projeto reutilizável (substitui os 4 arquivos quase idênticos).
// Imagem com fade + zoom no hover; projetos back-end usam um mock de terminal.
export default function ProjectCard({ project }: { project: Project }) {
  const { title, category, desc, stack, links, image, terminal } = project;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        background: codice.panel,
        border: `1px solid ${codice.line}`,
        borderRadius: "14px",
        overflow: "hidden",
        transition: ".22s ease",
        "&:hover": {
          borderColor: "rgba(34,211,199,.5)",
          transform: "translateY(-5px)",
          boxShadow: "0 30px 60px -30px rgba(0,0,0,.8)",
        },
        "&:hover .cardImg": { transform: "scale(1.07)", filter: "saturate(1.05)" },
      }}
    >
      {terminal ? (
        <Box
          sx={{
            position: "relative",
            aspectRatio: "16 / 10",
            background: codice.panel3,
            overflow: "hidden",
            p: 2,
            fontFamily: fonts.mono,
            fontSize: "12.5px",
            lineHeight: 1.75,
            color: codice.fg,
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to bottom, transparent 55%, ${codice.panel} 100%)`,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: `1px solid ${codice.line}`,
              pb: 1,
              mb: 1,
            }}
          >
            <span>
              <span style={{ color: codice.terra }}>POST</span> /api/pedidos
            </span>
            <span>
              <span style={{ color: codice.ouro }}>201</span> Created
            </span>
          </Box>
          <Box sx={{ whiteSpace: "pre" }}>
            <div style={{ color: codice.faint }}># fluxo de pedido → pagamento</div>
            <div>{"{"}</div>
            <div>
              {"  "}
              <span style={{ color: codice.muted }}>"status"</span>:{" "}
              <span style={{ color: codice.oliva }}>"CONFIRMADO"</span>,
            </div>
            <div>
              {"  "}
              <span style={{ color: codice.muted }}>"estoque"</span>:{" "}
              <span style={{ color: codice.oliva }}>"ok"</span>,
            </div>
            <div>
              {"  "}
              <span style={{ color: codice.muted }}>"pagamento"</span>:{" "}
              <span style={{ color: codice.oliva }}>"aprovado"</span>
            </div>
            <div>{"}"}</div>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            position: "relative",
            aspectRatio: "16 / 10",
            overflow: "hidden",
            background: codice.panel3,
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `linear-gradient(to bottom, transparent 42%, rgba(20,24,32,.55) 78%, ${codice.panel} 100%)`,
            },
          }}
        >
          <Box
            component="img"
            className="cardImg"
            src={image}
            alt={title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              transition: "transform .5s ease, filter .5s ease",
              filter: "saturate(.92)",
            }}
          />
        </Box>
      )}

      {/* Tag de categoria (neutra — regra Codice: cor decorativa só em código) */}
      <Box
        sx={{
          position: "absolute",
          top: 13,
          left: 13,
          zIndex: 2,
          fontFamily: fonts.mono,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "1.5px",
          padding: "5px 10px",
          borderRadius: "5px",
          background: codice.panel2,
          color: codice.fg,
          border: `1px solid ${codice.line2}`,
          display: "inline-flex",
          alignItems: "center",
          gap: 0.9,
        }}
      >
        <Box sx={{ width: 7, height: 7, borderRadius: "50%", background: codice.muted }} />
        {category}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", flex: 1, p: "22px 22px 20px" }}>
        <Typography
          sx={{
            fontFamily: fonts.display,
            fontWeight: 700,
            fontSize: "1.4rem",
            letterSpacing: "-.3px",
            color: codice.fg,
            mb: 1.25,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: codice.muted,
            fontSize: ".95rem",
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {desc}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.9, mt: 2.25 }}>
          {stack.map((s) => (
            <Box
              key={s}
              sx={{
                fontFamily: fonts.mono,
                fontSize: 11,
                letterSpacing: ".5px",
                color: codice.faint,
                border: `1px solid ${codice.line}`,
                borderRadius: "4px",
                padding: "4px 8px",
              }}
            >
              {s}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.25,
            mt: "auto",
            pt: 2.25,
            borderTop: `1px solid ${codice.line}`,
          }}
        >
          {links.map((l) => (
            <Box
              key={l.label}
              component="a"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: fonts.mono,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "1px",
                color: codice.muted,
                textDecoration: "none",
                transition: ".15s",
                "&:hover": { color: codice.ciano },
              }}
            >
              {l.label}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
