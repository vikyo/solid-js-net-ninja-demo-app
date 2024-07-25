import { Component } from "solid-js";
import { CardProps } from "../interfaces/CardProps";

const Card: Component<CardProps> = (props) => {
  console.log("This is child card")
  return (
    <div
      class="bg-white p-4 text-center rounded-md shadow-md"
      classList={{ "rounded-md": props.rounded, "shadow-md": !props.flat }}
    >
      {props.children}
    </div>
  );
}

export default Card