import React, { Component } from 'react';


class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {img: props.imgsrc, counter:0};
  }

  incrementCounter = ()=>{
     // alert(this.state.counter);
      this.setState({counter : this.state.counter +1} );
      //console.log(this.state.counter);
  }

  render(){
    return (
      <div>
          <button onClick={this.incrementCounter}> <img src={this.state.img}></img> </button>
          <span> {this.state.counter} </span>
      </div>
    );
  }
}

export default ImageComponent;