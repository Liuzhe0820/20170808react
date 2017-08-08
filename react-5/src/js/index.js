/**
 * Created by Administrator on 2017/6/25.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './compents/header.js';
import ComponentFooter from './compents/footer.js';
import IndexBody from './compents/indexBody.js';

class Index extends React.Component{
  render(){
    return (
      <section>
        <ComponentHeader/>
        <IndexBody  userId={666}/>
        <ComponentFooter/>
      </section>
    )
  }
}
ReactDOM.render(<Index/>,document.getElementById('example'));
