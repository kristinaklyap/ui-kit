import {render} from '@testing-library/react';
import Title from './Title';

test('renders Title component with given heading level', () => {
    const headingLevel = 1;
    const text = 'Sample heading :)';

    const element = render(<Title headingLevel={headingLevel}>{text}</Title>);
    const renderedEl = element.container.firstChild;

    expect(renderedEl.tagName).toBe(`H${headingLevel}`)
    expect(renderedEl).not.toBeEmptyDOMElement()
});
