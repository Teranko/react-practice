import React from 'react';
import InnerComponent from './InnerComponent.js'
import Clock from './Clock.js'

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  }
];

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list: list,
    }
  }

render() {
  return (
    <div>
    <Clock />

    </div>
  );
}
    
  

}

export default App;
