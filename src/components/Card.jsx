import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      btn,
      remove,
      id,
    } = this.props;
    return (
      <div id="field">
        <h2 data-testid="name-card">{cardName}</h2>
        {cardImage === '' ? (
          ''
        ) : (
          <img
            className="foto"
            data-testid="image-card"
            alt={ cardName }
            src={ cardImage }
          />
        )}
        <h3 data-testid="description-card">{cardDescription}</h3>
        <h3 data-testid="attr1-card">
          {cardAttr1 === 0 || cardAttr1 === '0' ? '' : cardAttr1}
        </h3>
        <h3 data-testid="attr2-card">
          {cardAttr2 === 0 || cardAttr2 === '0' ? '' : cardAttr2}
        </h3>
        <h3 data-testid="attr3-card">
          {cardAttr3 === 0 || cardAttr3 === '0' ? '' : cardAttr3}
        </h3>
        <h3 data-testid="rare-card">{cardRare}</h3>
        {cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : ''}
        {btn === 1 ? (
          <button type="button" data-testid="delete-button" onClick={ remove }>
            Excluir
          </button>
        ) : (
          ''
        )}
        {id !== 'undefined' ? <p style={ { display: 'none' } }>{id}</p> : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  btn: propTypes.number.isRequired,
  remove: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};

export default Card;
