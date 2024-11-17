'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MainPanel } from './MainPanel';
import { useDevTools } from '../../hooks/useDevTools';

export function DevDashboard() {
  const [activePanel, setActivePanel] = useState('components');
  const { metrics, insights } = useDevTools();

  return (
    <div className="flex h-screen">
      <Sidebar
        activePanel={activePanel}
        onPanelChange={setActivePanel}
      />
      <MainPanel
        activePanel={activePanel}
        metrics={metrics}
        insights={insights}
      />
    </div>
  );
}