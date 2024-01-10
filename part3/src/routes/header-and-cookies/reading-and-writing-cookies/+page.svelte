<script>
	export let data;
</script>

<p>header-and-cookies/reading-and-writing-cookies</p>
<br />

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
<br />

<p>
	The setHeaders function can't be used with the Set-Cookie header. Instead, you should use the
	cookies API. In your load functions, you can read a cookie with cookies.get(name, options):
</p>
<p>see code in +page.server.js (//before)</p>
<br />

<p>
	To set a cookie, use cookies.set(name, value, options). It's strongly recommended that you
	explicitly configure the path when setting a cookie, since browsers' default behaviour — somewhat
	uselessly — is to set the cookie on the parent of the current path.
</p>
<p>see code in +page.server.js (//after)</p>
<br />

<p>Now, if you reload the page, Hello stranger! becomes Hello friend!. documentation.</p>
<p>
	Calling cookies.set(name, ...) causes a Set-Cookie header to be written, but it also updates the
	internal map of cookies, meaning any subsequent calls to cookies.get(name) during the same request
	will return the updated value. Under the hood, the cookies API uses the popular cookie package —
	the options passed to cookies.get and cookies.set correspond to the parse and serialize options
	from the cookie documentation.
</p>
