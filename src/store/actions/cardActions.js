import { CARD_ACTION_TYPES } from '../constans/actionTypes'

// Action creators
export const addCard = (card) => ({
  type: CARD_ACTION_TYPES.ADD_CARD,
  payload: card
})

export const deleteCard = (cardId) => ({
  type: CARD_ACTION_TYPES.DELETE_CARD,
  payload: cardId
})

export const updateCard = (cardId, updates) => ({
  type: CARD_ACTION_TYPES.UPDATE_CARD,
  payload: { cardId, updates }
})

