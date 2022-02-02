import { ActionType } from '../action-type';
import { Action } from '../action-interface';

interface InitialState {
  loading: boolean;
  error: boolean;
  data: any;
}

const initalState = {
  loading: false,
  error: false,
  data: [],
};

const reducer = (
  state: InitialState = initalState,
  { type, payload }: Action
): InitialState => {
  if (type === ActionType.FETCH_COCKTAILS_START) {
    return { ...state, loading: true, error: false };
  }
  if (type === ActionType.FETCH_COCKTAILS_SUCCESS) {
    return { ...state, loading: false, data: payload };
  }
  if (type === ActionType.FETCH_COCKTAILS_ERROR) {
    return { ...state, loading: false, error: true };
  }
  return state;
};

export default reducer;
