import React, { Component } from 'react';
//import '.App.css';
import Footer from "./components/footer"
class App extends Component{
  render() {
    return (
      <div>
        <Footer/>
        {this.props.children}
    </div>
    )
   
  }
}

export default App;
