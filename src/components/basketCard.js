import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as DeleteIcon} from '../assets/Trash.svg';
import { useDispatch } from 'react-redux';
import { updateCard } from '../store/actions/cardActions';
import React, { useState, useEffect } from 'react';

export default function BasketCard({card}) {
  const dispatch = useDispatch(); //всегда первой строчкой
  const formatted = new Intl.NumberFormat('ru-RU').format(card.price);
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
            {formatted} ₽
          </span>
        </div>
        
    </div>
    <IconButton className='delete-icon' onClick={() => deleteFromBasket()}> 
          <DeleteIcon style={{color:'red'}}/> 
    </IconButton>
    {/* <span className='total-price'>
            {card.price*count}
    </span> */}
    </Card>
  );
}
