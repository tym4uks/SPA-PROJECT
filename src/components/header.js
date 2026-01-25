import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import {ReactComponent as Korzina} from '../assets/Korzina.svg';
import {ReactComponent as Fav} from '../assets/Fav.svg';
import { useSelector } from 'react-redux';


export default function MyHeader({}) {
  //const dispatch = useDispatch(); //всегда первой строчкой
  const cardsData = useSelector(state => state.cards);
  const currentItems = cardsData.filter((item) => {return item.inBasket});
  const itemsLenght = currentItems.reduce((acc, item) => acc + item.countInBasket, 0);

return (
       <Box className="Header"> 
      <Link to="/"><span className="QTitle">QPICK</span></Link>
      <div className="Icon"> 
      <Fav></Fav>
      <Link to="/basket"><div>
      <Korzina></Korzina>
      <div className='counter'>{itemsLenght}</div>
      </div></Link>
      </div>
  </Box>
);
}
