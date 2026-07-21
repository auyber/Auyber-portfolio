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
            <Typography variant="h5" textAlign="left">
              Sou <strong>Desenvolvedor Web</strong> com base em <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>, atualmente em evolução para o <strong>Fullstack JavaScript</strong>.
              <br/><br/>
              Tenho <strong>facilidade em aprender</strong> novas tecnologias e me <strong>adaptar</strong> a diferentes contextos, buscando sempre evoluir conforme as necessidades do projeto e construir uma carreira sólida na área de tecnologia.
              <br/><br/>
              Além do conhecimento adquirido na faculdade de <strong>Análise e Desenvolvimento de Sistemas</strong>, complemento meus estudos com cursos como <strong>OneBitCode</strong>, <strong>Curso.dev</strong> e <strong>CS50 de Harvard</strong>.
              <br/><br/>
              Estou em busca de uma <strong>oportunidade na área</strong> para colocar em prática e continuar desenvolvendo minhas habilidades. Encaro qualquer linguagem ou tecnologia nova como um desafio, com <strong>dedicação constante</strong> para aprender o que for necessário e entregar um bom trabalho.
              <br/><br/>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledAboutSection>
  );
};

export default About;
