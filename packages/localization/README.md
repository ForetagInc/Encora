# @encora/localization

Localize your application, based on i18Next.

## Usage
```tsx
import * as React from 'react';
import { i18n, useTranslation } from '@encora/localization';

// App.tsx
i18n({ 
	en: {
		'hello': 'hello'
	}
});

// component.tsx
const App = () => {
	const { t } = useTranslation();

	return(
		<Div>{ t('hello') }</Div>
	);
}

```
