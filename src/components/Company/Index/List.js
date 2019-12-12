import React from "react";
import Card from "./Card";

const List = () => {
    const mapStateToProps = state => ({
        companies: state.companies,
    });
    let companies = [
        { name: 'Вебпрактик', city: 'Ростов-на-Дону', vacancies: {'phpDeveloper':[5, '16.12.86'], 'reactDeveloper':[5, '16.12.86']}},
        { name: 'Гугл', city: 'Ростов-на-Дону', vacancies: {'phpDeveloper':[5, '16.12.86'], 'reactDeveloper':[5, '16.12.86']}},
        { name: 'Название компании4', city: 'Ростов-на-Дону', vacancies: {'phpDeveloper':[5, '16.12.86'], 'reactDeveloper':[5, '16.12.86']}},
        { name: 'Название компании5', city: 'Ростов-на-Дону', vacancies: {'phpDeveloper':[5, '16.12.86'], 'reactDeveloper':[5, '16.12.86']}},
    ];

    return (
        <div className="album py-2 bg-light">
            <div className="container">
                <div className="row">
                    {companies.map(company => (
                        <Card name={company.name} vacancies={company.vacancies} city={company.city} />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default List;
