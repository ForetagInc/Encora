import * as React from 'react';
import Renderer from 'react-test-renderer';

import { Icon } from './icon';

describe('<Icon />', () => {
	it('renders correctly', () => {
		const tree = Renderer.create(<Icon name='home-line' />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
