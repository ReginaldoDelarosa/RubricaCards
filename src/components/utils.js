export const generateNewId = (cardsData) => {
    const storedCards = JSON.parse(localStorage.getItem('cardsData')) || cardsData;
    const lastCard = storedCards[storedCards.length - 1];
    return lastCard ? lastCard.id + 1 : 1;
  };