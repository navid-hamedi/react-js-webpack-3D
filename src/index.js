import React from 'react';
import { createRoot } from 'react-dom/client';
import Link from './Link';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Link />); 