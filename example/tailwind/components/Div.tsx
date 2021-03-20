import * as React from 'react';
import { Pressable, View } from 'react-native';
import { useHover, useFocus, useActive } from 'react-native-web-hooks';
import { useTailwind } from '../index';

import { TElementState } from '../interfaces';

interface IProps {
	className?: string,
	onPress?: () => {}
}

export const Div: React.FC<IProps> =
	({ className, children }) => {

		const { tailwind } = useTailwind();

		const [state, setState] = React.useState<TElementState>(null);
		const [pressed, setPressed] = React.useState(false);
		const ref = React.useRef(null);

		const isHovered = useHover(ref);
		const isFocused = useFocus(ref);
		const isActive = useActive(ref);

		React.useEffect(() => {
			if (isHovered)
				setState('hover');
			else if (isFocused)
				setState('focus');
			else if (isActive)
				setState('active');
			else
				setState(null);
		}, [ isFocused, isHovered, isActive ]);

		return (
			<Pressable
				onPressIn={ () => { setPressed(true); } }
				onPressOut={ () => { setPressed(false); } }
			>
				<View
					ref={ ref }
					style={ tailwind(className, state) }
				>
					{ children }
				</View>
			</Pressable>
		);
	}

Div.displayName = 'Div';
