import logo from './logo.svg';

import nations from './nations';
import 'flag-icons';
import './App.css';
import {useEffect, useState} from 'react';
function App() {
  const [country,setCountry]=useState([]);
  const [flagCountry,setFlagcountry]=useState({});
  const[selected,setSelected]=useState({});
  const [showAnswer,setShowanswer]=useState(false);
  const [count,setcount]=useState(0);
  const [correct,setcorrect]=useState(0);
  const [incorrect,setincorrect]=useState(0);

  const generaterandom=()=>{
    const r=[];
    for(let i=0 ;i<4; i++)
    {
      const a= Math.floor(Math.random()*nations.length);
      r.push(nations[a]);
    }

    setCountry(r);
    const b= Math.floor(Math.random()*4);
    setFlagcountry(r[b]);
    console.log(r,r[b]);

  };

  const check=(c)=>{
    setSelected(c);
    setcount(count+1);
    if(c.name === flagCountry.name){
      console.log('matched');
      setcorrect(correct+1);
    }
    else{
      console.log('not matched');
      setincorrect(incorrect+1);
    }
    setShowanswer(true);
    setTimeout(() => {
      setShowanswer(false);
      generaterandom();
    }, 5000);
  };
    
  

useEffect(
  ()=>{generaterandom()},[]
);


  return (
    <div className="App">

      {/* {nations.map( (nation) => <div>
          {nation.name}
        </div>)} */}

        {/* <span class="fi fi-gr"></span>  */}
        <div> count:{count} | correct:{correct} | incorrect:{incorrect}</div>

        {flagCountry.name ? (
        <span
          className={`fi fi-${flagCountry[
            'alpha-2'
          ].toLowerCase()}`}
        ></span>
      ) : null}

        {country.map((country) => (
          <div><button onClick={(e) => check(country)} >{country.name}</button></div>
        ))}
<div >{showAnswer?
<div>{flagCountry.name === selected.name ? <h4 style={{color:'blue'}}>Nice</h4>:<h4 style={{color:'blue'}} > wrong</h4>} </div>

:null}</div>

<div>
        {showAnswer ? (
          <h2
            className={
              flagCountry.name === selected.name ? 'correct' : 'incorrect'
            }
          >
            Correct : {flagCountry.name}
          </h2>
        ) : null}
      </div>

      
    </div>
    
  );
}

export default App;
