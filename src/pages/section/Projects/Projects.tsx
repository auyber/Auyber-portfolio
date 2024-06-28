import {Button, Container, Grid, Typography, styled } from "@mui/material";
import ActionAreaCardNutri from "../../../components/Card/nutri";
import ActionAreaCardfastrevest from "../../../components/Card/fastrevest";
import GitHubIcon from '@mui/icons-material/GitHub';

const handlePortifolio = () => {
  window.open('https://github.com/auyber/Auyber-portifolio', '_blank');
};

const Projects = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "150vh",
    display: "flex",
    padding: theme.spacing(8, 0),
    marginTop: theme.spacing(4),
    
    [theme.breakpoints.down('md')]: {
      height: "250vh",
      },

    [theme.breakpoints.down('sm')]: {
    height: "250vh",
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
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                    <ActionAreaCardNutri /> 
                </Grid>
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                    <ActionAreaCardfastrevest /> 
                </Grid>
            </Grid>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={12} display="flex" justifyContent="center">
                <Button color="secondary" style={{ width: '150px' }} onClick={handlePortifolio}>
                    <Typography>
                        <GitHubIcon />
                        Código do Portifólio
                    </Typography>
                </Button>
              </Grid>
            </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Projects;