import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserRow from './UserRow';

describe('UserRow component', () => {
    const user = {
        "userID": "4f4d5462-4a9f-483e-b620-9df9c13ec840",
        "displayName": "Jone",
        "picture": "https://assets-17app.akamaized.net/THUMBNAIL_525BEE6E-94B5-4C7F-AB47-1A6F9735EE82.jpg",
        "score": 157000
    };
    
    test('should render correctly', () => { 
        const { container } = render(<UserRow campaign={user} />);

        expect(container).toBeInTheDocument();

        const image = container.querySelector('img');
        expect(image?.src).toBe(user.picture);
        const span = container.querySelector('span');
        expect(span?.innerHTML).toBe('0pt');
    });
});