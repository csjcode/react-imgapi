var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header');

console.log('main');
module.exports = React.createClass({
   render: function (){
      return <div>
         <Header />
         {this.props.childen}
      </div>
   }
})
