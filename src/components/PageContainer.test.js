import React from 'react';
import { shallow } from 'enzyme';
import PageContainer from './PageContainer';

const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

it('renders PageContainer component  ', () => {
    
    const container = shallow(
        <PageContainer/>
    );
    const overlay1 = container.find('.editorContainer');
    const overlay2 = container.find('.styleButton');

    expect(overlay1).toHaveLength(1);
    expect(overlay2).toHaveLength(3);
    
});

