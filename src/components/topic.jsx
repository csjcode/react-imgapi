var React = require('react');
var ReactDOM = require('react-dom');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var Reflux = require('reflux');
// var Header = require('./header');

module.exports = React.createClass({
   mixins: [
      Reflux.listenTo(ImageStore, 'onChange')
   ],
   getInitialState: function() {
      return {
         images:[]
      }
   },
   componentWillMount: function() {
      Actions.getImages(this.props.params.id)
   },
   render: function() {
      return <div>
         // I am a Topic with ID {this.props.params.id}

      </div>
   },
   onChange: function(event,images) {
      this.setState({images:images})
   }
});
