import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';



function CardPage() {
  const { id } = useParams();
  const product = useSelector(state => 
    state.cards.find(item => item.id === Number(id))
  );    
  return (
  //  <span>{id}</span>
  <Box display="flex" flexDirection="column" gap={2}>
    <img width={300} height={200} src={"https://img.freepik.com/premium-vector/soft-pink-clouds-cutout-flat-vector-illustration_674398-2928.jpg?semt=ais_hybrid&w=740"}></img>
        <TextField
          id="outlined-required"
          label="Название карточки"
          defaultValue={product.title}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Описание карточки"
          defaultValue={product.content}
          multiline
          maxRows={10}
        />
  <Box display="flex" flexDirection="row" gap={1}>
        <IconButton aria-label="add to favorites" > 
          <FavoriteIcon style={{color: product.isFav && 'red'}}/>
        </IconButton>
        
        <IconButton aria-label="delete-card"> 
          <DeleteIcon /> 
        </IconButton>
  </Box>
      <Button>Сохранить</Button>
  </Box>
  );
}


export default CardPage;
