import React from "react";

class CounterWithClass extends React.Component {
  constructor() {
      super();
      this.state={
        count:0
      }

  }
  render(): React.ReactNode {
    console.log(this);
    return <button onClick={()=>this.setState({  })}>0</button>;
  }
}

export default CounterWithClass;
