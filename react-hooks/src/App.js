import logo from './logo.svg';
import './App.css';
import {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react"
import Header from './components/Header';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { useReducer } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

// Change Fav Color
// function App() {
//   const [color,setColor] = useState("red");
//   return (
//     <div className="App">
//        <h1>My Fav Color is {color}</h1>
//        <button onClick={() => setColor("blue")}>Change</button>
//     </div>
//   );
// }

// export default App;

// Change single property in Object
// function App() {
//   const [car,setCar] = useState({
//     year:2008,
//     color:"red",
//     brand:"farrari",
//     model:1
//   });
//   return (
//     <div className="App">
//        <h1>The car is a {car.brand}, model {car.model}, with color {car.color} launched in {car.year}</h1>
//        <button onClick={() => setCar((prev) => {return {...prev,color:"blue"}})}>Change Car color</button>
//     </div>
//   );
// }

// export default App;


// Example of prevState
// function App() {
//   const [count,setCount] = useState(0);
//   return (
//     <div className="App">
//        <h1>Count: {count}</h1>
//        <button onClick={() => { 
//           setCount((prev) => prev+1)
//           setCount((prev) => prev+1)
//           setCount((prev) => prev+1)
//           setCount((prev) => prev+1)
//        }}>Increaes Count By 4</button>
//     </div>
//   );
// }

// export default App;

// Example of UseEffecet
// function App() {
//   const [count,setCount] = useState(0);
//   useEffect(() => {
//      setTimeout(() => {
//          setCount(count => count + 1)
//      },2000)
//   },[count])
//   return (
//     <div className="App">
//        <h1>I have rendered {count} times</h1>
//     </div>
//   );
// }

// export default App;

// function App() {
//     const [value,setValue] = useState(0);
//      const count = useRef(0)
//    useEffect(() => {
//      count.current = count.current + 1;
//    })
//     return (
//       <div className="App">
//          <h1> {value} </h1>
//          <button onClick={() => setValue(prev => prev-1)}>-1</button>
//          <button onClick={() => setValue(prev => prev+1)}>+1</button>

//          <h1>Component has rendered {count.current} times</h1>
//       </div>
//     );
//   }
  
//   export default App;

// Accessing dom using ref
// function App() {
//   const [value,setValue] = useState(0);
//   const inputRef = useRef()
//   return (
//     <div className="App">
//        <input type='text' ref={inputRef}/>
//        <button onClick={() => {
//          inputRef.current.style.backgroundColor = "blue"
//        }}>Click here</button>
//     </div>
//   );
// }

// export default App;


// UseMemo example
// function App() {
//     const [number,setNumber] = useState(0)
//     const [counter,setCounter] = useState(0)
//    function cubeNum(num) {
//     return Math.pow(num, 3)
//    }
//    const result = useMemo(() => {return cubeNum(number)} ,[number])
//     return (
//       <div className="App">
//          <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
//          <h1>Cube of the number : {result}</h1>
//          <button onClick={() => setCounter(counter + 1)}>Counter++</button>
//          <h1>Counter: {counter}</h1>
//       </div>
//     );
//   }
  
//   export default App;

// Use Callback example
// function App() {
  
//     const [counter,setCounter] = useState(0)
//     const newFunc = useCallback(() => {},[])
//     return (
//       <div className="App">
//          <Header newFunc={newFunc}/>
//          <button onClick={() => setCounter(prev => prev+1)}>Counter++</button>
//          <h1>Counter: {counter}</h1>

//       </div>
//     );
//   }
  
//   export default App;

// useContext Example
// function App() {
  
//   const [counter,setCounter] = useState(0)
//   const newFunc = useCallback(() => {},[])
//   return (
//     <div className="App">
//       <Profile/>
//       <Contact/>
//       <Footer/>

//     </div>
//   );
// }

// export default App;


// useReducer Example
// function App() {

//   const initialState = {count: 0}
//   const reducer = (state,action) => {
//    switch(action.type) {
//      case 'increase':{
//        return {count: state.count+1}
//      }
//      case 'decrease' : {
//        return {count: state.count-1}
//      }
//      case 'input' : {
//        return {count: action.payload}
//      }
//      default: {
//        return state
//      }
//    }
//   } 
//  const [state,dispatch] = useReducer(reducer, initialState)
 
//    return (
//      <div className="App">
//        <h1>{state.count}</h1>
//        <button onClick={() => dispatch({type:"increase"})}>Increase</button>
//        <button onClick={() => dispatch({type: "decrease"})}> Decrese</button>
 
//        <input value={state.count} type='number' onChange={(e) => dispatch({type:'input',payload: Number(e.target.value)})}/>
//      </div>
//    );
//  }
 
//  export default App;



// useLayoutEffect Example
// function App() {
// useEffect(() => {
//    console.log("Message from useEffect")
// },[])

// useLayoutEffect(() => {
//   console.log("Message from useLayoutEffect")
// },[])
//   return (
//     <div className="App">
//     <h2>Text message</h2>
//     {Array(4000).fill('').map((item,index) => (
//       <li key={index}>{Math.pow(Math.random(), 10)}</li>
//     ))}
//     </div>
//   );
// }

// export default App;

// Custom Hook Example
function App() {

    const [name, setName] = useLocalStorage('username','')
    return (
      <div className="App">
      <input type='text' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
      <h2>Hello, {name}!</h2>
      </div>
    );
  }
  
  export default App;