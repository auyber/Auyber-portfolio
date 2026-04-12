import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import qaproject from "../../assets/images/qaproject.png";

export default function ActionAreaCardQAProject() {
  return (
    <Card sx={{ 
      maxWidth: 500,
      border: '3px solid white',
      borderRadius: '10px'
    }}>
      <CardMedia
        sx={{ height: 500 }}
        image={qaproject}
        title="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
        QA Projet
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="left" sx={{ fontSize: '1.2rem'}}>
        Projeto desenvolvido com foco em <strong>Qualidade de Software (QA)</strong>, com aplicação prática de <strong>testes manuais</strong> em um sistema de autenticação.<br /><br />

        Foram criados <strong>casos de teste</strong> para fluxos de login, cadastro e sessão, validando cenários positivos e negativos. Durante os testes, também realizei a <strong>identificação e documentação de bugs</strong>, registrando os comportamentos esperados e encontrados.<br /><br />

        Além disso, desenvolvi <strong>cenários em Gherkin</strong> para representar os fluxos do sistema com base no comportamento do usuário.<br /><br />

        Como complemento ao projeto, realizei estudos e práticas de <strong>testes de API com Postman</strong>, documentando requisições e validando respostas, como parte da evolução do conhecimento em QA.<br /><br />

        <strong>Atualizações futuras:</strong> incluir testes automatizados com <strong>Playwright</strong> e ampliar a cobertura com testes de API integrados ao sistema.<br /><br />

        Tecnologias utilizadas: Postman, Gherkin e Playwright (em aprendizado).
      </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button size="medium" href="https://github.com/auyber/qa-project" target='_blank'>Ver Código</Button>
      </CardActions>
    </Card>
  );
}

