// import React, { Component } from "react";

// class Cell extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { color: this.props.value };
//   }

//   newColor = () => {
//     this.setState = { color: "#333" };
//   };

//   render() {
//     return (
//       <div
//         className="cell"
//         style={{ backgroundColor: this.state.color }}
//         onClick={this.newColor}
//       ></div>
//     );
//   }
// }

// export default Cell;

import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  newColor = () => {
    this.setState({
      color: "#333"
    });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.newColor}
      ></div>
    );
  }
}
