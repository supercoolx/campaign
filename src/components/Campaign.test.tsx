import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Campaign from './Campaign';

describe('Campaign component', () => {

    test('should render correctly', () => { 
        const { getByText } = render(
            <Provider store={store}>
                <Campaign />
            </Provider>
        );

        expect(getByText('There are no users.')).toBeInTheDocument();
    });
});