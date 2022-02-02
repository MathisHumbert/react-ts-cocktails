import { combineReducers } from 'redux';
import cocktailsReducer from './cocktailsReducer';

const rootReducer = combineReducers({
  cocktailsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
