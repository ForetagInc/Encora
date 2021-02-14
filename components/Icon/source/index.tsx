import * as React from 'react';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';

const RemixIcon = createIconSet(require('./assets/glpyhs.json'), 'RemixIcon', Font.loadAsync('remixicon/fonts/remixicon.ttf'));

export const Icon: React.FC = (props) => <RemixIcon { ...props } />;

Icon.displayName = 'Icon';
