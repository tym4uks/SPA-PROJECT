import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import {ReactComponent as Lang} from '../assets/Lang.svg';
import {ReactComponent as VK} from '../assets/VK.svg';
import {ReactComponent as Telegram} from '../assets/Telegram.svg';
import {ReactComponent as Whatsapp} from '../assets/Whatsapp.svg';

export default function MyFooter({}) {
return (
<Box className="Footer">
<div className="FooterCol1"><Link to="/"><span>QPICK</span></Link></div>
<div style={{flexGrow: 1}}></div>

<div className="FooterCol2">
  <span className='element'>Избранное</span>
  <Link to="/basket"><span className='element'>Корзина</span></Link>
  <span className='element'>Контакты</span>
</div>
<div style={{flexGrow: 1}}></div>

<div className="FooterCol3">
    <span className='element'>Условия сервиса</span>
    <div className='LangStyle'>
            <Lang></Lang>
            <div style={{flexGrow: 1}}></div>
            <span className='element'>Рус</span>
            <div style={{flexGrow: 1}}></div>
            <span className='element'>Eng</span>
            <div style={{flexGrow: 1}}></div>
        </div>
</div>
<div style={{flexGrow: 1}}></div>

<div className="FooterCol4">
  <div className='LangStyle'>
      <a href="https://vk.com/neoflex_ru"><VK className='iconStyle'></VK></a>
      <div style={{flexGrow: 1}}></div>
      <Whatsapp className='iconStyle'></Whatsapp>
      <div style={{flexGrow: 1}}></div>
      <a href="https://t.me/neoflexcareers"><Telegram className='iconStyle'></Telegram></a>
    </div>
    </div>
</Box>
);
}
