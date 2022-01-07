import React from 'react';
import propTypes from 'prop-types';
import Card from './components/Card';

class SavedCards extends React.Component {
  render() {
    const { myCards, remove, value } = this.props;
    const cartas = myCards
      .filter((carta) => carta.cardName.includes(value))
      .map((carta) => (
        <fieldset key={ Math.random() } data-testid="field2" id="field2">
          <Card
            cardName={ carta.cardName }
            cardDescription={ carta.descriptionInput }
            cardAttr1={ carta.attr1 }
            cardAttr2={ carta.attr2 }
            cardAttr3={ carta.attr3 }
            cardImage={ carta.cardImage }
            cardRare={ carta.cardRare }
            cardTrunfo={ carta.cardTrunfo }
            btn={ 1 }
            remove={ remove }
            id={ carta.id }
          />
        </fieldset>
      ));
    return (
      <>
        <h2 style={ { textAlign: 'center' } }>Filtros</h2>
        {cartas}
      </>
    );
  }
}

SavedCards.propTypes = {
  myCards: propTypes.arrayOf(propTypes.object).isRequired,
  remove: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default SavedCards;
