import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import './ExpandedProjectView.css';

interface ExpandedProjectViewProps {
  project: Project;
  onBack: () => void;
}

const ExpandedProjectView: React.FC<ExpandedProjectViewProps> = ({ project, onBack }) => {
  const renderProjectContent = () => {
    switch (project.id) {
      case 'Power of Compounding':
        return (
          <div className="project-visual smiling-mind-visual">
            <div className="app-mockup">
              <div className="phone-frame">
                <div className="screen-content">
                  <div className="app-header">Smiling Mind</div>
                  <div className="meditation-cards">
                    <div className="card">Daily Meditation</div>
                    <div className="card">Sleep Stories</div>
                    <div className="card">Mindfulness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Lower Financial Pressure Later in Life':
        return (
          <div className="project-visual mass-visual">
            <div className="website-mockup">
              <div className="browser-frame">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <div className="website-content">
                  <div className="hero-section">
                    <h3>MASS Studio</h3>
                    <div className="floating-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Professional Fund Management':
        return (
          <div className="project-visual soccer-visual">
            <div className="soccer-field">
              <div className="field-lines">
                <div className="center-circle"></div>
                <div className="goal goal-left"></div>
                <div className="goal goal-right"></div>
              </div>
              <div className="players">
                <div className="player player-1"></div>
                <div className="player player-2"></div>
                <div className="player player-3"></div>
              </div>
              <div className="strategy-lines">
                <svg width="100%" height="100%">
                  <path d="M 50 100 Q 150 50 250 100" stroke="#fff" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  <path d="M 100 150 L 200 50" stroke="#fff" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        );
      case 'Diversification Reduces Risk':
        return (
          <div className="project-visual fenton-visual">
            <div className="music-scene">
              <div className="instruments">
                <div className="drum-kit"></div>
                <div className="guitar"></div>
                <div className="keyboard"></div>
              </div>
              <div className="stage-lights">
                <div className="light light-1"></div>
                <div className="light light-2"></div>
                <div className="light light-3"></div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="placeholder-visual">Project Visual</div>;
    }
  };

  return (
    <div className={`expanded-view ${project.id}-expanded`}>
      <motion.button 
        className="back-arrow" 
        onClick={onBack} 
        aria-label="Back to main page"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z"/>
        </svg>
      </motion.button>

      <div className="expanded-content">
        <motion.div 
          className="project-info"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            layoutId={`card-${project.id}`}
            style={{ 
              backgroundColor: project.backgroundColor,
              padding: "2rem",
              borderRadius: "0px",
              marginBottom: "2rem"
            }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <h1 className="project-title">{project.expandedContent.description.split('.')[0]}</h1>
          </motion.div>
          
          <motion.p 
            className="project-description"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {project.expandedContent.description}
          </motion.p>
          
          <motion.div 
            className="technologies-section"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3>Technologies used</h3>
            <div className="tech-list">
              {project.expandedContent.technologies.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="tech-tag"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {project.expandedContent.links && project.expandedContent.links.length > 0 && (
            <motion.div 
              className="links-section"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {project.expandedContent.links.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {renderProjectContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default ExpandedProjectView;