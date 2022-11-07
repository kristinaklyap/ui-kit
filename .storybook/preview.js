import '../src/styles/_theme.scss';
import '../src/index.css';

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},

    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                value: '#F6ECE0',
            },
            {
                name: 'dark',
                value: '#0E1B18',
            },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}