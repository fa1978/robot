import React ,{Component} from 'react';

//import logo from './logo.svg';
import './App.css';
import CardList from './CardList'
//import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component {
   constructor(){
    super();
    this.state={
      //robots:robots ,
      robots:[] ,
      searchfield:''} ;
   }
   componentDidMount(){ 
    fetch('https://jsonplaceholder.typicode.com/users').then(respose=>respose.json()).then(users=>this.setState({robots:users}));
   }
   onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
    
   // console.log(filteredRobots) ;
  }
  render(){
    const filteredRobots=this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return (
     <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
    </div>
    );

  }
}
export default App;
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/


