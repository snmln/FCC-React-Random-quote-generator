import React, { Component } from 'react';
import './App.css';
import { random } from 'lodash'
import QuoteMachine from './components/QuoteMachine';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectQuoteIndex: null,
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex()));
  }
assignNewQuoteIndex(){
  this.setState({ selectQuoteIndex: this.selectQuoteIndex() });

}
  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectQuoteIndex)){
      return undefined;
    }
   return this.state.quotes[this.state.selectQuoteIndex];
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1)
  }

  render() {
    //console.log(this.state.selectQuoteIndex);
    console.log(this.selectedQuote);

    return (
      <div className="App" id="quote-box">
        <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
      </div>
    );
  }
}

export default App;
