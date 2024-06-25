import { Box, Button, Container, Grid, Typography, styled } from "@mui/material"
import eu from "../../../assets/images/eu.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

const StyledHero = styled("div")(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center"
}))

const StyledImg = styled("img")(()=>({
    width: "80%",
    borderRadius: "50%",
    border: '1px solid white'
}))

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
                    <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Auyber Genesini Moura</Typography>
                    <Typography color="primary.contrastText" variant="h2" textAlign="center">Desenvolvedor FullStack</Typography>
                    <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center">
                            <Button color="secondary" variant="outlined">
                                <DownloadIcon/>
                                <Typography>
                                    Baixar CV
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={3} display="flex" justifyContent="center">
                            <Button color="secondary" variant="outlined">
                                <MailOutlineIcon/>
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
    )
  }
  
  export default Hero