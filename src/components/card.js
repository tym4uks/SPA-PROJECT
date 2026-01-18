import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { updateCard, deleteCard } from '../store/actions/cardActions';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Star} from '../assets/Star.svg';


export default function MyCard({card, id}) {
  const dispatch = useDispatch(); //всегда первой строчкой

  // // const [isfavourite, setisFavourite] = useState(isFav);
  // // const toggleFav = (isFav) => {
  // //   dispatch(updateCard(id, {
  // //    isFav: isFav
  // //   }));
  // };
  // // //  const deleteC = () => {
  // // //   dispatch(deleteCard(id));
  // // };
  return (
    <Card sx={{ width: 350, height:407 }}
      className='card'
    >
      {/* <Link to={'/products/'+id}> */}
      <img src={card.img}></img>
      <CardContent>
        {/* <Typography gutterBottom component="div">
          {title}
        </Typography>
        <Typography variant="body2"   sx={{
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3, // Показывать только 3 строки
    WebkitBoxOrientation: 'vertical',
    lineHeight: 1.5, // Для точного расчета высоты
    maxHeight: '4.5em', // 3 строки * 1.5 line-height
         }}
> 
         {content}
        </Typography>
        */}

      <div className='CardsInfo'>
        {/* Наименование */}
        <span className='ProductTitle'>
        {card.title}
        </span>

        {/* Цена */}
        <div className='ProductPrice'> 
          <span style={{color: '#FFA542'}}>
            {card.price}
          </span>
        </div>

        {/* Рейтинг */}
        <div className='ProductRating'>
          <Star></Star>
          <span style={{color: '#838383'}}>{card.rate}</span>
        </div>

        {/* Купить */}
        <span className='ProductBuy'>
          Купить
        </span>
        
      </div>
      </CardContent>
      {/* </Link> */}
      {/* <CardActions>
        <IconButton aria-label="add to favorites" onClick={() => toggleFav(!isFav)}> 
          <FavoriteIcon style={{color: isFav && 'red'}}/>
        </IconButton>
                <IconButton aria-label="delete-card" onClick={() => deleteC()}> 
          <DeleteIcon /> 
        </IconButton>
              </CardActions> */}
    </Card>
  );
}
