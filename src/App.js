import React from 'react';
import styled from 'styled-components'
import Contador from './components/contador'
import Botao from './components/botao'

const Div = styled.div`
    margin-top: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        count : 0,
    }
    this.incrementar = this.incrementar.bind(this);
} 
incrementar = () =>{
  this.setState({count:this.state.count + 1})
}
  render(){
    return (
            <Div>
              <Contador count={this.state.count}/>
              <Botao onClick={this.incrementar}/>
            </Div>
          )
      }
  }

export default App;
