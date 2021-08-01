const App = () => {
  return React.createElement('h1', {className: 'AppHeader'}, 'Hello World');
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
document.getElementById('preloader').remove();
