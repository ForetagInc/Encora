import * as React from 'react';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';

import { IconProps } from './icon.interface';

const RemixIcon = createIconSet(
	require('../assets/glyphs.json'),
	'RemixIcon',
	Font.loadAsync({ 'RemixIcon': require('remixicon/fonts/remixicon.ttf') })
);

export const Icon: React.FC<IconProps> = (props) => <RemixIcon { ...props } />;

Icon.displayName = 'Icon';
