/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	//return !['feed', 'login', '', 'register', 'lists', 'privacy', 'terms'].includes(param);
	return param.match(/\d/);
}
