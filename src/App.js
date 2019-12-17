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
  const profiles = [
    {name: 'Taro', age: 10},
    {name: 'Haneko', age: 5},
    {name: 'NoName'}
  ]
    return (
      <div>
        {
          profiles.map((profile, index) => {
            return (
              <User name={profile.name} age={profile.age} key={index}/>
            );
          })
        }
      </div>
    );
}
const User = (props) => {
return <div>I`m {props.name}. and {props.age} years old.</div>
}

//指定のpropsが与えられない場合に、コンポーネントにデフォルトで受け渡されるpropsの値を決められる
User.defaultProps = {
  age: 1
}

export default App;
