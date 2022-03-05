import React, { Component } from "react";

class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(`window`, window.location.pathname);
    let ToRender;
    for (let i = 0; i < this.props.children.length; i++) {
      console.log(`this.props.children[i].props.path`, this.props.children[i].props.path);
      console.log(`window.location.pathname`, window.location.pathname);
      if (this.props.children[i].props.path === window.location.pathname) {
        ToRender = this.props.children[i];
      }
    }
    console.log(`toRender`, ToRender);
    console.log(`this.props.children`, this.props.children);
    return (
      // props.children.path === 'aa'
      ToRender
    );
  }
}

const withA = Component => {
  return class extends Component {
    render() {
      return <Component newProp={'aNewProp'} {...this.props} />
    }
  }
}

export { Sandbox, withA }