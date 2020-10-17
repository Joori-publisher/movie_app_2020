import React from 'react';

function Food({name}){
  return <h1>Hello {name}!!!</h1>
}

function App() {
  return (
    <div>
      Heloo!
      <Food name="jihoon"/> 
      <Food name="joori"/> 
      <Food name="jennr"/> 
      <Food name="jennr"/> 
    </div>
  );
}

export default App;
