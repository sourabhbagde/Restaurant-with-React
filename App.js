import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading1' }, 'This is h1 tag'),
    React.createElement('h2', { id: 'heading2' }, 'This is h2 tag'),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
