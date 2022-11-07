import {prettyDOM, render} from '@testing-library/react';
import Button from './Button';

test('renders Button component with given ars', () => {
    const type = 'button--primary';
    const mode = 'button--default';
    const size = 'button--medium';
    const shape = 'square';
    const label = 'My button';

    const myButton = render(<Button type={type} label={label} shape={shape} size={size} mode={mode}/>);
    const renderedEl = myButton.container.firstChild;
    const renderedElClasses = Array.from(renderedEl.classList)

    const buttonMode = renderedEl.getAttribute('data-mode');
    const buttonContent = renderedEl.textContent;

    expect(buttonContent).toBe(label)
    expect(renderedElClasses.includes(type)).toBe(true)
    expect(renderedElClasses.includes(size)).toBe(true)
    expect(renderedElClasses.includes(shape)).toBe(true)
    expect(buttonMode).toBe(mode)
});
