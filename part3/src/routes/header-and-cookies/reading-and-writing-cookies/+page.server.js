// before
// export function load() {
// 	const visited = 'false';

// 	return {
// 		visited: visited === 'true'
// 	};
// }

// after
export function load({ cookies }) {
	const visited = cookies.get('visited');

	cookies.set('visited', 'true', { path: '/' });

	return {
		visited
	};
}
