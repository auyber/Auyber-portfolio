import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardContent>
            <SchoolIcon />
          <Typography gutterBottom variant="h6" component="div">
            Educação
          </Typography>
          <Typography>
            Análise e Desenvolvimento de Sistemas (em andamento)  <br />
            QA E2E (Testes, API, Gherkin, Postman) – em andamento
            <br />Introduction to Software Quality Assurance – Coursera 
            <br />CS50 Harvard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}