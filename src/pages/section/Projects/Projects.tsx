import {Container, Grid, Typography, styled } from "@mui/material";
import ActionAreaCardNutri from "../../../components/Card/nutri";

const Projects = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    padding: theme.spacing(8, 0),
    marginTop: theme.spacing(4),
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
                    <ActionAreaCardNutri /> 
                </Grid>
            </Grid>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                    <ActionAreaCardNutri /> 
                </Grid>
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                    <ActionAreaCardNutri /> 
                </Grid>
            </Grid>   
        </Container>
      </StyledHero>
    </>
  );
}

export default Projects;