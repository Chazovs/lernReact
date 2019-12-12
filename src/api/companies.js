import * as axios from "axios";
import instance from './instance';

export const companiesAPI = {

    getList(currentPage = 1, filter = '', order = '') {

        let companyData = {companies : [
        { name: 'Вебпрактик', city: 'Ростов-на-Дону', vacancies: {'phpDeveloper':[5, '16.12.86'], 'reactDeveloper':[5, '16.12.86']}},
        { name: 'Гугл', city: 'Ростов-на-Дону', vacancies: {'phpDeveloper':[5, '16.12.86'], 'reactDeveloper':[5, '16.12.86']}},
        { name: 'Название компании4', city: 'Ростов-на-Дону', vacancies: {'phpDeveloper':[5, '16.12.86'], 'reactDeveloper':[5, '16.12.86']}},
        { name: 'Название компании5', city: 'Ростов-на-Дону', vacancies: {'phpDeveloper':[5, '16.12.86'], 'reactDeveloper':[5, '16.12.86']}},
        ]};

        return companyData;
        /*instance.get(`companies/list?page=${currentPage}&filter=${filter}&order=${order}`)
            .then(response => {
                return response.data;
            });*/
    },

    getElement(companyID = 1) {
        return instance.get(`company/${companyID}`)
            .then(response => {
                return response.data;
            });
    }
}

export default companiesAPI;
