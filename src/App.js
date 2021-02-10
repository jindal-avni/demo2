import React from 'react';
import './App.css';
import ImageComponent from './ImageComponent';

function App() {
  return (
    <div className="App">
      <ImageComponent imgsrc="react_demo3/src/images/earth.jpg" />
      <ImageComponent imgsrc={".\images\moon.jpg"} />
      <ImageComponent imgsrc={".\images\sun.png" }/>
      <ImageComponent imgsrc={".\images\water.jpg"} />
     

    </div>
  );
}

export default App;
