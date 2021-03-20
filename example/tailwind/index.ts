/* eslint-disable no-extra-parens */

import * as React from 'react';
import * as ReactNative from 'react-native';
// import { create as _create } from './create';
import { createHook as __createHook } from './hook';
// import { IScreenConfig, IStyles } from './interfaces';

const createHook = __createHook();

import defaultStyles from './styles.json';
import defaultWebStyles from './web.json';
import defaultScreens from './screens.json';
import defaultSpaces from './spaces.json';

import { TElementState } from './interfaces';

// const { getColor } = _create(defaultStyles, {}, {});

export const useTailwind = () => {
	const _useTailwind = createHook(defaultStyles, defaultWebStyles, defaultScreens, defaultSpaces);

	return _useTailwind();
}

export { Div } from './components/Div';

// export { getColor };
// export const create = (tailwindStyles: Object) => _create((tailwindStyles as IStyles), (defaultWebStyles as IStyles), []);
// export const createHook = (tailwindStyles: Object, webStyles: Object, screensConfig: IScreenConfig) => _createHook((tailwindStyles as IStyles), (webStyles as IStyles), screensConfig);
