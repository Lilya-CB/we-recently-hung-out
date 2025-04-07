import logo from './img/logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Hello, we recently hung out!
        </p>
        <p>
          This is a simple form to collect information about your recent hangouts.
        </p>
        <p>
          Please fill out the form below to get started.
        </p>

        <form>
          <label>
            Name:
            <input type="text" name="name"/>
          </label>
          <br/>
          <br/>
          <label>
            Date of Hangout:
            <input type="date" name="date"/>
          </label>
          <br/>
          <label>
            did i act okay?
            <input type="radio" name="act" value="yes"/> yes
            <input type="radio" name="act" value="no"/> no
          </label>
          <br/>
          <label>
            was i cool?
            <input type="radio" name="cool" value="yes"/> yes
            <input type="radio" name="cool" value="no"/> no
          </label>
          <br/>
          <label>
            was i fun?
            <input type="radio" name="fun" value="yes"/> yes
            <input type="radio" name="fun" value="no"/> no
          </label>
          <br/>
          <label>
            did you have fun?
            <input type="radio" name="did-you-fun" value="yes"/> yes
            <input type="radio" name="did-you-fun" value="no"/> no
          </label>
          <br/>
          <label>
            did i do anything wrong?
            <input type="radio" name="wrong" value="yes"/> yes
            <input type="radio" name="wrong" value="no"/> no
          </label>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <p>
          Thank you for your participation!
        </p>

      </header>
    </div>
  );
}

export default App;
