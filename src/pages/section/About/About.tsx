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
            Atualmente possuo maior domínio em <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>, porém estou ampliando meus estudos em <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, <strong>Bootstrap</strong>, <strong>Sass</strong> e <strong>MongoDB</strong>. Durante minha formação em <strong>Análise e Desenvolvimento de Sistemas</strong>, venho adquirindo conhecimentos gerais da área, como banco de dados relacional, computação em nuvem, design de interação, DevOps, engenharia de software, estrutura de dados, desenvolvimento mobile, inteligência artificial, direito cibernético, qualidade de software, <strong>Java</strong> e <strong>Python</strong>.
            <br/><br/>
            Trabalhei na criação de <strong>websites responsivos</strong>, utilizando <strong>Figma</strong>, <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong> para garantir interfaces intuitivas e dinâmicas. Além disso, desenvolvi meu portfólio com <strong>Material UI</strong>, <strong>TypeScript</strong>, <strong>React</strong> e <strong>Vite</strong>. Outro projeto relevante foi o <strong>TaskFlow</strong>, um gerenciador de tarefas que integra <strong>Python</strong>, <strong>Virtualenv</strong>, <strong>Flask</strong>, <strong>SQLAlchemy</strong> e autenticação de usuários.
            <br/><br/>
            Busco constantemente aprimorar minhas habilidades para resolver desafios e otimizar processos. Atualmente, estou seguindo a trilha <strong>Fullstack JavaScript</strong> na <strong>OneBitCode</strong>. Também possuo conhecimentos básicos em <strong>Design</strong>, adquiridos por meio de cursos e da criação de artes em uma agência de marketing.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledAboutSection>
  );
};

export default About;
