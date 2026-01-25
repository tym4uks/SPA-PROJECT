import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { updateCard } from '../store/actions/cardActions';
import React, { useState, useEffect } from 'react';

import {ReactComponent as Star} from '../assets/Star.svg';


export default function BasketCard({card}) {
  const dispatch = useDispatch(); //всегда первой строчкой

  const [count, setCount] = useState(card.countInBasket);
  const changeCount = (count) => {
    dispatch(updateCard(card.id, {
     countInBasket: count
    }));
  };
   const deleteFromBasket = () => {
    dispatch(updateCard(card.id, {
     countInBasket: 0,
     inBasket: false,
    }));
  };

// принудительно обновляет что-то на странице
useEffect(() => {
    if (count>0) {changeCount(count);}
  }, [count]);

  return (
    <Card sx={{ width: 633, height:218 }}
      className='basket_card'
    >
    <div>
      <img src={card.img} width="180px" height="180px"></img>
      <div className='ProductCount'>
        <button class="round-button"
            onClick={() => (count-1>0)&& setCount(count-1)}
        >-</button>

        <div style={{flexGrow: 1}}></div>
        {count}
        <div style={{flexGrow: 1}}></div>
        
        <button class="round-button"
            onClick={() => setCount(count+1)}
        >+</button>
      </div>
    </div>
    <div className='CardsInfoBasket'>
        {/* Наименование */}
        <span className='ProductTitleBasket'>
        {card.title}
        </span>

        {/* Цена */}
        <div> 
          <span style={{color: 'gray'}}>
            {card.price}
          </span>
        </div>
        
    </div>
    <IconButton className='delete-icon' onClick={() => deleteFromBasket()}> 
          <DeleteIcon style={{color:'red'}}/> 
    </IconButton>
    <span className='total-price'>
            {card.price*count}
    </span>
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
