import React, { Component } from 'react';
import { Dropdown, Segment } from 'semantic-ui-react'

export default class SearchBar extends Component {
  render() {
    return (
      <Segment className="SearchBar" inverted>
        <h1>Encontre uma receita</h1>
        <Dropdown
          className='SearchBar'
          placeholder='Escolha um estilo de cerveja'
          fluid search selection options={this.props.beerStylesList}
          onChange={(event, data) => this.props.onBeerStyleSelected(data.value)} />
      </Segment>
    );
  }
}
