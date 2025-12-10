import React from 'react';
import { motion } from 'framer-motion';
import { Experiment } from '../types';
import './ExperimentItem.css';

interface ExperimentItemProps {
  experiment: Experiment;
}

const ExperimentItem: React.FC<ExperimentItemProps> = ({ experiment }) => {
  const renderIcon = () => {
    switch (experiment.id) {
      case 'gt-sport':
        return (
          <div className="experiment-icon gt-sport-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" fill="#ff6b35"/>
              <path d="M8 16 L16 8 L24 16 L16 24 Z" fill="#fff"/>
            </svg>
          </div>
        );
      case 'yarnghetti':
        return (
          <div className="experiment-icon yarnghetti-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 6 Q16 2 26 6 Q30 16 26 26 Q16 30 6 26 Q2 16 6 6" fill="#4ecdc4"/>
              <circle cx="16" cy="16" r="4" fill="#fff"/>
            </svg>
          </div>
        );
      case 'emerald-hill':
        return (
          <div className="experiment-icon emerald-hill-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <polygon points="16,4 28,12 28,20 16,28 4,20 4,12" fill="#45b7d1"/>
              <circle cx="16" cy="16" r="6" fill="#fff"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className="experiment-icon default-icon">
            <div className="icon-placeholder"></div>
          </div>
        );
    }
  };

  const handleClick = () => {
    if (experiment.link) {
      window.open(experiment.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div 
      className="experiment-item" 
      onClick={handleClick}
      whileHover={{ 
        x: 8,
        transition: { duration: 0.3 }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${experiment.title} experiment`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <motion.div
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        {renderIcon()}
      </motion.div>
      <div className="experiment-content">
        <h3 className="experiment-title">{experiment.title}</h3>
        <p className="experiment-description">{experiment.description}</p>
      </div>
    </motion.div>
  );
};

export default ExperimentItem;