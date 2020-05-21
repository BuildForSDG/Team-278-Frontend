import React from "react";
import ReactDOM from "react-dom";
import App from './App';

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);