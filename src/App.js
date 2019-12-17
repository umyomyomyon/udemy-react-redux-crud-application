import React from 'react';
import PropTypes from 'prop-types';

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

//コンポーネントに渡されるpropの型チェックを行う
User.porpTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired

}

export default App;
