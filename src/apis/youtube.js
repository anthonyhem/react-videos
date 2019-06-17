import Axios from 'axios';

//removed personal api key for security reasons
const KEY = 'PLACE YOUR KEY HERE';

export default Axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});