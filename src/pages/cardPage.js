import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCard, deleteCard } from '../store/actions/cardActions';
import { Link } from 'react-router-dom';

function CardPage() {
  const dispatch = useDispatch(); //всегда первой строчкой
  const { id } = useParams();
  const product = useSelector(state => 
    state.cards.find(item => item.id === Number(id))
  );
  const [title, setTitle] = useState(product.title);
  const [content, setContent] = useState(product.content);
  const saveCard = (title, content) => {
    dispatch(updateCard(Number(id), {
     title: title,
     content: content
    }));
  };

  return (
  //  <span>{id}</span>

  <Box display="flex" flexDirection="column" gap={2}>
      <Link to={'/products'}>
      <Button 
      onClick={()=>saveCard(title,content)}
      >НозАд</Button></Link>

    <img width={300} height={200} src={"https://img.freepik.com/premium-vector/soft-pink-clouds-cutout-flat-vector-illustration_674398-2928.jpg?semt=ais_hybrid&w=740"}></img>
        <TextField
          id="outlined-required"
          label="Название карточки"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Описание карточки"
          value={content}
          multiline
          maxRows={10}
          onChange={(e) => setContent(e.target.value)}
        />

  <Box display="flex" flexDirection="row" gap={1}>
        <IconButton aria-label="add to favorites" > 
          <FavoriteIcon style={{color: product.isFav && 'red'}}/>
        </IconButton>
        
        <IconButton aria-label="delete-card"> 
          <DeleteIcon /> 
        </IconButton>
  </Box>
      <Button 
      onClick={()=>saveCard(title,content)}
      >Сохранить</Button>
  </Box>
  );
}


export default CardPage;
