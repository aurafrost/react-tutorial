import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    counter: 0,
    persons: [
      { name: "Joe", age: 24 },
      { name: "Bill", age: 11 },
      { name: "Francis", age: 64 }
    ],
    otherState: 'some value'
  };

  switchNameHandler = (newName) => {
    console.log("Handler triggered")
    var temp=this.state.counter;
    if(temp===2){
      temp=0;
    }
    else{
      temp+=1;
    }
    // this.setState({
    //   counter:temp
    // })
    this.setState({
      counter:temp,
      persons: [
        { name: newName, age: 24 },
        { name: "Jill", age: 11 },
        { name: "Fran", age: 64 }
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Derp</h1>
        <p>Testing...</p>
        <button onClick={()=>this.switchNameHandler("Ann")}>Switch Name</button>
        <Person name={this.state.persons[this.state.counter].name} age={this.state.persons[this.state.counter].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,"Max!")}>Hobby: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
    // return React.createElement('div',null,
    //   React.createElement('h1',null,'Hi, I\'m a React App!!!'));
  }
}

export default App;
