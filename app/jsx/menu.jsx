import React, { Component } from 'react';
import Chart from './chart.jsx';
import ChartHeader from './chart-head.jsx';

export default class Menu extends Component {
	constructor(props) {
    super(props);
    var currentTime = new Date();
    var current_year = currentTime.getFullYear();
    var current_month = currentTime.getMonth();
    var current_day = currentTime.getDate();
    this.state = { 
    	selected_radio_button: 'week',
      initial_date: current_day,
      footer_date: [current_year, current_month, current_day]
    };
  }
	handleClick(selected_radio_button){
		var action = {selected_radio_button: selected_radio_button};
		var react = {setState: this.setState.bind(this)};
		handleClick(action, {}, react, {});
	}
  nextInitialDate(event){
    var state = this.state;
    var react = {setState: this.setState.bind(this)};
    nextInitialDate({}, state, react, {});
  }
  prevInitialDate(event){
    var state = this.state;
    var react = {setState: this.setState.bind(this)};
    prevInitialDate({}, state, react, {});
  }
  renderFooter(){
    switch(this.state.selected_radio_button){
      case 'week':
        return <div id='chart-footer'>{this.state.footer_date[0]} {displayMonth(this.state.footer_date[1])}</div>
        break;
      case 'quarter':
        return <div id='chart-footer'>{this.state.footer_date[0]} {displayQuarter(this.state.footer_date[1])}</div>
        break;
      case 'year':
        return <div id='chart-footer'>{this.state.footer_date[0]}</div>
        break;
      default:
        return <div>Error</div> 
    }
  }
	render(){
		return (
			<div id='main-panel' style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center'}}>
      	
      	<div id='radio-buttons-panel' style={{'display': 'flex'}}>
      	  <div id={(this.state.selected_radio_button=='year') ? 'radio-button1-is-selected' : 'radio-button1'} className='radio-buttons' onClick={(event)=>this.handleClick('year')}>Quarters</div>
      	  <div id={(this.state.selected_radio_button=='quarter') ? 'radio-button2-is-selected' : 'radio-button2'} className='radio-buttons' onClick={(event)=>this.handleClick('quarter')}>Weeks</div>
      	  <div id={(this.state.selected_radio_button=='week') ? 'radio-button3-is-selected' : 'radio-button3'} className='radio-buttons' onClick={(event)=>this.handleClick('week')}>Days</div>
      	</div>
      	<div id='chart-header' style={{'display': 'flex', 'alignItems': 'flex-end'}}>
      	   	<div className='col1'>
      	    	<span id="col1header">Sprint Goal</span>
      	  	</div>
      	  	<div className='col2' style={{'display': 'flex'}}>
      	  	  <ChartHeader parent={this}>{this.state.selected_radio_button}</ChartHeader>
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
      	    <Chart initial_date={this.state.footer_date[2]} selected_radio_button={this.state.selected_radio_button}>{this.state.selected_radio_button}</Chart>
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
          <div className='arrow-left' onClick={(event)=>{this.prevInitialDate(event)}}></div>
          {this.renderFooter()}
          <div className='arrow-right' onClick={(event)=>{this.nextInitialDate(event)}}></div>
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

function nextInitialDate(action, state, react, ext){
  var footer_date = state.footer_date;
  switch(state.selected_radio_button){
    case 'week':
      var day_expression = 7;
      var date = new Date(footer_date[0], footer_date[1], footer_date[2]);
      var newdate = new Date(date.setTime(date.getTime()+day_expression*86400000));
      footer_date = [newdate.getFullYear(), newdate.getMonth(), newdate.getDate()];
      break;
    case 'quarter':
      footer_date[1] += 3;
      if(footer_date[1]>11){
        footer_date[1] -=12;
        footer_date[0] +=1;
      }
      break;
    case 'year':
      footer_date[0] += 1;
      break;
    default:
      day_expression =0;
  }
  react.setState({footer_date: footer_date});
}

function prevInitialDate(action, state, react, ext){
  var footer_date = state.footer_date;
  switch(state.selected_radio_button){
    case 'week':
      var day_expression = -7;
      var date = new Date(footer_date[0], footer_date[1], footer_date[2]);
      var newdate = new Date(date.setTime(date.getTime()+day_expression*86400000));
      footer_date = [newdate.getFullYear(), newdate.getMonth(), newdate.getDate()];
      break;
    case 'quarter':
      footer_date[1] -= 3;
      if(footer_date[1]<0){
        footer_date[1] +=12;
        footer_date[0] -=1;
      }
      break;
    case 'year':
      footer_date[0] -= 1;
      break;
    default:
      day_expression =0;
  }
  react.setState({footer_date: footer_date});
}

function displayMonth(month){
    switch(month){
      case 0:
        return 'January';
        break;
      case 1:
        return 'February';
        break;
      case 2:
        return 'March';
        break;
      case 3:
        return 'April';
        break;
      case 4:
        return 'May';
        break;
      case 5:
        return 'June';
        break;
      case 6:
        return 'July';
        break;
      case 7: 
        return 'August';
        break;
      case 8:
        return 'September';
        break;
      case 9:
        return 'October';
        break;
      case 10:
        return 'November';
        break;
      case 11:
        return 'December';
        break;
      default:
        return 'error';
    }
  }

  function displayQuarter(month){
    switch(month){
      case 0:
        return 'Quarter 1';
        break;
      case 1:
        return 'Quarter 1';
        break;
      case 2:
        return 'Quarter 1';
        break;
      case 3:
        return 'Quarter 2';
        break;
      case 4:
        return 'Quarter 2';
        break;
      case 5:
        return 'Quarter 2';
        break;
      case 6:
        return 'Quarter 3';
        break;
      case 7: 
        return 'Quarter 3';
        break;
      case 8:
        return 'Quarter 3';
        break;
      case 9:
        return 'Quarter 4';
        break;
      case 10:
        return 'Quarter 4';
        break;
      case 11:
        return 'Quarter 4';
        break;
      default:
        return 'error';
    }
  }