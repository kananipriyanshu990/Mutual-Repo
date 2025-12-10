import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import './StickerCard.css';

interface StickerCardProps {
  project: Project;
  onClick: (projectId: string) => void;
}

const StickerCard: React.FC<StickerCardProps> = ({ project, onClick }) => {
  const handleClick = () => {
    onClick(project.id);
  };

  const renderLogo = () => {
    switch (project.id) {
      case 'smiling-mind':
        return (
          <div className="logo smiling-mind-logo">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
              <text x="60" y="35" textAnchor="middle" fill="#000" fontSize="14" fontWeight="bold">
                SMILING MIND
              </text>
            </svg>
          </div>
        );
      case 'mass-studio':
        return (
          <div className="logo mass-logo">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="30" fill="#E2CB39" opacity="0.8"/>
              <text x="40" y="45" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">
                MASS
              </text>
            </svg>
          </div>
        );
      case 'soccer-tool':
        return (
          <div className="logo soccer-logo">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <polygon points="30,5 35,20 50,20 38,30 42,45 30,37 18,45 22,30 10,20 25,20" fill="#ff6b35"/>
            </svg>
          </div>
        );
      case 'fenton':
        return (
          <div className="logo fenton-logo">
            <text x="0" y="0" fill="#000" fontSize="24" fontWeight="bold" fontStyle="italic">
              FENTON
            </text>
          </div>
        );
      default:
        return <div className="logo-placeholder">{project.title}</div>;
    }
  };

  return (
    <motion.div 
      layoutId={`card-${project.id}`}
      className={`sticker-card ${project.id}`}
      style={{ backgroundColor: project.backgroundColor }}
      onClick={handleClick}
      data-project-id={project.id}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} project details`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="sticker-content">
        {renderLogo()}
      </div>
    </motion.div>
  );
};


export default StickerCard;
