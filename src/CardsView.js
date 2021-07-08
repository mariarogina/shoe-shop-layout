import React from 'react';
import uuid from 'react-uuid'
import PropTypes from 'prop-types';

const CardsView = (props) => {
    let {cards} = props;

    const shopCards = (cards) => {
        return cards.map((card) => {
            return (<div >
            <div  style={{ paddingLeft:"20px", paddingRight:"20px", margin:"30px", maxWidth:"400px", }}>
                <div className="col-lg-3 col-md-6 mb-2" 
                key={uuid()}>
                    {card}
                </div>
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

CardsView.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    
    cards: PropTypes.array}