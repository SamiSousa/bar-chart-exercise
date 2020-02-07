import React, {Children} from 'react';

const sortObjectList = list => list.sort((a, b) => b.value - a.value);

export const DataSorterPipe = ({data, children}) => {
  const sortedData = sortObjectList(data);
  return (
    <React.Fragment>
      {Children.toArray(children).map((Child, index) => <Child.type key={index} data={sortedData} {...Child.props} />)}
    </React.Fragment>
  );
};