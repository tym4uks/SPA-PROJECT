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

export default function MyCard({title, content, isFav, id}) {
  const dispatch = useDispatch(); //всегда первой строчкой
  const [isfavourite, setisFavourite] = useState(isFav);
  const toggleFav = (isFav) => {
    dispatch(updateCard(id, {
     isFav: isFav
    }));
  };
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={'/products/'+id}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="SPAproject"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {content}
        </Typography>
      </CardContent>
      </Link>
      <CardActions>

        <IconButton aria-label="add to favorites" onClick={() => toggleFav(!isFav)}> 
          <FavoriteIcon style={{color: isFav && 'red'}}/>
        </IconButton>
        
        <IconButton aria-label="delete-card"> 
          <DeleteIcon /> 
        </IconButton>
        
      </CardActions>
    </Card>
  );
}
