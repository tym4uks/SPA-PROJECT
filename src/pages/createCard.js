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
import { addCard } from '../store/actions/cardActions';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function CreateCard() {
   const dispatch = useDispatch(); //всегда первой строчкой
   const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const product = useSelector(state => 
        state.cards
    );
  const saveCard = (title, content) => {
    const count = product.length;
    const lastID = product[count-1].id;
    //console.log(lastID);

    dispatch(addCard({
     id: lastID+1,
     title: title,
     content: content,
     isFav: false
    }));
    navigate('/products');
  };


//   useEffect(() => {
//     if (product===undefined){
//         setTitle("Удалиль :3");
//         setContent("Удалиль :3");
//     }    
//   }, [product]);
  
  return (
  //  <span>{id}</span>

  <Box display="flex" flexDirection="column" gap={2}>
      <Link to={'/products'}>
      <Button 
      //раз работает - оставляем :3
      //onClick={()=>saveCard(title,content)}
      >Назад</Button></Link>

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

      <Button 
      onClick={()=>saveCard(title,content)}
      >Создать</Button>
  </Box>
  );
}


export default CreateCard;
