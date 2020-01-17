import React from 'react';
import axios from 'axios';
import { PlayerCard } from './components/PlayerCard'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [ ]
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ players: res.data})
      })
      .catch(err => {
        console.log('sorry we could not get that data for you', err)
      })
  }

  render(){
    console.log(this.state.players)
    return (
      <div className="App">
        {this.state.players.map(player => (
          <PlayerCard
            name={player.name}
            country={player.country}
            searchInt={player.searches}
          />
        ))}
      </div>
    );
  }
}

export default App;
