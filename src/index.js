// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY
var Card = React.createClass({
  render: function() {
    return (
      <div className="col-sm-2">
        <img src={"http://golearntocode.com/images/cards/" + this.props.value + ".png"} className="img-responsive"/>
      </div>
    )
  }
})

var Deck = React.createClass({
  render: function() {
    return (
      <div className="row">
        <Card value="5_of_diamonds" />
        <Card value="5_of_diamonds"  />
        <Card value="5_of_diamonds"  />
        <Card value="5_of_diamonds"  />
        <Card value="5_of_diamonds"  />
      </div>
    )
  }
})

var Deal = React.createClass({
  render: function() {
    return (
      window.getDeck().shuffle()
    )
  }
})

var App = React.createClass({
  getInitialState: function(){
    return {
      startingDeck: ["face_down","face_down","face_down","face_down","face_down",]
    }
  },
  DealDeck: function() {
        Deal
        this.setState({
          Hand: Deal
        })
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <Deck />
          <div className="col-sm-2">
              <h1><a href="#" className="btn btn-success" onClick={this.DealDeck} >Deal</a></h1>
            </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
