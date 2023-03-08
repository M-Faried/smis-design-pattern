import { Provider } from 'react-redux';
import store from '../redux/store';

const injectAppState = (WrappedComponent) => {
    return (props) => {
        return (
            <Provider store={store}>
                <WrappedComponent {...props} />
            </Provider>
        )
    }
}

export default injectAppState;
