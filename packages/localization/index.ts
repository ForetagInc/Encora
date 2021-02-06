/* eslint-disable complexity */
/* eslint-disable dot-location */
import i18Next, { Resource } from 'i18next';
import { Platform } from 'react-native';
import { initReactI18next, useTranslation } from 'react-i18next';
import * as ExpoLocalization from 'expo-localization';

function getLanguage(): string {
	switch (Platform.OS) {
		case 'ios':
		case 'android':
		case 'web':
			return ExpoLocalization.locale;

		default:
			return Intl.DateTimeFormat().resolvedOptions().locale;
	}
}

function getTimezone(): string {
	switch (Platform.OS) {
		case 'ios':
		case 'android':
		case 'web':
			return ExpoLocalization.timezone;

		default:
			return Intl.DateTimeFormat().resolvedOptions().timeZone;
	}
}

function i18n(resources: Resource) {
	return i18Next
			.use(initReactI18next)
			.init({
				lng: getLanguage(),
				resources
			})
}

const Localization = {
	locale: getLanguage(),
	timezone: getTimezone(),
}

export {
	i18n,
	useTranslation,
	Localization
};
