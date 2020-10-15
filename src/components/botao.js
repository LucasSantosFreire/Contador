import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background: darkblue;
  border-radius: 25px;
  border: 2px solid black;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`

class Botao extends React.Component {
    render(){
      return (
             <div>
                <Button onClick={this.props.onClick}>Incrementar</Button>
            </div>
            );
        }
    }

export default Botao;