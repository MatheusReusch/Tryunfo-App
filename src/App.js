import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import SavedCards from './SavedCards';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.fds = this.fds.bind(this);
    this.fdsAntes = this.fdsAntes.bind(this);
    this.state = {
      nameInput: '',
      descriptionInput: '',
      cardImage: '',
      attr1: '',
      attr2: '',
      attr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      myCards: [],
      hasTrunfo: false,
      filterName: '',
    };
  }

  handleChange(event) {
    this.fdsAntes(event);
  }

  fds() {
    const { attr1, attr2, attr3, nameInput, descriptionInput,
      cardImage, cardRare } = this.state;
    const duzentosedez = 210;
    const noventa = 90;
    if (
      Number(attr1)
      + Number(attr2)
      + Number(attr3)
      <= duzentosedez
      && nameInput !== ''
      && descriptionInput !== ''
      && cardImage !== ''
      && cardRare !== '' && attr1 <= noventa
      && attr2 <= noventa
      && attr3 <= noventa && attr1 >= 0
      && attr2 >= 0
      && attr3 >= 0
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else { this.setState({ isSaveButtonDisabled: true }); }
  }

  fdsAntes(event) {
    if (event.target.id === 'checkbox') {
      this.setState(
        (prevState) => ({
          cardTrunfo: !prevState.cardTrunfo,
        }),
        () => this.fds(),
      );
    } else {
      const { name, value } = event.target;
      this.setState(
        () => ({ [name]: value }),
        () => this.fds(),
      );
    }
  }

  remove(event) {
    const { myCards } = this.state;
    if (event.target.previousSibling.innerHTML) {
      this.setState({ hasTrunfo: false });
    }
    const state = myCards.filter(
      (carta) => carta.id !== Number(event.target.nextSibling.innerHTML),
    );
    this.setState({ myCards: state });
    console.log(event.target.nextSibling.innerHTML);
  }

  save() {
    const { cardTrunfo, nameInput, descriptionInput, attr1, attr2,
      attr3, cardImage, cardRare } = this.state;
    this.setState((prevState) => ({
      nameInput: '',
      descriptionInput: '',
      cardImage: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      hasTrunfo: cardTrunfo === true ? true : prevState.hasTrunfo,
      cardTrunfo: false,
      cardRare: 'Normal',
      myCards: [
        ...prevState.myCards,
        {
          cardName: nameInput,
          descriptionInput,
          attr1,
          attr2,
          attr3,
          cardImage,
          cardRare,
          cardTrunfo,
          id: Math.random(),
        },
      ],
    }));
  }

  render() {
    const { nameInput, descriptionInput, cardImage, attr1, attr2, attr3,
      cardRare, cardTrunfo, isSaveButtonDisabled,
      hasTrunfo, filterName, myCards } = this.state;
    return (
      <>
        <h1 data-testid="title" className="center">
          Adicionar novas cartas
        </h1>
        <Form
          onInputChange={ this.handleChange }
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardImage={ cardImage }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.save }
          hasTrunfo={ hasTrunfo }
        />
        <fieldset id="field3">
          <Card
            cardName={ nameInput }
            cardDescription={ descriptionInput }
            cardImage={ cardImage }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </fieldset>
        <h1 data-testid="cartas" className="center">
          Cartas
        </h1>
        <input
          onChange={ this.handleChange }
          name="filterName"
          value={ filterName }
          placeholder="Filtrar"
          data-testid="name-filter"
          className="inputFilter"
          type="text"
        />
        {myCards.length > 0 ? (
          <SavedCards
            value={ filterName }
            remove={ this.remove }
            myCards={ myCards }
          />
        ) : (
          ''
        )}
      </>
    );
  }
}

export default App;
