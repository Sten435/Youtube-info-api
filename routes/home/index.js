import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Home = async (req, res, dirname) => {
	res.type('html');

	return await res.sendFile(path.join(__dirname, '../../documentation/index.html'));
};

export default Home;
