import React from 'react';
import { Box, Container, Typography, styled, Grid } from '@mui/material';



const StyledHabilidadesSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  marginTop: theme.spacing(4),
  
}));

const SkillBox = styled(Box)(({ theme }) => ({
    width: '150px',
    border: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(),
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
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
                <SkillBox>
                <Typography>
                    JavaScript
                </Typography>
                </SkillBox>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <SkillBox>
                <Typography>
                    TypeScript
                </Typography>
                </SkillBox>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <SkillBox>
                <Typography>
                    React
                </Typography>
                </SkillBox>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <SkillBox>
                <Typography>
                    Git
                </Typography>
                </SkillBox>
            </Grid>            
        </Grid>    
      </Container>
      <Container maxWidth="md">
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <SkillBox>
                <Typography>
                    Html
                </Typography>
                </SkillBox>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <SkillBox>
                <Typography>
                    Css
                </Typography>
                </SkillBox>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <SkillBox>
                <Typography>
                    Material UI
                </Typography>
                </SkillBox>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <SkillBox>
                <Typography>
                    Figma
                </Typography>
                </SkillBox>
            </Grid>            
        </Grid>    
      </Container>
      <Container maxWidth="md">
        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <SkillBox>
                <Typography>
                    Python
                </Typography>
                </SkillBox>
            </Grid>
            <Grid item xs={6} md={3} display="flex" justifyContent="center">
                <SkillBox>
                <Typography>
                    SQL
                </Typography>
                </SkillBox>
            </Grid>            
        </Grid>    
      </Container>
    </StyledHabilidadesSection>
  );
};

export default Habilidades;
