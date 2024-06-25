import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
            <SchoolIcon />
          <Typography gutterBottom variant="h6" component="div">
            Educação
          </Typography>
          <Typography>
            Tecnólogo <br />
            Análise e Desenvolvimento <br /> de Sistemas
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}