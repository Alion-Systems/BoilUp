'use client';

import { useEffect } from 'react';
import { LineChart } from './LineChart';
import { MetricsGrid } from './MetricsGrid';
import { usePerformance } from '../hooks/usePerformance';

export function PerformanceMonitor() {
  const { metrics, realtime } = usePerformance();

  return (
    <div className="space-y-6 p-4">
      <MetricsGrid
        metrics={[
          {
            label: 'Build Time',
            value: metrics.buildTime,
            trend: metrics.buildTimeTrend
          },
          {
            label: 'Bundle Size',
            value: metrics.bundleSize,
            trend: metrics.bundleSizeTrend
          },
          {
            label: 'Memory Usage',
            value: metrics.memoryUsage,
            trend: metrics.memoryUsageTrend
          }
        ]}
      />
      
      <LineChart
        data={realtime.data}
        title="Real-time Performance"
      />
    </div>
  );
}