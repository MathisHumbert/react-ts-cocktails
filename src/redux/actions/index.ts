import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from '../action-interface';
import { ActionType } from '../action-type';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const fetchData = (value: string) => {
  return async (dispatch: Dispatch<Action>) => {
    // START
    dispatch({
      type: ActionType.FETCH_COCKTAILS_START,
    });

    try {
      // SUCCESS
      const { data } = await axios(`${url}ma`);

      console.log(data);
    } catch (error: any) {
      // ERROR
      dispatch({
        type: ActionType.FETCH_COCKTAILS_ERROR,
        payload: error.message,
      });
    }
  };
};
