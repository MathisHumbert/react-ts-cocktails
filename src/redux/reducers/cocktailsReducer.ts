import { ActionType } from '../action-type';
import { Action } from '../action-interface';

interface InitialState {
  loading: boolean;
  error: boolean;
  errorMsg: string;
  data: any;
}

const initalState = {
  loading: false,
  error: false,
  errorMsg: '',
  data: [],
};

const reducer = (
  state: InitialState = initalState,
  { type, payload }: Action
): InitialState => {
  if (type === ActionType.FETCH_COCKTAILS_START) {
    return { ...state, loading: true, error: false };
  }
  return state;
};

export default reducer;
