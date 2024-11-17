'use client';

import { useState } from 'react';
import { ComponentList } from './ComponentList';
import { ComponentPreview } from './ComponentPreview';
import { ComponentProps } from './ComponentProps';
import { ComponentCode } from './ComponentCode';
import { useComponents } from '../hooks/useComponents';

export function ComponentExplorer() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const { components, updateComponent } = useComponents();

  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      <div className="col-span-3 border-r">
        <ComponentList
          components={components}
          selectedComponent={selectedComponent}
          onSelect={setSelectedComponent}
        />
      </div>
      
      <div className="col-span-5">
        <ComponentPreview
          component={selectedComponent ? components[selectedComponent] : null}
        />
        <ComponentProps
          component={selectedComponent ? components[selectedComponent] : null}
          onChange={updateComponent}
        />
      </div>
      
      <div className="col-span-4">
        <ComponentCode
          component={selectedComponent ? components[selectedComponent] : null}
        />
      </div>
    </div>
  );
}