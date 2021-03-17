(function () {
  function observerStore(reducer, initialState) {
    const store = {};

    store.state = initialState;
    store.listeners = [];
    store.subscribe = (listener) => store.listeners.push(listener);
    store.dispatch = (action) => {
      store.state = reducer(store.state, action);
      store.listeners.forEach((listener) => listener(action));
    };

    store.getState = () => store.state;

    return store;
  }

  const initialState = {
    counter: 0,
    counterTwo: 0,
    currentCounter: 1,
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          [action.payload]: state[action.payload] + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          [action.payload]: state[action.payload] - 1,
        };
      case "TOGGLE_COUNTER":
        return {
          ...state,
          currentCounter: action.payload,
        };
      default:
        return state;
    }
  }

  const myStore = observerStore(reducer, initialState);
  const toggleHandler = document.getElementById("toggle");

  function updateInterface() {
    const countHandler = document.getElementById("counter");
    const countTwoHandler = document.getElementById("counter2");
    const { counter, counterTwo, currentCounter } = myStore.getState();

    countTwoHandler.innerHTML = counterTwo;
    countHandler.innerHTML = counter;
    toggleHandler.innerHTML = `Toggle ${currentCounter}`;
  }

  myStore.subscribe(updateInterface);

  const incHandler = document.getElementById("increment");
  const decHandler = document.getElementById("decrement");

  incHandler.addEventListener("click", function () {
    const { currentCounter } = myStore.getState();
    myStore.dispatch({
      type: "INCREMENT",
      payload: currentCounter === 2 ? "counterTwo" : "counter",
    });
  });

  decHandler.addEventListener("click", function () {
    const { currentCounter } = myStore.getState();
    myStore.dispatch({
      type: "DECREMENT",
      payload: currentCounter === 2 ? "counterTwo" : "counter",
    });
  });

  toggleHandler.addEventListener("click", function () {
    const { currentCounter } = myStore.getState();
    myStore.dispatch({
      type: "TOGGLE_COUNTER",
      payload: currentCounter === 2 ? 1 : 2,
    });
  });
})();
