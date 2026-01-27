import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDispatch } from 'react-redux';
import { updateCard, deleteCard } from '../store/actions/cardActions';
import {ReactComponent as Star} from '../assets/Star.svg';
import { useSelector } from 'react-redux';

export default function MyCard({card, id}) {
  const dispatch = useDispatch(); 
  const cardsData = useSelector(state => state.cards);
  const currentItem = cardsData.filter((item) => {return item.id===card.id})[0];
  const formatted = new Intl.NumberFormat('ru-RU').format(card.price);
  const addToBasket = () => {
      dispatch(updateCard(card.id, {
       countInBasket: currentItem.countInBasket+1,
       inBasket: true,
  }));
  };

  return (
    <Card sx={{ width: 350, height:407 }} className='card'>
      <img src={card.img}></img>

      <CardContent>
      <div className='CardsInfo'>
        
        {/* Наименование */}
        <span className='ProductTitle'>
        {card.title}
        </span>

        {/* Цена */}
        <div className='ProductPrice'> 
          <span style={{color: '#FFA542'}}>
            {formatted} ₽
          </span>
        </div>

        {/* Рейтинг */}
        <div className='ProductRating'>
          <Star></Star>
          <span style={{color: '#838383'}}>{card.rate}</span>
        </div>

        {/* Купить */}
        <span className='ProductBuy' onClick={addToBasket}>
          Купить
        </span>
        
      </div>
      </CardContent>
    </Card>
  );
}
