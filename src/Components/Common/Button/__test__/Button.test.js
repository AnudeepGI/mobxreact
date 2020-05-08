import React from 'react';
import ReactDOM from 'react-dom';
import Button from '..';

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import renderer from 'react-test-renderer';


it("rednder without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button/>,div)
});

it("rednder button", () => {
    const title = "Click"
    const { container } = render(<Button title={title} />)
    const button = container.querySelector('button');
    expect(button).toHaveTextContent(title);
});

it("Match Snapshot - Button", () => {
    const tree = renderer.create(<Button title="Click"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});






