import React, { Component } from "react";
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle `
*{
  margin: 0;
padding: 0;
box-sizing: border-box;
}

body{
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  display: flex;
  justify-content: center;
}

`
const Title = styled.h1 `
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 5vw;
margin-top: 5vw;
` 

const Container = styled.div `
width: 30vw;
display: flex;
justify-content: center;
flex-wrap: wrap
`
const Button = styled.button `

	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color:#f9f9f9;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
  margin: 0px 15px 0px 15px;

	background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
`


class Counter extends Component {
  state = {
    num: 0,
  };

  add = () => {
    if(this.state.num < 10) {
      this.setState ({
        num: this.state.num + 1
      })
    }
  };

  remove = () => {
    if(this.state.num > 0) {
      this.setState ({
        num: this.state.num - 1
      })
    }
  };

  render() {
    return (
      <Container>
        <GlobalStyled/>
        <Title>Contador :)</Title>
        <Button onClick={this.add}>+</Button>
        <h3> {this.state.num} </h3>
        <Button onClick={this.remove}>-</Button>
      </Container>
    );
  }
}

export default Counter;
