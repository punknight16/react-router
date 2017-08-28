import React, { Component } from 'react';

export default class Menu extends Component {
	constructor(props) {
    super(props);
    this.state = { 
    	selected_radio_button: 4
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
      	  <div id={(this.state.selected_radio_button==1) ? 'radio-button1-is-selected' : 'radio-button1'} className='radio-buttons' onClick={(event)=>this.handleClick(1)}>Year</div>
      	  <div id={(this.state.selected_radio_button==2) ? 'radio-button2-is-selected' : 'radio-button2'} className='radio-buttons' onClick={(event)=>this.handleClick(2)}>Quarter</div>
      	  <div id={(this.state.selected_radio_button==3) ? 'radio-button3-is-selected' : 'radio-button3'} className='radio-buttons' onClick={(event)=>this.handleClick(3)}>Month</div>
      	  <div id={(this.state.selected_radio_button==4) ? 'radio-button4-is-selected' : 'radio-button4'} className='radio-buttons' onClick={(event)=>this.handleClick(4)}>Week</div>
      	</div>
      	<div id='chart-header' style={{'display': 'flex', 'alignItems': 'flex-end'}}>
      	   	<div className='col1'>
      	    	<span id="col1header">Sprint Goal</span>
      	  	</div>
      	  	<div className='col2' style={{'display': 'flex'}}>
      	  	  <div className='chart-header-cell'>1</div>
      	  	  <div className='chart-header-cell'>2</div>
      	  	  <div className='chart-header-cell'>3</div>
      	  	  <div className='chart-header-cell'>4</div>
      	  	  <div className='chart-header-cell'>5</div>
      	  	  <div className='chart-header-cell'>6</div>
      	  	  <div className='chart-header-cell'>7</div>
      	  	  <div className='chart-header-cell'>8</div>
      	  	  <div className='chart-header-cell'>9</div>
      	  	  <div className='chart-header-cell'>10</div>
      	  	  <div className='chart-header-cell'>11</div>
      	  	  <div className='chart-header-cell'>12</div>
      	  	  <div className='chart-header-cell'>13</div>
      	  	  <div className='chart-header-cell'>14</div>
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
      	    <div id='chart' style={{'display': 'flex'}}>
      	      <div className='chart-box'>
      	        <div className='goal-A' ></div>
      	        <div className='goal-B' ></div>
      	        <div className='goal-C' ></div>
      	      </div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	      <div className='chart-box'></div>
      	    </div>
      	  </div>
      	  <div className='col3'>
      	    <div id='col3body'>
      	      <div className='row'>March 20, 2017</div>
      	      <div className='row'>April 1, 2017</div>
      	      <div className='row'>November 6, 2017</div>
      	    </div>
      	  </div>
      	</div>
      	<div id='chart-footer'>5 hours/day</div>
	
    	</div>
		);
	}
}

function handleClick(action, state, react, ext){
	var selected_radio_button = action.selected_radio_button;
	react.setState({selected_radio_button: selected_radio_button});
}