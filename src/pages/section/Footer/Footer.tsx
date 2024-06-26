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
  [theme.breakpoints.up('xs')]: { // <= mobile
    paddingTop: "1000px",
  },
  [theme.breakpoints.up('md')]: { // >=mobile
    paddingTop: "0",
  }
  
}));


const Footer: React.FC = () => {
  return (
    <StyledFooterSection>
      <Container maxWidth="md">
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" style={{ width: '150px' }} onClick={handleGit}>
                <Typography>
                    <GitHubIcon />
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button color="primary" style={{ width: '150px' }} onClick={handleLinkedin}>
                <Typography>
                    <LinkedInIcon />
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button color="primary" style={{ width: '150px' }} onClick={handleContact}>
                <Typography>
                    <EmailIcon />
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
            </Grid>            
        </Grid>    
      </Container>
      <Container maxWidth="md">
      </Container>
      <Container maxWidth="md">
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={12} md={12} display="flex" justifyContent="center">
                <Typography>
                &copy; 2024 Auyber Genesini Moura -  All rights reserved
                </Typography>
            </Grid>           
        </Grid>    
      </Container>
    </StyledFooterSection>
  );
};

export default Footer;
