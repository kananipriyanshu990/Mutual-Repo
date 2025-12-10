import React from 'react';
import { projects } from '../data/projects';
import StickerCard from './StickerCard';
import './StickerGrid.css';



interface StickerGridProps {
  onStickerClick: (projectId: string) => void;
  isAnimating?: boolean;
}

const StickerGrid: React.FC<StickerGridProps> = ({ onStickerClick, isAnimating = false }) => {
  return (
    <div className={`sticker-grid ${isAnimating ? 'animating' : ''}`}>
      {projects.map((project) => (
        <StickerCard
          key={project.id}
          project={project}
          onClick={onStickerClick}
        />
      ))}
    </div>
  );
};

export default StickerGrid;