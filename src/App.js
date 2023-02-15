import React from 'react';
// import FormGenerator from './FormGenerator/FormGenerator'
import formConfig from './formConfig.json';
import PlayGround from './PlayGround/PlayGround';
function App() {
  return (
    <div className="App">
      {/* <FormGenerator elementsJson={formConfig}/> */}
      <PlayGround />
    </div>
  );
}

export default App;
