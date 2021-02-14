import IO from 'fs';
import Path from 'path';
import { fileURLToPath } from 'url';
import RemixIcons from '../components/Icon/assets/remixicon.glyph.json';

const glyphs: Record<string, number> = {};

let cMap = 59905;

Object.entries(RemixIcons).forEach(entry => {
	const [ key ] = entry;
	glyphs[key] = cMap;

	cMap++;
});

const __dirname = Path.dirname(fileURLToPath(import.meta.url));

IO.writeFileSync(Path.join(__dirname, '/../components', 'Icon', 'assets', 'glyphs.json'), JSON.stringify(glyphs));
