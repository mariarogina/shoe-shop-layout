import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";

const CardsView = (props) => {
  let { cards } = props;

  const shopCards = (cards) => {
    return cards.map((card) => {
      return (
        <div>
          <div
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              margin: "30px",
              maxWidth: "400px",
              backgroundColor:"#ede9dd", 
              boxShadow: "8px 3px 3px grey"
            }}
          >
            <div className="col-lg-3 col-md-6 mb-2" key={uuid()}>
              {card}
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="row">{shopCards(cards)}</div>;
};
export default CardsView;

CardsView.propTypes = {
  cards: PropTypes.array,
};
