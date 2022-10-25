import React from "react";
import Card from "./cards/Card";
import cards from "../cards";

function createCard(cardItem) {
  return (
    <Card
      key={cardItem.key}
      avatar={cardItem.avatar}
      header={cardItem.header}
      paragraph={cardItem.paragraph}
    />
  );
}

function AppCard() {
  return (
    // <div id="cardsLine">
    <div id="myCards">{cards.map(createCard)}</div>

    // </div>
  );
}

export default AppCard;
