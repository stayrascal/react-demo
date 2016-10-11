import React from 'react';
import { createDevtools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

// createDevtools takes a monitor and produces a DevTools component
export default createDevtools(
  <DockMonitor  toggleVisibilitykey="ctrl-h"
                changePositionKey="ctrl-q"
                changeMonitorKey="ctrl-m">
    <LogMonitor theme="nicinabox" />
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
);
