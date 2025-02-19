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
          Joyce Genesini Nutricionista
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="justify" sx={{ fontSize: '1.2rem'}}>
          Site responsivo criado para a Nutricionista Joyce Genesini, possuindo várias páginas mostrando o serviço oferecido, contato e informações sobre a profissional. Foi inserido um botão flutuante de "Agende sua consulta" nas páginas do site para que o cliente tenha um rápido acesso ao contato da nutricionista, botões interativos na página "Contatos", além de slide automático de fotos na página "Sobre".  <br />
          Atualizações futuras: mais serviços oferecidos, implementação de um blog<br /><br />
          Tecnologias utilizadas: Html, Css, JavaScript 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button size="medium" href="https://joycegenesininutri.com.br/" target='_blank'>Ver Site</Button>
      <Button size="medium" href="https://github.com/auyber/joyce_genesini" target='_blank'>Ver Código</Button>
      </CardActions>
    </Card>
  );
}
