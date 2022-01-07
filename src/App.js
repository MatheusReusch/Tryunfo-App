import React from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import SavedCards from "./SavedCards";

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.fds = this.fds.bind(this)
    this.fdsAntes = this.fdsAntes.bind(this)
    this.state = {
      nameInput: "",
      descriptionInput: "",
      cardImage: "",
      attr1: "",
      attr2: "",
      attr3: "",
      cardRare: "normal",
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      myCards: [],
      hasTrunfo: false,
    };
  }

  remove(event) {
    if (event.target.previousSibling.innerHTML) {
      this.setState({ hasTrunfo: false });
    }
    let state = this.state.myCards.filter(
      (carta) => carta.id !== Number(event.target.nextSibling.innerHTML)
    );
    this.setState({ myCards: state });
    console.log(event.target.nextSibling.innerHTML);
  }

  fdsAntes(event) {
    if (event.target.id === "checkbox") {
      this.setState((prevState, _props) => ({
        cardTrunfo: !prevState.cardTrunfo,
      }), () => this.fds());
    } else {
      const { name, value } = event.target;
      this.setState(() => ({ [name]: value }), () => this.fds());
    }
  }
  
  fds() {
    if (
      this.state.nameInput !== "" &&
      this.state.descriptionInput !== "" &&
      this.state.cardImage !== "" &&
      this.state.cardRare !== ""
    ) {
      if (
        Number(this.state.attr1) +
          Number(this.state.attr2) +
          Number(this.state.attr3) <=
        210
      ) {
        if (
          this.state.attr1 <= 90 &&
          this.state.attr2 <= 90 &&
          this.state.attr3 <= 90
        ) {
          if (
            this.state.attr1 >= 0 &&
            this.state.attr2 >= 0 &&
            this.state.attr3 >= 0
          ) {
            this.setState({ isSaveButtonDisabled: false });
            console.log("false");
          } else {
            this.setState({ isSaveButtonDisabled: true });
            console.log("ultimo");
          }
        } else {
          this.setState({ isSaveButtonDisabled: true });
          console.log("penultimo");
        }
      } else {
        this.setState({ isSaveButtonDisabled: true });
        console.log("segundo");
      }
    } else {
      this.setState({ isSaveButtonDisabled: true });
      console.log("primeiro");
    }
  }

  handleChange(event) {
    this.fdsAntes(event)
  }

  save() {
     this.setState((prevState, _props) => ({
      nameInput: "",
      descriptionInput: "",
      cardImage: "",
      attr1: 0,
      attr2: 0,
      attr3: 0,
      hasTrunfo: this.state.cardTrunfo === true ? true : prevState.hasTrunfo,
      cardTrunfo: false,
      cardRare: "Normal",
      myCards: [
        ...prevState.myCards,
        {
          cardName: this.state.nameInput,
          descriptionInput: this.state.descriptionInput,
          attr1: this.state.attr1,
          attr2: this.state.attr2,
          attr3: this.state.attr3,
          cardImage: this.state.cardImage,
          cardRare: this.state.cardRare,
          cardTrunfo: this.state.cardTrunfo,
          id: Math.random(),
        },
      ],
    }));
  }

  render() {
    return (
      <>
        <h1 data-testid="title" className="center">
          Adicionar novas cartas
        </h1>
        <Form
          onInputChange={this.handleChange}
          cardName={this.state.nameInput}
          cardDescription={this.state.descriptionInput}
          cardImage={this.state.cardImage}
          cardAttr1={this.state.attr1}
          cardAttr2={this.state.attr2}
          cardAttr3={this.state.attr3}
          cardRare={this.state.cardRare}
          cardTrunfo={this.state.cardTrunfo}
          isSaveButtonDisabled={this.state.isSaveButtonDisabled}
          onSaveButtonClick={this.save}
          hasTrunfo={this.state.hasTrunfo}
        />
        <fieldset id="field3">
          <Card
            cardName={this.state.nameInput}
            cardDescription={this.state.descriptionInput}
            cardImage={this.state.cardImage}
            cardAttr1={this.state.attr1}
            cardAttr2={this.state.attr2}
            cardAttr3={this.state.attr3}
            cardRare={this.state.cardRare}
            cardTrunfo={this.state.cardTrunfo}
          />
        </fieldset>
        <h1 data-testid="cartas" className="center">
          Cartas
        </h1>
        {this.state.myCards.length > 0 ? (
          <SavedCards remove={this.remove} myCards={this.state.myCards} />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default App;
