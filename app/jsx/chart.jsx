import React, { Component } from 'react';
import ChartCell from './chart-cell.jsx';

export default class Chart extends Component {
	constructor(props) {
    super(props);
    this.state = { 
    	test: 0
    };
  }

  displayWeekRows(numrows){
    var rows = [];
    for (var i=0; i < numrows; i++) {
      rows.push(<div key={i} className='week-chart-box'>
        <ChartCell goal_style='goal-A' selected_radio_button={this.props.selected_radio_button} />
        <ChartCell goal_style='goal-B' selected_radio_button={this.props.selected_radio_button} />
        <ChartCell goal_style='goal-C' selected_radio_button={this.props.selected_radio_button} />
      </div>);
    }
    return (
      <div id='chart' style={{'display': 'flex'}}>
        {rows}
      </div>
    );
  }

  displayQuarterRows(numrows){
    var rows = [];
    for (var i=0; i < numrows; i++) {
      rows.push(<div key={i} className='quarter-chart-box'>
        <ChartCell goal_style='goal-A' selected_radio_button={this.props.selected_radio_button} />
        <ChartCell goal_style='goal-B' selected_radio_button={this.props.selected_radio_button} />
        <ChartCell goal_style='goal-C' selected_radio_button={this.props.selected_radio_button} />
      </div>);
    }
    return (
      <div id='chart' style={{'display': 'flex'}}>
        {rows}
      </div>
    );
  }

  displayYearRows(numrows){
    var rows = [];
    for (var i=0; i < numrows; i++) {
      rows.push(<div key={i} className='year-chart-box'>
        <ChartCell goal_style='goal-A' selected_radio_button={this.props.selected_radio_button} />
        <ChartCell goal_style='goal-B' selected_radio_button={this.props.selected_radio_button} />
        <ChartCell goal_style='goal-C' selected_radio_button={this.props.selected_radio_button} />
      </div>);
    }
    return (
      <div id='chart' style={{'display': 'flex'}}>
        {rows}
      </div>
    );
  }

	render(){
    switch(this.props.children){
      case 'year':
        return (<div>{this.displayYearRows(4)}</div>);
        break;
      case 'quarter':
        return (<div>{this.displayQuarterRows(13)}</div>);
        break;
      case 'week':
        return (<div>{this.displayWeekRows(14)}</div>);
        break;
      default: 
        return (<div>{this.displayWeekRows(14)}</div>); 
    }
    
	}
}
