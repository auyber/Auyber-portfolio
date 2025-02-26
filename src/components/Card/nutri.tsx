import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import nutri from "../../assets/images/nutri.jpg";

export default function ActionAreaCardNutri() {
  return (
    <Card sx={{ 
      maxWidth: 500,
      border: '3px solid white',
      borderRadius: '10px'
    }}>
      <CardMedia
        sx={{ height: 500 }}
        image={nutri}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          JOYCE GENESINI NUTRICIONISTA
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="left" sx={{ fontSize: '1.2rem'}}>
        Desenvolvi um site totalmente responsivo para a nutricionista Joyce Genesini, estruturado em várias páginas, incluindo Início, Especialidades, Sobre, Blog e Contato. Para otimizar a conversão, implementei diversos CTAs (Call to Action) estrategicamente posicionados, além de um botão flutuante de "Agende sua consulta", garantindo acesso rápido ao contato da nutricionista. O site também conta com slides automáticos utilizando Bootstrap, proporcionando uma experiência dinâmica e envolvente. Além disso, apliquei técnicas de controle de versão no CSS, forçando a atualização do cache nos servidores, e utilizei metatags otimizadas para melhorar o SEO e o desempenho da página.<br/><br />
          Tecnologias utilizadas: Html, Css, JavaScript, Bootsrtap e Figma.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button size="medium" href="https://joycegenesininutri.com.br/" target='_blank'>Ver Site</Button>
      <Button size="medium" href="https://github.com/auyber/joyce_genesini" target='_blank'>Ver Código</Button>
      </CardActions>
    </Card>
  );
}
