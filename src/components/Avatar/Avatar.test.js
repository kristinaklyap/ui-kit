import {render, prettyDOM} from '@testing-library/react';
import Avatar from './Avatar';

test('renders Avatar component with given ars', () => {
    const emoji = 'ghost';
    const type = 'square';
    const size = 'small';

    const myAvatar = render(<Avatar emoji={emoji} type={type} size={size}/>);
    const renderedEl = myAvatar.container.firstChild;
    const renderedElClasses = Array.from(renderedEl.classList)

    const emojiContainer = myAvatar.container.firstElementChild.firstChild;

    // console.log(prettyDOM(renderedEl))
    expect(renderedElClasses.includes(type)).toBe(true)
    expect(renderedElClasses.includes(size)).toBe(true)
    expect(renderedEl).not.toBeEmptyDOMElement()
    expect(emojiContainer).not.toBeEmptyDOMElement()
});
