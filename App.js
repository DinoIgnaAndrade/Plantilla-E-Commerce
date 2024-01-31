//Imports de libreria
import { Provider } from 'react-redux';

// Imports locales
import store from './src/store'; //import del index
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {

  return (
    <Provider store={store}>

      <MainNavigator/>

    </Provider>
  );
}
