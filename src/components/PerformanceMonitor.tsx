import React, { useEffect, useState } from 'react';

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState({
    fps: 0,
    memory: 0,
    loadTime: 0,
  });

  useEffect(() => {
    // Mesure du temps de chargement initial
    const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;

    // Mesure FPS
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      const now = performance.now();
      frameCount++;
      
      if (now - lastTime >= 1000) {
        setMetrics(prev => ({
          ...prev,
          fps: Math.round(frameCount * 1000 / (now - lastTime)),
          memory: Math.round(performance?.memory?.usedJSHeapSize / 1024 / 1024) || 0,
        }));
        frameCount = 0;
        lastTime = now;
      }
      
      requestAnimationFrame(measureFPS);
    };

    requestAnimationFrame(measureFPS);

    setMetrics(prev => ({
      ...prev,
      loadTime,
    }));
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 p-4 rounded-lg text-xs font-mono z-[9999]">
      <div className="grid gap-2">
        <div className="flex justify-between gap-4">
          <span>FPS:</span>
          <span className={metrics.fps < 30 ? 'text-red-400' : 'text-green-400'}>
            {metrics.fps}
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Mémoire:</span>
          <span className={metrics.memory > 100 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.memory} MB
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Temps de chargement:</span>
          <span className={metrics.loadTime > 1000 ? 'text-yellow-400' : 'text-green-400'}>
            {metrics.loadTime}ms
          </span>
        </div>
      </div>
    </div>
  );
};
