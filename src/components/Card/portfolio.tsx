import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import portfoliocapa from "../../assets/images/portfoliocapa.png";

export default function ActionAreaCardportfolio() {
  return (
    <Card sx={{ 
      maxWidth: 500,
      border: '3px solid white',
      borderRadius: '10px'
    }}>
      <CardMedia
        sx={{ height: 500 }}
        image={portfoliocapa}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          Portfólio
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="left" sx={{ fontSize: '1.2rem'}}>
        Portfólio desenvolvido para apresentar minhas informações profissionais, incluindo contato, educação, habilidades e projetos na área da Tecnologia. O site é totalmente responsivo, garantindo uma experiência fluida em diferentes dispositivos.  Entre suas funcionalidades, destacam-se ícones interativos, cards dinâmicos exibindo projetos, cada um com botões direcionando para o site ou repositório no GitHub.     <br />
        <br /><br /><br /><br />
        Tecnologias utilizadas: TypeScript, React, CSS e Vite. 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="medium" href="https://github.com/auyber/Auyber-portfolio" target='_blank'>Ver Código</Button>
      </CardActions>
    </Card>
  );
}