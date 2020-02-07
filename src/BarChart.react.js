import React, {Component} from 'react';

import './BarChart.css';

// Find the largest value in the data
/*
const maxValueOfDict = (dict) => {
  let max = undefined;
  Object.keys(dict).forEach(key => {
    if (max === undefined) {
      max = dict[key];
    } else if (dict[key] > max) {
      max = dict[key];
    }
  });

  return max ? max : 1;
};
*/
const maxValueOfListOfDicts = list => {
  let max = undefined;
  list.forEach(({value}) => {
    if (max === undefined) {
      max = value;
    }
    if (value > max) {
      max = value;
    }
  });

  return max ? max : 1;
};

const Bar = ({name, value, largestValue}) => {
  // Don't bother if dividing by zero
  if (largestValue === 0) {
    return null;
  }

  // Calculate the width of the bar
  const percentWidth = (70*value/largestValue)

  return (
      <div className='bar-chart'>
        <div className='bar-name'>
          {name}
        </div>
        <div
          className='bar-value'
          style={{width: `${percentWidth}%`}}
        >
          <div className='bar-innervalue'>{value}</div>
        </div>
      </div>
    );
};

class BarChart extends Component {
  constructor(props) {
    super(props);

    const {data} = props;

    this.state = {
      largestValue: maxValueOfListOfDicts(data),
    }
  }

  componentDidUpdate(_, prevState) {
    // Update largestValue if max is different on new props
    const newLargest = maxValueOfListOfDicts(this.props.data);

    if (prevState.largestValue !== newLargest) {
      this.setState({
        largestValue: newLargest,
      });
    }
  }

  render() {
    const {data} = this.props;
    const {largestValue} = this.state;

    return (
      <React.Fragment>

        {data.map(({name, value}) => 
          <Bar
            key={name}
            name={name}
            value={value}
            largestValue={largestValue}
          />
        )}

      </React.Fragment>
    );
  }
}

export default BarChart;