import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodyChild.js';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins.js';
const defaultProps = {
  userName:'啦啦啦'
}
export default class IndexBody extends React.Component{
  constructor(){
    super();//调用基类的所有的初始化方法
    this.state = {userName:'liuzhe',age:'20'}
  }
  changeUserInfo(){
    this.setState({age:'50'});
    // var mySubmitBtn = document.getElementById('submitBtn');
    // console.log(mySubmitBtn);
    // ReactDOM.findDOMNode(mySubmitBtn).style.color = 'red';
    this.refs.submitBtn.style.color = 'yellow';
  };
  handleChildValueChange(event){
    this.setState({age:event.target.value})
  };
  render(){
    // var num = 0;
    // setTimeout(()=>{
    //   this.setState({userName:'liuzheHAHA'})
    // },1000)
    return (
      <section>
        <h2>好多的内容</h2>
        <p>{this.state.age}</p>
        <div>userName:{this.props.userName}userId:{this.props.userId}</div>
        <input id='submitBtn' ref='submitBtn' type='button' value='提交'onClick={this.changeUserInfo.bind(this)}/>
        <BodyChild {...this.props} id={6} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </section>
    )
  }
}
IndexBody.propTypes = {
  useriId:React.PropTypes.number.isRequired
}
IndexBody.defaultProps = defaultProps;
ReactMixin(IndexBody.prototype,MixinLog);
