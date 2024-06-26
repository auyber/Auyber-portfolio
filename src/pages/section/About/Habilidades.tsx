import React from 'react';
import { Box, Container, Typography, styled, Grid, Button } from '@mui/material';



const StyledAboutSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  marginTop: theme.spacing(4), // Adicionando margem superior para espaçamento
}));


const About: React.FC = () => {
  return (
    <StyledAboutSection>
      <Container maxWidth="md">
      <Grid item>
            <Typography variant="h2" component="h2">
              Habilidades
            </Typography>
            <Grid>
            </Grid>
        </Grid>
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    JavaScript
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    TypeScript
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    React
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    Git
                </Typography>
                </Button>
            </Grid>            
        </Grid>    
      </Container>
      <Container maxWidth="md">
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    Html
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    Css
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    Material Ui
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    Figma
                </Typography>
                </Button>
            </Grid>            
        </Grid>    
      </Container>
      <Container maxWidth="md">
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    Python
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    Sql
                </Typography>
                </Button>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center">
                <Button color="primary" variant="outlined" style={{ width: '150px' }}>
                <Typography>
                    NoSql
                </Typography>
                </Button>
            </Grid>            
        </Grid>    
      </Container>
    </StyledAboutSection>
  );
};

export default About;
