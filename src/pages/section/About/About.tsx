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
              Sou <strong>Desenvolvedor Web</strong> com base em <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>, atualmente em evolução para o <strong>Fullstack JavaScript</strong>. Ao longo dos meus estudos e projetos, desenvolvi aplicações web e interfaces responsivas, adquirindo uma boa compreensão de <strong>estrutura, funcionamento e experiência do usuário</strong>.
              <br/><br/>
              Recentemente, passei a direcionar parte dos meus estudos para a área de <strong>Qualidade de Software (QA)</strong>, onde encontrei maior afinidade com <strong>análise de sistemas</strong>, <strong>testes</strong> e <strong>identificação de falhas</strong>. Tenho aplicado <strong>testes manuais</strong>, <strong>testes de API com Postman</strong> e <strong>escrita de cenários em Gherkin</strong> em projetos próprios, buscando desenvolver na prática os conceitos de qualidade de software.
              <br/><br/>
              Também estou aprofundando meus conhecimentos em <strong>automação de testes com Playwright</strong>, com o objetivo de ampliar minha visão sobre o desenvolvimento e contribuir para a construção de aplicações mais <strong>robustas</strong> e <strong>confiáveis</strong>.
              <br/><br/>
              Além disso, já desenvolvi projetos como <strong>websites responsivos</strong> e aplicações, incluindo o <strong>TaskFlow</strong>, um gerenciador de tarefas com <strong>Python</strong>, <strong>Flask</strong> e <strong>SQLAlchemy</strong>, além deste portfólio utilizando <strong>React</strong>, <strong>TypeScript</strong> e <strong>Vite</strong>.
              <br/><br/>
              Tenho facilidade em aprender novas tecnologias e me adaptar a diferentes contextos, buscando sempre evoluir conforme as necessidades do projeto e construir uma carreira sólida na área de tecnologia.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledAboutSection>
  );
};

export default About;
