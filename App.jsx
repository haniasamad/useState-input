import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var [show, setShow] = useState(false);
  console.log(show);

  return (
    <div>
      <h1>Show Password</h1>
      <input type={show ? "text" : "password"} />
      <p onClick={() => setShow(!show)}>
        {show ? (
          <img src="https://icons.veryicon.com/png/o/miscellaneous/simple-linetype-icon/eye-43.png" alt="hide" width={20} />
        ) : (
          <img src="https://static.thenounproject.com/png/4411492-200.png" alt="show" width={20} />
        )}
      </p>
    </div>
  );

}
export default App;


