import React from 'react';
import styled from 'styled-components'

const H1 = styled.h1`
color: #000000; 
font-family: 'Raleway',sans-serif; 
font-size: 62px; 
font-weight: 800; 
line-height: 72px; 
margin: 0 0 24px; 
text-align: center; 
text-transform: uppercase;

`

class Contador extends React.Component {
render(){
  return (
         <div>
             <H1>{this.props.count}</H1>
        </div>
        );
    }
}

export default Contador;