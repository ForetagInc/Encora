# @encora/store
Encora store is a plain wrapper around [`pullstate`](https://github.com/lostpebble/pullstate), to provide performant yet easy stores for your Encora app.

<details>
	<summary>Why pullstate?</summary>
	<br />
	Like with Encora, pullstate is extremely easy to use while offering all of the functionality you would expect from other store management systems such as Redux, minus the boilerplate.
</details><br />

## Features

- Built with TypeScript
- Based on immer - for safe state mutations
- Support for Hooks and `<Suspense />`
- Async Actions with caching
- 7KB minified and gzipped

## Usage

```ts
// store.ts
import { Store } from '@encora/store';

export const UIStore = new Store({ 
	isDarkMode: false
});
```

```tsx
// app.tsx

import * as React from 'react';
import { Div, Title, Button } from '@encora/components';
import { UIStore } from './store';

export const App = () => {
	const isDarkMode = UIStore.useState(s => s.isDarkMode);

	return(
		<Div
			className={isDarkMode ? 'bg-gray-400' : 'bg-white' }
		>
			<Title>Hello Pullstate</Title>
			<Button
				onClick={() => {
					UIStore.update(s => {
						s.isDarkMode = !isDarkMode;
					});
				}}
				title='Toggle Dark Mode'
			>
		</Div>
	);
}
```

[View full Documentation](https://lostpebble.github.io/pullstate/)
