import { Component } from "react";
import { Load } from "./Button.styled";

export default class Button extends Component {
  render() {
      return <Load 
      type="button"
      onClick={this.props.onClick}
      >Load more</Load>;
  }
}

