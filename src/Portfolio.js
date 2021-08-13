import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio({ data, filters }) {
  const [{ selected, filterData }, setSelected] = useState({ selected: 'All', filterData: data });

  const onSelectFilter = (e) => {
    setSelected(() => {
      const filter = e.target.textContent;

      return {
        selected: filter,
        filterData: data.filter((item) => filter === 'All' || filter === item.category),
      };
    });
  };

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={filterData} />
    </div>
  );
}

Portfolio.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Portfolio;
