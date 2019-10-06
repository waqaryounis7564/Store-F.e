import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
class Like extends Component {
  render() {
    return this.props.active ? (
      <FaHeart onClick={this.props.toggle}></FaHeart>
    ) : (
      <IoIosHeartEmpty onClick={this.props.toggle}></IoIosHeartEmpty>
    );
  }
}
export default Like;
