import { createStore } from 'redux'
import cardReducer from './reducers/cardReducer'
// Создаем store
const store = createStore(
  cardReducer,
)

export default store
