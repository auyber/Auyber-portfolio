import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import liaartfestas from "../../assets/images/liaartfestas.png";

export default function ActionAreaCardliaartfestas() {
  return (
    <Card sx={{ 
      maxWidth: 500,
      border: '3px solid white',
      borderRadius: '10px'
    }}>
      <CardMedia
        sx={{ height: 500 }}
        image={liaartfestas}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          Lia Art Festas
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="left" sx={{ fontSize: '1.2rem'}}>
        Realizei a construção do site seguindo o conceito Mobile First, garantindo total responsividade. Criei o protótipo no Figma, explorando diversas paletas de cores e tipografias para que o cliente pudesse escolher a melhor opção. O site foi desenvolvido com uma interface intuitiva e prática, incorporando efeitos AOS para animações sutis e múltiplos CTAs (Call to Action) para otimizar a conversão. O carrossel de imagens foi implementado com Swiper, proporcionando transições suaves e interatividade. Além disso, utilizei técnicas para controle de versão no CSS, forçando a atualização do cache nos servidores, e apliquei metatags otimizadas para melhorar o desempenho e SEO. <br /><br /><br />
          Tecnologias utilizadas: Html, Css, JavaScript, Swiper e Figma.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button size="medium" href="https://liaartfestas.com.br" target='_blank'>Ver Site</Button>
        <Button size="medium" href="https://github.com/auyber/Lia.ArtFestas" target='_blank'>Ver Código</Button>
      </CardActions>
    </Card>
  );
}