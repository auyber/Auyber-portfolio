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
  O TaskFlow foi desenvolvido como o projeto final do CS50 de Harvard, um sistema de gerenciamento de tarefas baseado na web, com o objetivo de aumentar a produtividade pessoal. Ele permite que os usuários organizem suas tarefas e capturem ideias rapidamente. O sistema conta com telas de login e cadastro de novos usuários, com validações de segurança para garantir que apenas pessoas autorizadas possam acessar e gerenciar suas informações.
    <br/><br/>
    Atualizações futuras: design responsivo para dispositivos móveis, pesquisa e filtros para tarefas, notificações de lembrete e modo escuro.
    <br /><br />
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