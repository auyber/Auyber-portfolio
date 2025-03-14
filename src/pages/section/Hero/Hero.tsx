import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import eu from "../../../assets/images/eu.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { 
      paddingTop: "100px",

    },
    
    [theme.breakpoints.up('xs')]: {
      paddingBotton: "150px",
    },
    [theme.breakpoints.up('md')]: {
      paddingBotton: "50px",
    },
    
    [theme.breakpoints.up('lg')]: { 
      paddingBotton: "50px",
    }

  }));

  const StyledImg = styled("img")(() => ({
    width: "70%",
    borderRadius: "50%",
    border: '1px solid white'
  }));

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/cvAuyber.pdf";
    link.download = "cvAuyber.pdf";
    link.click();
  };

  const handleContact = () => {
    window.location.href = "mailto:auybergm@hotmail.com?subject=Contato%20via%20site";
  };

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={eu} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} sx={{ fontSize: { xs: '1.5rem', md: '4rem', lg: '6rem' } }}>Auyber Genesini Moura</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" sx={{ fontSize: { xs: '1rem', md: '2rem', lg: '3rem' } }}>Full Stack Developer | Javascript | Typescript | Python | Node.js</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={6} md={4} display="flex" justifyContent="center">
                  <Button color="secondary" variant="outlined" onClick={handleDownload}>
                    <DownloadIcon />
                    <Typography >
                      Baixar CV
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={6} md={3} display="flex" justifyContent="center">
                  <Button color="secondary" variant="outlined" onClick={handleContact}>
                    <MailOutlineIcon />
                    <Typography>
                      Contato
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
