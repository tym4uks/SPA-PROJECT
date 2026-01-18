import Box from '@mui/material/Box';
import {ReactComponent as Korzina} from '../assets/Korzina.svg';
import {ReactComponent as Fav} from '../assets/Fav.svg';

export default function MyHeader({}) {
  //const dispatch = useDispatch(); //всегда первой строчкой
return (
       <Box className="Header"> 
      <span className="QTitle">QPICK</span>
      <div className="Icon"> 
      <Fav></Fav>
      <Korzina></Korzina>
      </div>
  </Box>
);
}
