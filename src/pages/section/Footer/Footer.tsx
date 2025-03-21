import React from 'react';
import { Box, Container, Typography, styled, Grid, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const handleGit = () => {
    window.open('https://github.com/auyber', '_blank');
};

const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/auyber-genesini-moura-58b258144/', '_blank');
};

const handleContact = () => {
    window.location.href = "mailto:auybergm@hotmail.com?subject=Contato%20via%20site";
  };

const StyledFooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('xs')]: {
    paddingTop: "20px",
  },
  [theme.breakpoints.up('md')]: { // >=mobile
    paddingTop: "100px",
  }
  
}));


const Footer: React.FC = () => {
  return (
    <StyledFooterSection>
      <Container maxWidth="md">
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography variant="h6" component="div" style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '2rem' }}>
              Entre em contato:
            </Typography>
          </Grid>
        </Grid>
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" style={{ width: '150px' }} onClick={handleGit}>
                <Typography style={{ fontSize: '3rem' }}>
                    <GitHubIcon fontSize="inherit" />
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button color="primary" style={{ width: '150px' }} onClick={handleLinkedin}>
                <Typography style={{ fontSize: '3rem' }}>
                    <LinkedInIcon fontSize="inherit" />
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button color="primary" style={{ width: '150px' }} onClick={handleContact}>
                <Typography style={{ fontSize: '3rem' }}>
                    <EmailIcon fontSize="inherit" />
                </Typography>
                </Button>
            </Grid>
        </Grid>    
      </Container>
      <Container maxWidth="md">
      </Container>
      <Container maxWidth="md">
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={12} md={12} display="flex" justifyContent="center">
                <Typography style={{ fontSize: '1.5rem' }}>
                &copy; 2024 Auyber Genesini Moura -  All rights reserved
                </Typography>
            </Grid>           
        </Grid>    
      </Container>
    </StyledFooterSection>
  );
};



export default Footer;
