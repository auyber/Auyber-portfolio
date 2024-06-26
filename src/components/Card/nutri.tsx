import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import nutri from "../../assets/images/nutri.jpg";

export default function ActionAreaCardNutri() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={nutri}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          Joyce Genesini Nutricionista
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          Site criado para a Nutricionista Joyce Genesini, possuindo várias páginas mostrando o serviço oferecido, contato e informações sobre a profissional. Foi inserido um botão flutuante de "Agende sua consulta" nas páginas do site para que o cliente tenha um rápido acesso ao contato da nutricionista, botões interativos na página "Contatos", além de slide automático de fotos na página "Sobre"  <br /><br />
          Tecnologias utilizadas: Html, Css, JavaScript 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small">Ver Site</Button>
        <Button size="small">Ver Código</Button>
      </CardActions>
    </Card>
  );
}
