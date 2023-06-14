const App = () => {
    return (
      React.createElement('div', null,
        React.createElement('h1', null, 'Hola Mundo'),
        React.createElement('p', null, 'Desde React.js'),
        React.createElement('p', null, 1 + 1)
      )
    );
  }
  
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
  );