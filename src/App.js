import React, { Component } from 'react';
import axios from 'axios'

import MainMenu from './components/main-menu';
import SearchBar from './components/search-bar';
import SearchResult from './components/search-result';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeerStyle: null,
      beerStylesList: []
    }
  }

  componentDidMount() {
    let instance = axios.create({
      baseURL: 'http://api.receitasdecerveja.com.br/',
      timeout: 100000,
    });
    instance.get('beerStyles').then((response) => {
      this.setState({beerStylesList: response.data});
    }).catch((error) => {
      console.log('Unable to get list of beer styles')
    });
  }

  onBeerStyleSelected = (value) => {
    this.setState({
      selectedBeerStyle: this.state.beerStylesList.find((beer_style) => {
        return beer_style.key === value
      })
    })
  }

  render() {
    return (
      <div className="App">
        <MainMenu />
        <SearchBar
          beerStylesList={this.state.beerStylesList}
          onBeerStyleSelected={this.onBeerStyleSelected} />
        <SearchResult
          selectedBeerStyle={this.state.selectedBeerStyle} />
      </div>
    )
  }
}

export default App;
