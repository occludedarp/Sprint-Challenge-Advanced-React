import React from 'react';
import axios from 'axios';
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

          <p>
            map over individual player data
          </p>

      </div>
    );
  }
}

export default App;
