import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div data-testid="form" id="form">
        <input
          name="nameInput"
          value={ cardName }
          onChange={ onInputChange }
          placeholder="Nome da carta"
          data-testid="name-input"
          type="text"
        />
        <textarea
          name="descriptionInput"
          value={ cardDescription }
          onChange={ onInputChange }
          placeholder="descrição da carta"
          data-testid="description-input"
          type="textarea"
        />
        <input
          name="attr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
          placeholder="Primeiro atributo da carta"
          data-testid="attr1-input"
          type="number"
        />
        <input
          name="attr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
          placeholder="Segundo atributo da carta"
          data-testid="attr2-input"
          type="number"
        />
        <input
          name="attr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
          placeholder="Terceiro atributo da carta"
          data-testid="attr3-input"
          type="number"
        />
        <input
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
          placeholder="Imagem da carta"
          data-testid="image-input"
          type="text"
        />
        <select
          id="select"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          data-testid="rare-input"
        >
          <option className="option">normal</option>
          <option className="option">raro</option>
          <option className="option">muito raro</option>
        </select>
        {hasTrunfo === false ? (
          <input
            id="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
            type="checkbox"
          />
        ) : (
          'Você já tem um Super Trunfo em seu baralho'
        )}
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
