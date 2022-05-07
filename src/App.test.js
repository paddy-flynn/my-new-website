import {render, screen} from '@testing-library/react';
import App from './App';

describe('rendering App component', () => {
    it('contains my name', () => {
        render(<App/>);
        const h1Element = screen.getByTestId('my-name')
        expect(h1Element).toBeInTheDocument()
    })

    it('contains a link to linkedIn', () => {
        render(<App/>);
        const linkedInElement = screen.getByTestId('linkedin-link')
        expect(linkedInElement).toBeInTheDocument()
        expect(linkedInElement).toHaveAttribute('href', 'https://www.linkedin.com/in/patrick-flynn-514a1689')
    })

    it('contains a link to github', () => {
        render(<App/>);
        const linkedInElement = screen.getByTestId('github-link')
        expect(linkedInElement).toBeInTheDocument()
        expect(linkedInElement).toHaveAttribute('href', 'https://github.com/paddy-flynn')
    })
});
