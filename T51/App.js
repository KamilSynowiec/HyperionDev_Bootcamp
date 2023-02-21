import './index.css';

//importing these functions to select required slices of state
import { useSelector, useDispatch } from "react-redux";
//importing the action creators from counter reducer
import {decrement, increment} from "./store/counter";

function App() {

  //useSelector function allows to find the required sliced
  const count = useSelector((state)=>state.counter.value);

  //useDispatch allows to dispatch all actions to the reducer
  const dispatch = useDispatch();


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

    </div>
  );
}

export default App;
