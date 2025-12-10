import React, { useState } from 'react';
import { ViewState } from '../types';
import Header from './Header';
import './MainContainer.css';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const [viewState, setViewState] = useState<ViewState>('main');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div className="main-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainContainer;