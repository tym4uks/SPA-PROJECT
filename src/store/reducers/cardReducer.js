//Конфигурационный файл

import { CARD_ACTION_TYPES } from '../constans/actionTypes'

// Начальное состояние
const initialState = {
  cards: [
    {
      id: 1,
      title: 'Первая карточка',
      content: 'Содержимое первой карточки',
      isFav: false
    },
    {
      id: 2,
      title: 'Вторая карточка',
      content: 'Содержимое второй карточки',
      isFav: true
    },
    {
      id: 3,
      title: 'Третья карточка',
      content: 'Содержимое третьей карточки',
      isFav: false
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
