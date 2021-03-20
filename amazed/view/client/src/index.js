import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import Routing from './components/Routing';


ReactDOM.render(
    <Provider store={Store}>
        <Routing/>
    </Provider>, document.getElementById('root')
)