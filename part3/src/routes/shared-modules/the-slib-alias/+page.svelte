<script>
	// from this
	// import { message } from '../../../lib/message.js';

	// to this
	import { message } from '$lib/message.js';
</script>

<p>/shared-modules/the-slib-alias</p>
<h1>a deeply nested route</h1>
<p>{message}</p>

<p>the $lib alias</p>

<p>
	Because SvelteKit uses directory-based routing, it's easy to place modules and components
	alongside the routes that use them. A good rule of thumb is 'put code close to where it's used'.
</p>
<p>
	Sometimes, code is used in multiple places. When this happens, it's useful to have a place to put
	them that can be accessed by all routes without needing to prefix imports with ../../../../. In
	SvelteKit, that place is the src/lib directory. Anything inside this directory can be accessed by
	any module in src via the $lib alias.
</p>
<p>
	Both +page.svelte files in this exercise import src/lib/message.js. But if you navigate to
	/a/deeply/nested/route, the app breaks, because we got the prefix wrong. Update it to use
	$lib/message.js instead:
</p>
