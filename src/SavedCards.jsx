import React from "react";
import Card from "./components/Card";

class SavedCards extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            filterName: '',
        }
    }

  async handleChange(event) {
    const { name, value } = event.target

    await this.setState((prevState, _props) => ({
        [name]: value
    }))
  }
    
    render() {
        const { myCards, remove } = this.props
        const cartas = myCards.filter((carta) => carta.cardName.includes(this.state.filterName)).map((carta) => {
           return <fieldset key={Math.random()} data-testid='field2' id='field2'><Card 
            cardName={carta.cardName} 
            cardDescription={carta.descriptionInput} 
            cardAttr1={carta.attr1} 
            cardAttr2={carta.attr2} 
            cardAttr3={carta.attr3} 
            cardImage={carta.cardImage} 
            cardRare={carta.cardRare} 
            cardTrunfo={carta.cardTrunfo}
            btn={1}
            remove={remove}
            id={carta.id}
            />
            </fieldset>
        })
        return (
            <>
            <h2 style={{textAlign: 'center'}}>Filtros</h2>
            <input onChange={this.handleChange} name='filterName' value={this.state.filterName} placeholder='Filtrar' data-testid="name-filter" className='inputFilter' type='text'></input>       
            {cartas}
            </> 
        )
    }
}

export default SavedCards