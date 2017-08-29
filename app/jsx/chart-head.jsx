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
    var initial_date = this.props.parent.state.footer_date[2];
    console.log(this.props.parent.state.footer_date[1]);
    var end_date = getMonthEnd(this.props.parent.state.footer_date[1], this.props.parent.state.footer_date[0]);
    
    for (var i=initial_date; i < numrows+initial_date; i++) {
      var j = i+1;
      j = (j>end_date) ? j-end_date : j;
      rows.push(<div key={i} className='week-header-cell'>{j}</div>);
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

function getMonthEnd(month, year){
    switch(month){
      case 0:
        return 31;
        break;
      case 1:
        if(year%4===0){
          if(year%100===0){
            if(year%400===0){
              return 29;
              break;
            } else {
              return 28;
              break;
            }  
          } else {
            return 29
            break;
          }
        } else {
          return 28;
          break;
        }
      case 2:
        return 31;
        break;
      case 3:
        return 30;
        break;
      case 4:
        return 31;
        break;
      case 5:
        return 30;
        break;
      case 6:
        return 31;
        break;
      case 7: 
        return 31;
        break;
      case 8:
        return 30;
        break;
      case 9:
        return 31;
        break;
      case 10:
        return 30;
        break;
      case 11:
        return 31;
        break;
      default:
        return 'error';
    }
  }
