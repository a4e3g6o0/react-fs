//to run this code go to https://jscomplete.com/playground and paste it.

function Button(props) {
    const increase = () => props.onClickFunction(props.increment)
      return (
      <button onClick={ increase }>
        +{props.increment}
      </button>
    );
  }
  
  function Display(props) {
    return (
      <div> { props.message } </div>
    );
  }
  
  function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = number => setCounter(counter + number);
    return (
      <>
        <Button onClickFunction={incrementCounter} increment={1}/>
        <Button onClickFunction={incrementCounter} increment={5}/>
        <Button onClickFunction={incrementCounter} increment={10}/>
        <Button onClickFunction={incrementCounter} increment={100}/>
        <Display message={ counter }/>
      </>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
  );
  