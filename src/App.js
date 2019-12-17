import React, { Component } from 'react';

//クラスコンポーネント
/*
class App extends Component { 
  render() {
    return (
      <React.Fragment>
        <label htmlFor='bar'>bar</label>
        <input type='text' onChange={() => {console.log('clicked')}}></input>
      </React.Fragment>
    );
  }
}
*/

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}
const Cat = () => {
  return <div>cat</div>
}

export default App;
