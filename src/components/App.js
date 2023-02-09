import React, {useState} from "react";
import '../styles/App.css';

const relationsMap ={
    0:'Siblings',
    1: 'Friends',
    2 :  'Love ',
    3 :  'Affection',
    4 :  'Marriage',
    5 :  'Enemy',
};


const App = ()=> {
  const [str1 , setStr1] = useState("");
  const [str2 , setStr2] = useState("");
  const [relation , setRelation] = useState("");
  const [isError, setIsError] = useState(false);

  const handle1 = (event)=>{
    setStr1(event.Target.value);
  };
  
  const handle2 = (event)=>{
    setStr2(event.Target.value);
  };
  const handleCalculate = ()=>{
      if(!str1 || !str2) setIsError=(true);

      let newStr1 = '';
      let newStr2 = '';
          
      for(let i=0; i<str1.length; i++){
           if(str2.includes(str1[i])) {
            newStr2 = str2.replace(str1[i],"");
            break;
            console.log(str1[i]);
           } 
           newStr1 = newStr1 + str1[i]; 
          
      }

      const relationindex =  (newStr1.length+ newStr2.length) %6;
      setRelation(relationsMap[relationindex]);
  };

  const handleclear = () =>{
           setStr1("");
           setStr2("");
            setRelation("");
  };
         
        return(
            <div id="main">
                <input type="text" value={str1} onChange={handle1}></input>
                <input type="text" value={str2} onChange={handle2}></input>
               
               {/* Do not remove the main div */}
            <button data-testid="calculate_relationship" onClick={handleCalculate}>Calculate</button>
            <button  data-testid="clear" onClick={handleclear}>Clear</button>
            <h3 data-testid="answer">{isError ?"Please Enter valid input" : ""}</h3>
                  
            </div>
        );
    
};


export default App;
