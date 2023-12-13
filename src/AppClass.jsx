import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{

  // code here
  render(props) {
    const img = this.props.myData();

    return (
      <>
        {img.map((item) => (
          <img key={item.id} src={item.img} alt="" />
        ))}
      </>
    );
  }
}
