//Imports de libreria
import { Provider } from 'react-redux';

// Imports locales
import store from './src/store'; //import del index
import MainNavigator from './src/navigation/MainNavigator';
import { init } from './src/db';

export default function App() {
  
  init()
  .then(()=>console.log('DB init'))
  .catch((error)=>console.log('error al inicializarr',error.message))

  return (
    <Provider store={store}>

      <MainNavigator/>

    </Provider>
  );
}
