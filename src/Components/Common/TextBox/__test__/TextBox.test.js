import React from 'react';
import ReactDOM from 'react-dom';
import TextBox from '..';

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import renderer from 'react-test-renderer';


it("rednder without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TextBox />,div)
});

it("Match Snapshot - TextBox", () => {
    const tree = renderer.create(<TextBox />).toJSON();
    expect(tree).toMatchSnapshot();
});






