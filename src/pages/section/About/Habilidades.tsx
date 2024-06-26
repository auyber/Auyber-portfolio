import React from 'react';
import { Box, Container, Typography, styled, Grid, Button } from '@mui/material';



const StyledHabilidadesSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  marginTop: theme.spacing(4),
  
}));


const Habilidades: React.FC = () => {
  return (
    <StyledHabilidadesSection>
      <Container maxWidth="lg">
        <Grid item>
            <Typography variant="h2" component="h2">
              Habilidades
            </Typography>
            <br />
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
    </StyledHabilidadesSection>
  );
};

export default Habilidades;
