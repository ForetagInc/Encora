import * as React from 'react';
import { Platform } from 'react-native';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

export const useKeepAwake = () => {
	const [wakeLock, setWakeLock] = React.useState<WakeLockSentinel | null>(null);

	const activate = async (): Promise<boolean> => {
		switch (Platform.OS) {
			case 'ios':
			case 'android':
				activateKeepAwake();
				return true;
			break;

			case 'web':
				if ('wakeLock' in navigator)
				{
					try {
						setWakeLock(await navigator.wakeLock.request('screen'));
						return true;
					} catch (err) {
						console.log(err);
					}
				}
			break;

			case 'windows':
			case 'macos':
				break;

			default:
				break;
		}

		return false;
	}

	const deactivate = async (): Promise<boolean> => {
		switch (Platform.OS) {
			case 'ios':
			case 'android':
				deactivateKeepAwake();
				return true;
			break;

			case 'web':
				(wakeLock as WakeLockSentinel)
					.release()
					.then(() => {
						setWakeLock(null);
						return true;
					});
			break;

			default:
				break;
		}

		return false;
	}

	return [wakeLock, activate, deactivate] as const;
}
