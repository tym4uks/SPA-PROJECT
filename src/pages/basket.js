import BasketCard from "../components/basketCard";
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import MyHeader from "../components/header";
import MyFooter from "../components/footer";

function Basket() {
const cardsData = useSelector(state => state.cards);
const currentItems = cardsData.filter((item) => {return item.inBasket} );
const currentCost = currentItems.reduce((sum, item) => sum + item.price*item.countInBasket, 0);;
const formatted = new Intl.NumberFormat('ru-RU').format(currentCost);

const cards = [];
  for (let i = 0; i < currentItems.length; i++) {
    cards.push(
      <BasketCard key={currentItems[i].id}
        card={currentItems[i]}
        />
    );
  }

return (
  <div className="mainPage">
  <MyHeader></MyHeader>
  
  <Box className="container_basket">
    <Box> 
      {cards}
    </Box>
    <div style={{flexGrow: 1}}></div>
    <Box className="currentCost"> 
      <div style={{display: 'flex', alignItems: 'center'}}>
          <span style={{marginLeft: '5px', fontWeight: 'bold'}}>ИТОГО</span>
          <div style={{flexGrow: 1}}></div>
          <span style={{marginRight: '5px', fontWeight: 'bold'}}>₽ {formatted}</span>
      </div>
      <button className="styleButton">Перейти к оформлению</button>
    </Box>
  </Box>

  <MyFooter></MyFooter>
  </div>
  );
}

export default Basket;
