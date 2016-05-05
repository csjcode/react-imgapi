var React = require('react');
// var ReactDOM = require('react-dom');
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
      // console.log('Topic is about to render and fetch data');
      Actions.getImages(this.props.params.id)
   },
   componentWillReceiveProps: function (nextProps) {
      Actions.getImages(nextProps.params.id)
   },
   render: function() {
      // console.log('Topic rendering with ID ' + this.props.params.id);
      // console.log('I have this many images ' + this.state.images.length);
      return <div>
         // I am a Topic with ID {this.props.params.id}

      </div>
   },
   onChange: function(event,images) {
      this.setState({images:images})
   }
});
