import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import setup from "../../../assets/images/setup-codice.png";
import { codice, fonts } from "../../../theme";

const HeroRoot = styled("section")({
  position: "relative",
  overflow: "hidden",
  backgroundColor: codice.bg,
  borderBottom: `1px solid ${codice.line}`,
});

// Textura de pontos do kit Codice (fundo alinhado e contido).
const Bg = styled("div")({
  position: "absolute",
  inset: 0,
  zIndex: 0,
  backgroundColor: codice.bg,
  backgroundImage:
    "radial-gradient(rgba(231,236,244,.16) 1px, transparent 1.4px)",
  backgroundSize: "22px 22px",
});

// Brilho ciano suave que flutua devagar (clima noturno).
const Glow = styled("div")({
  position: "absolute",
  zIndex: 0,
  width: "min(120vw, 1000px)",
  aspectRatio: "1",
  borderRadius: "50%",
  right: "-18%",
  top: "-30%",
  pointerEvents: "none",
  background:
    "radial-gradient(circle at center, rgba(34,211,199,.18), rgba(34,211,199,.05) 42%, transparent 66%)",
  filter: "blur(6px)",
  animation: "codiceDrift 18s ease-in-out infinite alternate",
  "@keyframes codiceDrift": {
    from: { transform: "translate(0, 0)" },
    to: { transform: "translate(-7%, 6%)" },
  },
  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
});

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cvAuyber.pdf";
    link.download = "cvAuyber.pdf";
    link.click();
  };

  const handleContact = () => {
    window.location.href =
      "mailto:auybergm@hotmail.com?subject=Contato%20via%20site";
  };

  return (
    <HeroRoot>
      <Bg />
      <Glow />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          alignItems="center"
          sx={{
            minHeight: { xs: "auto", md: "min(84vh, 780px)" },
            py: { xs: 7, md: 10 },
          }}
        >
          {/* Foto em "janela de código" */}
          <Grid item xs={12} md={5}>
            <Box sx={{ maxWidth: 430, mx: { xs: "auto", md: 0 } }}>
              <Box
                sx={{
                  border: `1px solid ${codice.line2}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: codice.panel,
                  boxShadow: "0 24px 60px -24px rgba(0,0,0,.7)",
                }}
              >
                <Box
                  sx={{
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 1.75,
                    background: codice.panel2,
                    borderBottom: `1px solid ${codice.line}`,
                  }}
                >
                  {["#5A6378", "#4A5366", "#3A4356"].map((c) => (
                    <Box
                      key={c}
                      sx={{ width: 11, height: 11, borderRadius: "50%", background: c }}
                    />
                  ))}
                  <Box
                    sx={{
                      ml: 1.25,
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      color: codice.muted,
                    }}
                  >
                    ~/codice — setup.png
                  </Box>
                </Box>
                <Box
                  component="img"
                  src={setup}
                  alt="Auyber codando — pixel art"
                  sx={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "4 / 5",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
              <Box
                sx={{
                  mt: 1.5,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: codice.faint,
                  letterSpacing: "1px",
                }}
              >
                // desenvolvedor_web · são_paulo_br
              </Box>
            </Box>
          </Grid>

          {/* Texto */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.1,
                fontFamily: fonts.mono,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "1.5px",
                color: codice.ciano,
                border: "1px solid rgba(34,211,199,.4)",
                background: "rgba(34,211,199,.07)",
                px: 1.5,
                py: 0.75,
                borderRadius: "999px",
                mb: 2.5,
              }}
            >
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: codice.ciano }} />
              CONSTRUINDO
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontFamily: fonts.display,
                fontWeight: 800,
                letterSpacing: "-1.5px",
                lineHeight: 1.02,
                fontSize: { xs: "2.6rem", md: "4rem", lg: "5rem" },
                color: codice.fg,
              }}
            >
              Auyber Genesini Moura
            </Typography>

            <Typography
              sx={{
                fontWeight: 600,
                color: codice.fg,
                fontSize: { xs: "1.2rem", md: "1.6rem" },
                mt: 2,
                letterSpacing: "-.2px",
              }}
            >
              Fullstack JavaScript em evolução
            </Typography>

            <Typography
              sx={{
                color: codice.muted,
                fontSize: { xs: "1rem", md: "1.15rem" },
                mt: 1.25,
                maxWidth: "42ch",
              }}
            >
              Facilidade pra aprender e me adaptar a qualquer stack.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.1, mt: 3 }}>
              {["TYPESCRIPT", "REACT", "JAVASCRIPT", "NODE.JS", "EXPRESS"].map((t) => (
                <Box
                  key={t}
                  sx={{
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "1px",
                    color: codice.muted,
                    border: `1px solid ${codice.line2}`,
                    borderRadius: "5px",
                    padding: "6px 11px",
                  }}
                >
                  {t}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.75, mt: 4 }}>
              <Button
                onClick={handleDownload}
                startIcon={<DownloadIcon />}
                sx={{
                  fontFamily: fonts.mono,
                  fontWeight: 600,
                  letterSpacing: "1px",
                  px: 2.5,
                  py: 1.5,
                  borderRadius: "7px",
                  background: codice.ciano,
                  color: codice.bg,
                  "&:hover": { background: "#3ee3d8" },
                }}
              >
                Baixar CV
              </Button>
              <Button
                onClick={handleContact}
                startIcon={<MailOutlineIcon />}
                variant="outlined"
                sx={{
                  fontFamily: fonts.mono,
                  fontWeight: 600,
                  letterSpacing: "1px",
                  px: 2.5,
                  py: 1.5,
                  borderRadius: "7px",
                  color: codice.fg,
                  borderColor: codice.line2,
                  "&:hover": {
                    borderColor: codice.ciano,
                    color: codice.ciano,
                    background: "transparent",
                  },
                }}
              >
                Contato
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroRoot>
  );
};

export default Hero;
