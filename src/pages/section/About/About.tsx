import React from 'react';
import { Box, Container, Typography, styled, Grid } from '@mui/material';
import ActionAreaCard from '../../../components/Card/card';


const StyledAboutSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  marginTop: theme.spacing(4), // 
  
}));


const About: React.FC = () => {
  return (
    <StyledAboutSection>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <Typography variant="h2" component="h2">
              Sobre Mim
            </Typography>
            <br />
            <Grid>
            <ActionAreaCard />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h5" textAlign="justify">
              Como Operador Logístico em transição para a área da Tecnologia, estou animado para explorar novos horizontes e aplicar minhas habilidades analíticas e organizacionais em um novo campo. Com uma sólida experiência em Logística de Transporte, gerenciamento de tarefas de envio, coordenação de notas fiscais e escolha de modais de transporte, estou pronto para traduzir essas habilidades para o desenvolvimento de sistemas.
              <br/><br/>
              Formado em Logística Aeroportuária pela FATEC Indaiatuba e atualmente cursando Análise e Desenvolvimento de Sistemas, estou comprometido com minha transição de carreira. Meu foco atual está em me especializar como Desenvolvedor Full Stack, e em aprimorar minhas habilidades em análise de dados, visando assim oferecer soluções abrangentes e eficazes no campo da tecnologia.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledAboutSection>
  );
};

export default About;
