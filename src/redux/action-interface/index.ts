import { ActionType } from '../action-type';

interface FetchCocktailStart {
  type: ActionType.FETCH_COCKTAILS_START;
  payload?: any;
}

interface FetchCocktailSuccess {
  type: ActionType.FETCH_COCKTAILS_SUCCESS;
  payload: any;
}

interface FetchCocktailError {
  type: ActionType.FETCH_COCKTAILS_ERROR;
  payload?: any;
}

export type Action =
  | FetchCocktailStart
  | FetchCocktailSuccess
  | FetchCocktailError;
