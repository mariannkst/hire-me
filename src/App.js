import './App.css';
import Navbar from './components/Navbar';
import ChildrenDisplay from './components/ChildrenDisplay';

import React, {Component} from 'react';

class App extends Component {

  state = {
    children: []
  };

  myUrl = "https://tryfamly.co/api/daycare/tablet/group?accessToken=234ffdb8-0889-4be3-b096-97ab1679752c&groupId=11fc220c-ebba-4e55-9346-cd1eed714620&institutionId=fb6c8114-387e-4051-8cf7-4e388a77b673";

  componentDidMount() {
       
    fetch(this.myUrl, {
       headers: {
                   'Content-type': 'application/json'
               },
           })
    .then(res => res.json())
    .then((data) => {
      this.setState({ children: data.children });
      console.log(data.children);
    })
    .catch(console.log)
  }

  render () {

    return (

      <div className="App">

        <header>
          <Navbar />
        </header>

        <main>
            <ChildrenDisplay children={this.state.children}/>
        </main>

      </div>
    );
  
  }

}

export default App;
