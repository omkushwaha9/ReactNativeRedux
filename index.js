// IndexFile
import {AppRegistry} from 'react-native';
import App from './App';
//import Product from './components/redux/Product';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import Store from './components/redux/Store';
const AppRedux = ()=> (
    <Provider store={Store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
