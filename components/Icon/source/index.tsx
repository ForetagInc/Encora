import * as React from 'react';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';

const RemixIcon = createIconSet(require('./assets/remixicon.glpyh.json'), 'RemixIcon', Font.loadAsync('remixicon/fonts/remixicon.ttf'));

export const Icon: React.FC = (props) => <RemixIcon { ...props } />;

Icon.displayName = 'Icon';

// Usage: <Icon name='check-fill' size={32} color='red' />
// TODO: Fix glyphs json file to match key (icon name) to value (unicode)
