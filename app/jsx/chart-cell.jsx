import React, { Component } from 'react';

export default class ChartCell extends Component {
	constructor(props) {
    super(props);
    this.state = { 
    	value: .5,
      view: 'empty'
    };
  }
  handleClick(event, view){
    var action = {view: view};
    var state = {};
    var react = {setState: this.setState.bind(this)};
    var ext = {};
    handleClick(action, state, react, ext);
  }
  handleChange(event){
    var action = {event: event};
    var state = {};
    var react = {setState: this.setState.bind(this)};
    var ext = {};
    handleChange(action, state, react, ext);
  }
	render(){
    var base_value;
    switch(this.props.selected_radio_button){
      case 'week': 
        base_value = 24;
        break;      
      case 'month':
        base_value = 26;
        break;
      case 'year':
        base_value = 89;
        break;
      default:
        base_value = 20;
    }

    switch(this.state.view){
      case 'show':
        var width_style = this.state.value*base_value+'px';
        return (<div 
          className={this.props.goal_style}
          style={{'width': width_style}}
          onClick={(event)=>{this.handleClick(event, 'intake')}}>
          </div>);
        break;
      case 'intake':
        return (<input 
          className={this.props.goal_style+'-intake'}
          type='text' 
          value={this.state.value} 
          onBlur={(event)=>{this.handleClick(event, 'show')}} 
          onChange={(event)=>{this.handleChange(event)}} 
          onKeyPress={(event)=>{
            if(event.charCode==13){
              this.handleClick(event, 'show');
            }
          }} />);
        break;
      default:
        return (<div 
          className='goal-empty'
          style={{'width': base_value+'px'}}
          onClick={(event)=>{this.handleClick(event, 'intake')}}>
          </div>);
    }
	}
}

function handleClick(action, state, react, ext){
  var view = action.view;
  react.setState({view: view});
}

function handleChange(action, state, react, ext){
  var event = action.event;
  react.setState({value: event.target.value});
}
