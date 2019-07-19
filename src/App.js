import React, {Component} from 'react';
import './App.css';
import Header from "./Components/header"
import Body from "./Components/body"
import Footer from "./Components/footer"
import About from "./Components/about"
import Intro from "./intro"

class App extends Component{

  state = {
    setView : "Introduction"
  }

  changeView = (event) => {
   this.setState({setView : event.target.value})
  }

  render(){

    return(
      <>
      <Header></Header>

      <ul>
            <button onClick = {this.changeView} value="Introduction">Introduction</button>
            <button onClick = {this.changeView} value="TODO list">TODO list</button>
            <button onClick = {this.changeView} value="About">About</button>

      </ul>


      {this.state.setView==="Introduction" && <Intro></Intro>}
      {this.state.setView==="TODO list" && <Body></Body>}
      {this.state.setView==="About" && <About></About>}
      <Footer></Footer>
      </>
    )
  }

}

export default App;
