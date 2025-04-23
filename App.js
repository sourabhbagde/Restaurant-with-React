// // creating a header with React.
// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'This is React Heading',
// );
// // creating a root with ReactDOM.
// // how do you know which is root? - by indulging to 'root' in HTML tags in index.html by getElementById
// const root = ReactDOM.createRoot(document.getElementById('root'));
// // rendering the created header inside the root
// root.render(heading);

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
