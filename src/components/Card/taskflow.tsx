import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import taskflowcapa from "../../assets/images/taskflowcapa.png";

export default function ActionAreaCardtaskflow() {
  return (
    <Card sx={{ 
      maxWidth: 500,
      border: '3px solid white',
      borderRadius: '10px'
    }}>
      <CardMedia
        sx={{ height: 500 }}
        image={taskflowcapa}
        title="green iguana"
        
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" textAlign="center">
  TaskFlow - Sistema de Gerenciamento de Tarefas
  </Typography>
  <Typography variant="body2" color="text.secondary" textAlign="left" sx={{ fontSize: '1.2rem' }}>
    O TaskFlow foi criado para o projeto final do CS50 de Harvard. Ele é um sistema de gerenciamento de tarefas baseado na web, desenvolvido para aumentar a produtividade pessoal, ajudando os usuários a organizarem suas tarefas e capturarem ideias rápidas. 
    <br />
    Atualizações futuras: design responsivo para dispositivos móveis, pesquisa e filtros para tarefas, notificações de lembrete e modo escuro.
    <br /><br /><br /><br />
    Tecnologias utilizadas: Flask, SQLAlchemy, Python.
  </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Button size="medium" href="https://www.youtube.com/watch?v=fs7gHobfQZc&t=2s" target='_blank'>Video Demo</Button>
        <Button size="medium" href="https://github.com/auyber/TaskFlow" target='_blank'>Ver Código</Button>
      </CardActions>
    </Card>
  );
}