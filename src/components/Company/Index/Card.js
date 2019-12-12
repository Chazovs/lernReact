import React from "react";
import {Badge} from 'reactstrap';

const Card = (props) => {
    return (
        <div className="col-md-3">
            <div className="card mb-2 box-shadow">
                <div className="card-body">
                    <h5>{props.name}</h5>
                    <small className='text-muted'>
                        {props.city}
                    </small>
                    <p className="card-text">
                        {
                            Object.keys(props.vacancies).map(
                                vacancyName => (
                                    <Badge href="#" color="secondary" className="mr-2">{props.vacancies[vacancyName][1]} | {vacancyName}: {props.vacancies[vacancyName][0]}К руб.</Badge>
                                )
                            )
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
