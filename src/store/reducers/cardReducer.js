//Конфигурационный файл
import { CARD_ACTION_TYPES } from '../constans/actionTypes'

// Начальное состояние
const initialState = {
  cards: [
    {
      id: 1,
      img: "/assets/Image1.png",
      title: 'Apple BYZ S852I',
      price: '2927',
      rate: 4.7,
      inBasket: true,
      countInBasket: 1,
    },
    {
      id: 2,
      img: "/assets/Image2.png",
      title: 'Apple EarPods',
      price: '2327',
      rate: 4.5,
      inBasket: true,
      countInBasket: 2,
    },
    {
      id: 3,
      img: "/assets/Image3.png",
      title: 'Apple EarPods',
      price: '2927',
      rate: 4.5,
      inBasket: false,
      countInBasket: 0,
    },
        {
      id: 4,
      img: "/assets/Image4.png",
      title: 'Apple AirPods',
      price: '5927',
      rate: 4.7,
      inBasket: false,
      countInBasket: 0,
    },
        {
      id: 5,
      img: "/assets/Image5.png",
      title: 'GERLAX GH-04',
      price: '6527',
      rate: 4.7,
      inBasket: false,
      countInBasket: 0,
    },
        {
      id: 6,
      img: "/assets/Image6.png",
      title: 'BOROFONE BO4',
      price: '7527',
      rate: 4.7,
      inBasket: false,
      countInBasket: 0,
    }
  ]
}

// Reducer
const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_ACTION_TYPES.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      }

    case CARD_ACTION_TYPES.DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload)
      }

    case CARD_ACTION_TYPES.UPDATE_CARD:
      console.log(action.payload.cardId)
      console.log(action.payload.updates)
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload.cardId
            ? { ...card, ...action.payload.updates }
            : card
        )               
      }



    default:
      return state
  }
}

export default cardReducer
