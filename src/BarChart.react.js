import React, {Component} from 'react';

import './BarChart.css';

// Find the largest value in the data
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

const Bar = ({name, value, largestValue}) => {
  // Don't bother if dividing by zero
  if (largestValue === 0) {
    return null;
  }

  // Calculate the width of the 
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
      largestValue: maxValueOfDict(data),
      filter: '',
    }
  }

  componentDidUpdate(_, prevState) {
    // Update largestValue if max is different on new props
    const newLargest = maxValueOfDict(this.props.data);

    if (prevState.largestValue !== newLargest) {
      this.setState({
        largestValue: newLargest,
      });
    }
  }

  updateFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const {data} = this.props;
    const {
      largestValue,
      filter,
    } = this.state;

    return (
      <React.Fragment>
        <div>
          Bar Chart
        </div>

        <input
          type='text'
          name='filter'
          value={filter}
          onChange={this.updateFilter}
          className='filter-input'
        />

        {Object.keys(data).map((name) => {

          if (filter && filter.length > 0) {
            if (!name.includes(filter)) {
              return null;
            }
          }

          return <Bar
            name={name}
            value={data[name]}
            largestValue={largestValue}
          />
        })}
      </React.Fragment>
    );
  }
}

export default BarChart;