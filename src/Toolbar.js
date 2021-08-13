/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      <ul className="toolbar__list">
        {
          filters.map((item) => {
            const selectedMark = selected === item ? 'toolbar-list__item toolbar-list-item__selected' : 'toolbar-list__item';

            return (
              <li
                className={selectedMark}
                onClick={(e) => onSelectFilter(e)}
                key={item}
              >
                {item}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
