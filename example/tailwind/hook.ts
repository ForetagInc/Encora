/* eslint-disable dot-location */
/* eslint-disable complexity */

import * as React from 'react';
import * as ReactNative from 'react-native';
import { create } from './create';
import { IScreenConfig, IStyles } from './interfaces';

export const createHook = () => {
	return (tailwindStyles: IStyles, webStyles: IStyles, screensConfig: IScreenConfig, spacesConfig: IStyles) => {

		if (!React || !React.useMemo)
			throw new Error('Unsupported react version, useMemo hook not found')

		if (!ReactNative || !ReactNative.useWindowDimensions)
			throw new Error('Unsupported react-native version, useWindowDimensions hook not found');

		return () => {
			const { width } = ReactNative.useWindowDimensions();

			const breakPointsConfig = Object.keys(screensConfig)
				.sort((a, b) => screensConfig[a]!.min - screensConfig[b]!.min)
				.map(key => {
					const breakpoint: { min: number } = screensConfig[key]!;

					return {
						name: key,
						active: width >= breakpoint.min
					}
				});

			const cacheKey = breakPointsConfig.map(breakpoint => `${breakpoint.name}=${breakpoint.active}`);

			return React.useMemo(() => {
				return create(tailwindStyles, webStyles, breakPointsConfig, spacesConfig);
			}, [tailwindStyles, cacheKey]);
		}
	}
};
