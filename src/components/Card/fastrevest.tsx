import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import fastrevest from "../../assets/images/fast.png";

export default function ActionAreaCardfastrevest() {
  return (
    <Card sx={{ 
      maxWidth: 500,
      border: '3px solid white',
      borderRadius: '10px'
    }}>
      <CardMedia
        sx={{ height: 500 }}
        image={fastrevest}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          Fast Revest Revestimentos
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="left" sx={{ fontSize: '1.2rem'}}>
        Desenvolvi um site totalmente responsivo para a Fast Revestimentos, adotando a abordagem mobile-first para garantir uma navegação intuitiva e eficiente em dispositivos móveis e desktops. O layout foi criado no Figma, com um design alinhado à identidade visual da marca. O site conta com um menu fixo, scroll suave, botões interativos e cards animados, além de efeitos dinâmicos com o AOS (Animate On Scroll). Para facilitar o contato, implementei um botão flutuante de WhatsApp e um botão de retorno ao topo. A performance foi otimizada com o uso de JavaScript para atualização do CSS e carregamento dinâmico de imagens. Além disso, melhorei a acessibilidade e o SEO com ARIA e meta tags.<br /><br />
          Tecnologias utilizadas: HTML5, CSS3, JavaScript, AOS e Figma. 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button size="medium" href="https://www.fastrevestrevestimentos.com.br" target='_blank'>Ver Site</Button>
        <Button size="medium" href="https://github.com/auyber/Fast-Revest-2.0" target='_blank'>Ver Código</Button>
      </CardActions>
    </Card>
  );
}