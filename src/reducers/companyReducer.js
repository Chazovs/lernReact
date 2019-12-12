import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function companyReducer(state = initialState.companies, action) {
  // state variable here reps just an array of courses
  switch(action.type) {

    case types.LOAD_COMPANIES_SUCCESS:
      // return action.companies;
     // return action.cats.map(cat => Object.assign({}, cat, Object.assign([], cat.hobby_ids)))
     return Object.assign([], state, action.companies)

   /* case types.CREATE_CAT_SUCCESS:
      browserHistory.push(`/cats/${action.cat.id}`)
      return [
        ...state.filter(cat => cat.id !== action.cat.id),
        Object.assign({}, action.cat)
      ]
*/
    default:
      return state;
  }
}
