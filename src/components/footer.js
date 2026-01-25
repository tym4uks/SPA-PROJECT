import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import {ReactComponent as Lang} from '../assets/Lang.svg';
import {ReactComponent as VK} from '../assets/VK.svg';
import {ReactComponent as Telegram} from '../assets/Telegram.svg';
import {ReactComponent as Whatsapp} from '../assets/Whatsapp.svg';

export default function MyFooter({}) {
  //const dispatch = useDispatch(); //всегда первой строчкой
return (
<Box className="Footer">
<div className="FooterCol1"><Link to="/"><span>QPICK</span></Link></div>
<div style={{flexGrow: 1}}></div>

<div className="FooterCol2">
  <span>Избранное</span>
  <Link to="/basket"><span>Корзина</span></Link>
  <span>Контакты</span>
</div>
<div style={{flexGrow: 1}}></div>

<div className="FooterCol3">
    <span>Условия сервиса</span>
    <div className='LangStyle'>
            <Lang></Lang>
            <div style={{flexGrow: 1}}></div>
            <span>Рус</span>
            <div style={{flexGrow: 1}}></div>
            <span>Eng</span>
            <div style={{flexGrow: 1}}></div>
        </div>
</div>
<div style={{flexGrow: 1}}></div>

<div className="FooterCol4">
  <div className='LangStyle'>
      <VK className='iconStyle'></VK>
      <div style={{flexGrow: 1}}></div>
      <Whatsapp className='iconStyle'></Whatsapp>
      <div style={{flexGrow: 1}}></div>
      <Telegram className='iconStyle'></Telegram>
      
    </div>
    </div>
</Box>
);
}
