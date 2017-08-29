import React, { Component } from 'react';
import Chart from './chart.jsx';
import ChartHeader from './chart-head.jsx';

export default class Menu extends Component {
	constructor(props) {
    super(props);
    this.state = { 
    	selected_radio_button: 'week'
    };
  }
	handleClick(selected_radio_button){
		var action = {selected_radio_button: selected_radio_button};
		var state = {};
		var react = {setState: this.setState.bind(this)};
		var ext = {};
		handleClick(action, state, react, ext);
	}
	render(){
		return (
			<div id='main-panel' style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center'}}>
      	
      	<div id='radio-buttons-panel' style={{'display': 'flex'}}>
      	  <div id={(this.state.selected_radio_button=='year') ? 'radio-button1-is-selected' : 'radio-button1'} className='radio-buttons' onClick={(event)=>this.handleClick('year')}>Year</div>
      	  <div id={(this.state.selected_radio_button=='quarter') ? 'radio-button2-is-selected' : 'radio-button2'} className='radio-buttons' onClick={(event)=>this.handleClick('quarter')}>Quarter</div>
      	  <div id={(this.state.selected_radio_button=='week') ? 'radio-button3-is-selected' : 'radio-button3'} className='radio-buttons' onClick={(event)=>this.handleClick('week')}>Week</div>
      	</div>
      	<div id='chart-header' style={{'display': 'flex', 'alignItems': 'flex-end'}}>
      	   	<div className='col1'>
      	    	<span id="col1header">Sprint Goal</span>
      	  	</div>
      	  	<div className='col2' style={{'display': 'flex'}}>
      	  	  <ChartHeader>{this.state.selected_radio_button}</ChartHeader>
      	  	</div>
      	  	<div className='col3'>
      	  	  <span id='col3header'>Sprint End</span>
      	  	</div>       
      	</div>
      	<div id='chart-panel' style={{'display': 'flex'}}>
      	  <div className='col1'>
      	    <div id='col1body'>
      	      <div className='row'>Goal-A</div>
      	      <div className='row'>Goal-B</div>
      	      <div className='row'>Goal-C</div>
      	    </div>
      	  </div>
      	  <div className='col2'>
      	    <Chart selected_radio_button={this.state.selected_radio_button}>{this.state.selected_radio_button}</Chart>
      	  </div>
      	  <div className='col3'>
      	    <div id='col3body'>
      	      <div className='row'>March 20, 2017</div>
      	      <div className='row'>April 1, 2017</div>
      	      <div className='row'>November 6, 2017</div>
      	    </div>
      	  </div>
      	</div>
      	<div style={{'display': 'flex', 'alignItems': 'flex-end'}}>
          <div className='arrow-left'></div>
          <div id='chart-footer'>2017 March 17</div>
          <div className='arrow-right'></div>
        </div>
    	</div>
		);
	}
}

function handleClick(action, state, react, ext){
	var selected_radio_button = action.selected_radio_button;
	react.setState({
		selected_radio_button: selected_radio_button
	});
}