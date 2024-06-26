import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import fastrevest from "../../assets/images/fastrevest.jpg";

export default function ActionAreaCardfastrevest() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={fastrevest}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          Fast Revest Revestimentos
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          Site responsivo criado para a Fastrevest, mostrando tudo sobre o serviço de instalação de capas automotivas e seus benefícios. Há um botão flutuante na página que faz com que seja direcionado para o topo da página, botões de contatos interativos e galeria de fotos do serviço oferecido.   <br />
          Atualizações futuras: botão flutuante nas páginas de "fale conosco" e novo design.<br /><br /><br /><br />
          Tecnologias utilizadas: Html, Css, JavaScript 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button size="small" href="https://www.fastrevestrevestimentos.com.br" target='_blank'>Ver Site</Button>
        <Button size="small" href="https://github.com/auyber/fast-revest-capas" target='_blank'>Ver Código</Button>
      </CardActions>
    </Card>
  );
}