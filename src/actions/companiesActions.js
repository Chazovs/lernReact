import * as types from './actionTypes';
import companiesAPI from '../api/companies';

export function loadCompaniesSuccess(companies) {
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function loadCompanies() {
  // make async call to api, handle promise, dispatch action when promise is resolved

  return function(dispatch) {
    return companiesAPI.getList().then(companies => {
      dispatch(loadCompaniesSuccess(companies));
    }).catch(error => {
      throw(error);
    });
  };
}







