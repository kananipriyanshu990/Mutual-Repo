import { useState, useCallback } from 'react';
import { AnimationState, ViewState } from '../types';

export const useAnimationController = () => {
  const [animationState, setAnimationState] = useState<AnimationState>('idle');
  const [viewState, setViewState] = useState<ViewState>('main');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const isAnimating = useCallback(() => {
    return animationState !== 'idle';
  }, [animationState]);

  const preventInteraction = useCallback(() => {
    return isAnimating();
  }, [isAnimating]);

  const expandSticker = useCallback(async (stickerId: string): Promise<void> => {
    if (isAnimating()) return;

    setAnimationState('expanding');
    setActiveProject(stickerId);

    // Wait for Framer Motion animation to complete (450ms + buffer)
    await new Promise(resolve => setTimeout(resolve, 500));

    setViewState('expanded');
    setAnimationState('idle');
  }, [isAnimating]);

  const collapseToMain = useCallback(async (): Promise<void> => {
    if (isAnimating()) return;

    setAnimationState('collapsing');

    // Wait for Framer Motion animation to complete
    await new Promise(resolve => setTimeout(resolve, 500));

    setViewState('main');
    setActiveProject(null);
    setAnimationState('idle');
  }, [isAnimating, activeProject]);

  return {
    animationState,
    viewState,
    activeProject,
    isAnimating,
    preventInteraction,
    expandSticker,
    collapseToMain
  };
};