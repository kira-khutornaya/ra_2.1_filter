import React from 'react';
import PropTypes from 'prop-types';

function ProjectList({ projects }) {
  return (
    <div className="projects">
      {
        projects.map((el) => (
          <img
            className="projects__item"
            src={el.img}
            alt=""
            key={el.id}
          />
        ))
      }
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProjectList;
