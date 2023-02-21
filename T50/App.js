import './index.css';
//importing these functions to select required slices of state
import { useSelector, useDispatch } from "react-redux";
//importing the action creators from counter reducer
import {decrement, increment, incrementByAmount} from "./store/counter";
import {useState} from "react";

function App() {

  //useSelector function allows to find the required sliced
  const count = useSelector((state)=>state.counter.value);

  //useDispatch allows to dispatch all actions to the reducer
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(incrementByAmount(Number(userInput)));
    setUserInput(0)
  };


  return (
    <div>
      <div className="App">
        <h1>{count}</h1>  {/*the variable count is displayed that was initiated by using useSelector */}
      </div>
      <div className="Buttons">
        {/*when the button is clicked the state will incremenet */}
        <button onClick={()=> dispatch(increment())}>Increment</button>
        {/*when the button is clicked the state will decremenet */}
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
      </div>
      <form className="Form" onClick={handleSubmit}>
        <label>
          Value:
          <input type="text" name="value" onChange={(e) => setUserInput(e.target.value)} value={userInput}/>
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
