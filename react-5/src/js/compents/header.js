import React from 'react';
import ReactDOM from 'react-dom';
export default class ComponentHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      miniHeader:false
    };
  };
  switchHeader(){
    this.setState({
      miniHeader:!this.state.miniHeader
    });
  };
  render(){
    const styleComponentHeader = {
      header:{
        backgroundColor:'#333',
        color:'#fff',
        'padding-top':(this.state.miniHeader)?'5px':'20px',
        paddingBottom:(this.state.miniHeader)?'5px':'20px'
      }
    }
    return (
      <header style={styleComponentHeader.header} className = 'smallFontSize' onClick = {this.switchHeader.bind(this)}>
        <h1>这里是头部</h1>
      </header>
    )
  }
}
