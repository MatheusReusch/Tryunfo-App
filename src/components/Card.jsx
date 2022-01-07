import React from "react";

class Card extends React.Component {

  componentWillUnmount() {
    console.log('desmontou')
}
  
  render() {
        const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, btn, remove, id } = this.props
        return (
        <div id='field'>
          <h2 data-testid="name-card">{cardName}</h2>
          {cardImage === '' ? '' : <img className='foto' data-testid="image-card" alt={cardName} src={cardImage}></img>}
          <h3 data-testid="description-card">{cardDescription}</h3>
          <h3 data-testid="attr1-card">{cardAttr1 === 0 || cardAttr1 === '0' ? '' : cardAttr1}</h3>
          <h3 data-testid="attr2-card">{cardAttr2 === 0 || cardAttr2 === '0' ? '' : cardAttr2}</h3>
          <h3 data-testid="attr3-card">{cardAttr3 === 0 || cardAttr3 === '0' ? '' : cardAttr3}</h3>
          <h3 data-testid="rare-card">{cardRare}</h3>
          {cardTrunfo ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : ''}
          {btn === 1 ? <button data-testid="delete-button" onClick={remove}>Excluir</button> : ''}
          {id !== 'undefined' ? <p style={{display: 'none'}}>{id}</p> : ''}
        </div>
        )
    }
}

export default Card