import { CARD_ACTION_TYPES } from '../constans/actionTypes'

export const updateCard = (cardId, updates) => ({
  type: CARD_ACTION_TYPES.UPDATE_CARD,
  payload: { cardId, updates }
})

