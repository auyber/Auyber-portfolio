import { Container, Grid, Typography, styled } from "@mui/material";
import ActionAreaCardNutri from "../../../components/Card/nutri";
import ActionAreaCardliaartfestas from "../../../components/Card/liaartfestas";
import ActionAreaCardTaskFlow from "../../../components/Card/taskflow";
import ActionAreaCardfastrevest from "../../../components/Card/fastrevest";
import ActionAreaCardportfolio from "../../../components/Card/portfolio";

const Projects = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh", // Altura dinâmica com a altura mínima de 100vh
    display: "flex",
    flexDirection: "column", // Garante que os elementos fiquem em coluna
    padding: theme.spacing(8, 0),
    marginTop: theme.spacing(4),

    // Remove as alturas fixas e usa flexbox para garantir que o conteúdo se ajuste
    [theme.breakpoints.down('md')]: {
      minHeight: "auto", // Remove a altura fixa e deixa o conteúdo ajustar
    },

    [theme.breakpoints.down('sm')]: {
      minHeight: "auto",
    },

    [theme.breakpoints.down('xs')]: {
      minHeight: "auto",
    },
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Typography color="primary.contrastText" variant="h2" component="h2">
              Projetos
            </Typography>
          </Grid>
          
          {/* Primeira linha de cards */}
          <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
              <ActionAreaCardfastrevest />
            </Grid>
            <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
              <ActionAreaCardNutri />
            </Grid>
          </Grid>

          {/* Segunda linha de cards - Portfolio e TaskFlow */}
          <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
              <ActionAreaCardliaartfestas /> 
            </Grid>
            <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
              <ActionAreaCardTaskFlow /> 
            </Grid>
          </Grid>

          {/* terceira linha de cards - Fastrevest */}
          <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
              <ActionAreaCardportfolio /> 
            </Grid>
          </Grid>

          {/* Botão do portfólio */}
          <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={12} display="flex" justifyContent="center">
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Projects;
