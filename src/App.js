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
          Please fill out the form below to get started.
        </p>
        </header>
        <form action="https://example.com/submit" method="POST">
          <label>Your Name: </label>
            <input type="text" name="name" placeholder='John Doe'/>
          <br/>
          <label>Date of Hangout:</label>
            <input type="date" name="date"/>
          <br/>
          <label>Did i act okay?</label>
          <select name="did-i-act-okay">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          <br/>
          <label>Was i cool?</label>
          <select name="was-i-cool">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          <br/>
          <label>Was i fun?</label>
          <select name="was-i-fun">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          <br/>
          <label>Did you have fun?</label>
          <select name="did-you-have-fun">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          <br/>
          <label>Did i do anything wrong?</label>
          <select name="did-i-do-anything-wrong">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          <br/>
          <button class="boutton" type="submit" onclick="return soumettreformulaire()">Submit</button>
          </form>
        <p>
          Thank you for your participation!
        </p>
    </div>
  );
}

export default App;
