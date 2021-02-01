import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

async function set(name: string, value: string): Promise<boolean> {
	switch (Platform.OS) {

		case 'ios':
		case 'android':
			await SecureStore.setItemAsync(name, value);
			break;

		case 'web':
			document.cookie = `${name}=${value}; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/; SameSite=strict; Secure`;
			break;

		default:
			return false;
	}

	return true;
}

// eslint-disable-next-line complexity
function get(name: string): Promise<string | null> {
	switch (Platform.OS) {
		case 'ios':
		case 'android':
			return SecureStore.getItemAsync(name);

		case 'web':
			// eslint-disable-next-line require-unicode-regexp
			// eslint-disable-next-line no-extra-parens
			// eslint-disable-next-line require-unicode-regexp
			return ((new RegExp((name || '=') + '=(.*?); ', 'gm')).exec(document.cookie + '; ') || ['', null])[1];

		default:
			return new Promise(() => null);
	}
}

export const Cookie = { get, set };
