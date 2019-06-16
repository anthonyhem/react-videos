import Axios from 'axios';

const KEY = 'AIzaSyC0mLuWQqbR-9uP_lQdjMV2WRxyWVzHVlM';

export default Axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});