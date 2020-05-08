import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';

import ItemList from '../ItemList'


it("rednder without crashing", () => {
    const { container } = render(<ItemList list={[{
        value : 'FirstVal1',
        id : 123,
        complete : false
    }]} onChange={(e) => {}} />)
    const li = container.querySelector('li');
    expect(li).toHaveTextContent("FirstVal1");
});

it("Match Snapshot - ItemList", () => {
   const tree = renderer.create(<ItemList list={[{
        value : 'FirstVal1',
        id : 123,
        complete : false
    }]} />).toJSON();
    expect(tree).toMatchSnapshot();
});