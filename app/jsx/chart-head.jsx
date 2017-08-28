import React, { Component } from 'react';

export default class ChartHead extends Component {
	constructor(props) {
    super(props);
    this.state = { 
    	test: 0
    };
  }

  displayWeekRows(numrows){
    var rows = [];
    for (var i=0; i < numrows; i++) {
      rows.push(<div key={i} className='week-header-cell'>{i+1}</div>);
    }
    return (
      <div id='chart-header' style={{'display': 'flex'}}>
        {rows}
      </div>
    );
  }

  displayQuarterRows(numrows){
    var rows = [];
    for (var i=0; i < numrows; i++) {
      rows.push(<div key={i} className='month-header-cell'>{i+1}</div>);
    }
    return (
      <div id='chart-header' style={{'display': 'flex'}}>
        {rows}
      </div>
    );
  }

  displayYearRows(numrows){
    var rows = [];
    for (var i=0; i < numrows; i++) {
      rows.push(<div key={i} className='year-header-cell'>{i+1}</div>);
    }
    return (
      <div id='chart-header' style={{'display': 'flex'}}>
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
