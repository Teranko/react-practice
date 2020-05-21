import React from 'react';

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 1,
    }
];

class InnerComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list: list,
    }

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
      function isNotId(item) {
          return item.objectID !== id;
      }

      const updatedList = this.state.list.filter(isNotId)
      this.setState({ list: updatedList })
  }

render() {
  return (
      <div className="App">
        {this.state.list.map(item =>
          <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
           <span>{item.points}</span>
           <span>
               <button
                type="button"
                onClick={ () => this.onDismiss(item.objectID)}
               >
                   remove?
               </button>
           </span>
       </div>
    )}
    </div>
  );
}
    
  

}

export default InnerComponent;
