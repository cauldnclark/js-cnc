function App() {
  const [counter, setCounter] = React.useState(0);
  const [counterTwo, setCounterTwo] = React.useState(0);
  const [currentCounter, setCurrentCounter] = React.useState(true);

  return (
    <>
      <h3 id="header">JavaScript C&C COUNTER</h3>
      <h2 id="counter">{counter}</h2>

      <h2 id="counter2">{counterTwo}</h2>

      <button
        className="btn btn-primary"
        id="increment"
        style={{ marginRight: 20 }}
        onClick={() =>
          currentCounter
            ? setCounter(counter + 1)
            : setCounterTwo(counterTwo + 1)
        }
      >
        INCREMENT
      </button>
      <button
        className="btn btn-danger"
        id="decrement"
        onClick={() =>
          currentCounter
            ? setCounter(counter - 1)
            : setCounterTwo(counterTwo - 1)
        }
      >
        DECREMENT
      </button>
      <br />
      <br />
      <button
        className="btn btn-info"
        id="toggle"
        onClick={() => setCurrentCounter(!currentCounter)}
      >
        {`TOGGLE ${currentCounter ? 1 : 2}`}
      </button>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
