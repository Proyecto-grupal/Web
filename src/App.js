import { Location } from './config/config'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from './Store/index';
//Debo cambiar el null por LoadingView
// import { RootComponent, LoadingView } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {Location}
      </PersistGate>
    </Provider>
  );
};

export default App
