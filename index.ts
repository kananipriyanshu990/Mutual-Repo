// Type definitions for the portfolio application
export interface Project {
  id: 'smiling-mind' | 'mass-studio' | 'soccer-tool' | 'fenton';
  title: string;
  backgroundColor: string;
  logo: string;
  expandedContent: {
    description: string;
    technologies: string[];
    images: string[];
    links?: { text: string; url: string }[];
  };
}

export interface Experiment {
  id: string;
  title: string;
  year: number;
  description: string;
  icon: string;
  link?: string;
}

export interface StickerCard {
  id: string;
  title: string;
  backgroundColor: string;
  logo: string;
  content: ProjectContent;
  position: { x: number; y: number };
}

export interface ProjectContent {
  title: string;
  description: string;
  technologies: string[];
  visualAssets: string[];
  externalLinks?: string[];
}

export interface AnimationController {
  expandSticker(stickerId: string): Promise<void>;
  collapseToMain(): Promise<void>;
  isAnimating(): boolean;
  preventInteraction(): void;
}

export type ViewState = 'main' | 'expanded';
export type AnimationState = 'idle' | 'expanding' | 'collapsing';