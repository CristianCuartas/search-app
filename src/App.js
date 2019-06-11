import React from 'react';
import './App.css';
import SearchNav from './SearchNavbar/searchNav';
import ContainerComponent from './Content_Container/containerComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  test = data => {
    console.log(data);
    this.setState({
      data
    });
  };

  render() {
    return (
      <div className="App">
        <SearchNav onDataFecth={this.test} />
        <ContainerComponent dataContainer={this.state.data} />
      </div>
    );
  }
}

export default App;
