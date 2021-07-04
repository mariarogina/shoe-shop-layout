import React from 'react';
import { uuid } from 'uuidv4';

const CardsView = (props) => {
    let {cards} = props;

    const shopCards = (cards) => {
        return cards.map((card) => {
            return (<div className = "row" style={{margin:'0px'}}>
                <div className="col-lg-3 col-md-9 mb-2" 
                key={uuid()}>
                    {card}
                </div>
                </div>
            );
        });
    };

    return (
        <div className="row">
            {shopCards(cards)}
        </div>
    );
};
export default CardsView;