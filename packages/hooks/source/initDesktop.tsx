import * as React from 'react';
import { QFontDatabase } from '@nodegui/nodegui';

interface UseDesktopProps {
	fonts: string[]
	disableDefaultFonts?: boolean
}

export const useInitDesktop = ({
	fonts,
	disableDefaultFonts
}: UseDesktopProps) => {
	React.useEffect(() => {
		/** Register default fonts */
		if (!disableDefaultFonts)
			fonts.push('remixicon/fonts/remixicon.ttf');

		fonts.forEach(font => {
			QFontDatabase.addApplicationFont(font);
		});
	});
}
