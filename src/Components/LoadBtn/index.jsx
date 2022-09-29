import { Component } from "react";
import "./styles.css";

export class LoadButton extends Component {
  render() {
    const { text, click, disabled } = this.props;

    return <button 
    onClick={click}
    disabled={disabled}
    >{text}</button>;
  }
}
