import Main from './section/main/main';

const App = () => {
  const App = document.getElementById('app');
  App.innerHTML += Main();
};

export default App;
