import React from 'react';
import { experiments } from '../data/experiments';
import ExperimentItem from './ExperimentItem';
import './ExperimentsList.css';

const ExperimentsList: React.FC = () => {
  return (
    <div className="experiments-list">
      {experiments.map((experiment) => (
        <ExperimentItem
          key={experiment.id}
          experiment={experiment}
        />
      ))}
    </div>
  );
};

export default ExperimentsList;