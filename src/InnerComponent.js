import React from 'react';

function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}


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
    title: 'john',
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
      searchTerm: "",
    }

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
      function isNotId(item) {
          return item.objectID !== id;
      }

      const updatedList = this.state.list.filter(isNotId)
      this.setState({ list: updatedList })
  }

  onSearchChange(event){
    this.setState({ searchTerm: event.target.value })

  }

render() {
  return (
      <div className="page">
        <div className="interaction" >
          <Search 
          value={this.state.searchTerm}
          onChange={this.onSearchChange}
          >
            Поиск
          </Search>
        </div>
        <Table 
         list={list}
         pattern={this.state.searchTerm}
         onDismiss={this.onDismiss}
        />

        
    </div>
  );
}
    

  

}

class Search extends React.Component {
  
  render(){
    const { value, onChange, children } = this.props;
    return(
      <form>
          {children}
          <input
           type="text" 
           value={value}
           onChange={onChange}
           />
        </form>
    )
  }
}

class Table extends React.Component {

  render(){
    const { list, pattern, onDismiss} = this.props;
    return(
      <div className="table">
        {list.filter(isSearched(pattern)).map(item =>
            <div key={item.objectID} className="table-row">
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
                <Button
                  className="button-inline"
                  onClick={() => onDismiss(item.objectID)}
                >
                  remove
                </Button>
            </span>
        </div>
      )}
      </div>
    )
  }
}

class Button extends React.Component {
  render(){
    const { onClick, className, children } = this.props
    return(
      <button
        type="button"
        className=""
        onClick={onClick}
      >
         {children}
      </button>
    )
  }
}

export default InnerComponent;
