import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from '../action-interface';
import { ActionType } from '../action-type';

export const fetchData = (value: string, url: string) => {
  return async (dispatch: Dispatch<Action>) => {
    // START
    dispatch({
      type: ActionType.FETCH_COCKTAILS_START,
    });

    try {
      // SUCCESS
      const { data } = await axios(`${url}${value}`);

      let drinks = data.drinks;
      drinks = drinks.map((drink: any) => {
        return {
          id: drink.idDrink,
          alcoholic: drink.strAlcoholic,
          name: drink.strDrink,
          glass: drink.strGlass,
          category: drink.strCategory,
          instructions: drink.strInstructions,
          img: drink.strDrinkThumb,
          ingredients: [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
          ],
        };
      });

      dispatch({
        type: ActionType.FETCH_COCKTAILS_SUCCESS,
        payload: drinks,
      });
    } catch (error: any) {
      // ERROR
      dispatch({
        type: ActionType.FETCH_COCKTAILS_ERROR,
      });
    }
  };
};
