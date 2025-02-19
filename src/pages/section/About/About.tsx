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
            Durante minha formação em Análise e Desenvolvimento de Sistemas, venho aprimorando minhas habilidades em <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>SQL</strong> e <strong>Python</strong>, desenvolvendo projetos que unem design e funcionalidade.
              <br/><br/>
            Trabalhei na criação de <strong>websites</strong> responsivos, utilizando <strong>Figma</strong>, <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong> para garantir interfaces intuitivas e dinâmicas. Além disso, desenvolvi este portfólio com <strong>Material UI</strong>, <strong>TypeScript</strong>, <strong>React</strong> e <strong>Vite</strong>, combinando um design moderno com uma estrutura sólida no <strong>back-end</strong>. Outro projeto importante foi o TaskFlow, um gerenciador de tarefas que integra <strong>Python</strong>, <strong>Virtualenv</strong>, <strong>Flask</strong>, <strong>SQLAlchemy</strong> e autenticação de usuários, garantindo segurança, usabilidade e escalabilidade. 
              <br/><br/>
            Busco constantemente aprimorar minhas habilidades para desenvolver aplicações escaláveis e intuitivas, aplicando uma abordagem analítica para resolver desafios e otimizar processos.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledAboutSection>
  );
};

export default About;
