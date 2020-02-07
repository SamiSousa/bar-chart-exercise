import React, {Children, useState} from 'react';

const filterObjectList = (list, filterValue) => {
  if (!filterValue || filterValue.length <= 0) {
    return list;
  }

  let filteredList = [];
  list.forEach(({name, value}) => name.toUpperCase().includes(filterValue.toUpperCase()) && filteredList.push({name, value}));

  return filteredList;
};

export const FilterPipe = ({data, children}) => {
  const [filter, setFilter] = useState('');
  const filteredData = filterObjectList(data, filter);

  return (
    <React.Fragment>
      <input
        type='text'
        name='filter'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className='filter-input'
      />
      {Children.toArray(children).map((Child, index) => <Child.type key={index} data={filteredData} {...Child.props} />)}
    </React.Fragment>
  );
};