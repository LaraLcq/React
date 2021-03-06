import React, { Component } from 'react';
import bottle                 from '../assets/bottle.svg';
import '../css/App.css';

import { establishments }    from './establishments/fixtures';
import Establishment         from './establishments/Establishment';

class App extends Component {
  
    constructor(props) {
          super(props);
          this.state = {
              pseudo  : "STRANGER"
          }
      }

      randomPseudo = () => {
          let randomPseudo    = ""
          const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          const size          = Math.floor(Math.random() * 10) + 5
          
          for( let i=0; i < size; i++ ){
              randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
          }
          this.setState({
              pseudo : randomPseudo
          })
      }

  render() {
    const listEstablishment = establishments.map( (establishment) => {
      return (
       <Establishment key={ establishment.id } establishment={ establishment }/>
        )
    })

    return (
            <div className="App">
                <div className="App-header">
                    <img src={bottle} className="App-logo" alt="logo" />
                    <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
                </div>
                <div className="App-intro">
                    {/* On appelle notre fonction lors du clic sur le lien */}
                    <p> <a onClick={ this.randomPseudo } >Changer le pseudo !</a> </p>
                    <section>
                        { listEstablishment }
                    </section>
                </div>
            </div>
        );
}
}

export default App;