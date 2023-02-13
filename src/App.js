import React from 'react';
import FormGenerator from './FormGenerator/FormGenerator'
import formConfig from './formConfig.json';
function App() {
  return (
    <div className="App">
      <FormGenerator elementsJson={formConfig}/>
    </div>
  );
}

export default App;
