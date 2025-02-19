import { Button, Container, Grid, Typography, styled } from "@mui/material";
import ActionAreaCardNutri from "../../../components/Card/nutri";
import ActionAreaCardfastrevest from "../../../components/Card/fastrevest";
import ActionAreaCardPortfolio from "../../../components/Card/portfolio"; // Importe o novo card
import ActionAreaCardTaskFlow from "../../../components/Card/taskflow"; // Importe o novo card
import GitHubIcon from '@mui/icons-material/GitHub';

const handlePortifolio = () => {
  window.open('https://github.com/auyber/Auyber-portifolio', '_blank');
};

const Projects = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  minHeight: "100vh", // Agora a altura é dinâmica e cresce conforme o conteúdo
  display: "flex",
  flexDirection: "column", // Garante que os elementos fiquem em coluna
  padding: theme.spacing(8, 0),
  marginTop: theme.spacing(4),

    [theme.breakpoints.down('md')]: {
      height: "300vh",
    },

    [theme.breakpoints.down('sm')]: {
      height: "350vh",
    },

    [theme.breakpoints.down('xs')]: {
      height: "300vh",
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
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <ActionAreaCardNutri />
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <ActionAreaCardfastrevest />
            </Grid>
          </Grid>

          {/* Segunda linha de cards - Portfolio e TaskFlow */}
          <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <ActionAreaCardPortfolio /> 
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <ActionAreaCardTaskFlow /> 
            </Grid>
          </Grid>

          {/* Botão do portfólio */}
          <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={12} md={12} display="flex" justifyContent="center">
              <Button color="secondary" style={{ width: '150px' }} onClick={handlePortifolio}>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Projects;
