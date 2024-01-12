<script>
	export let data;
</script>

<p>
	In the chapter on loading data, we saw how to get data from the server to the browser. Sometimes
	you need to send data in the opposite direction, and that's where ( form ) — the web platform's
	way of submitting data — comes in.
</p>
<p>
	Let's build a todo app.We've already got an in-memory database set up in
	src/lib/server/database.js,and our load function in
	src/routes/shared-modules/the-form-element/+page.server.js uses the cookies API so that we can
	have a per-user todo list, but we need to add a ( form ) to create new todos:
</p>
<p>see code in +page.svelte (added)</p>
<br />

<p>
	If we type something into the ( input ) and hit Enter, the browser makes a POST request (because
	of the method="POST" attribute) to the current page. But that results in an error, because we
	haven't created a server-side action to handle the POST request. Let's do that now:
</p>
<p>see code in +page.server.svelte (added)</p>
<br />

<p>
	The request is a standard Request object; await request.formData() returns a FormData instance.
</p>
<p>When we hit Enter, the database is updated and the page reloads with the new data.</p>
<p>
	Notice that we haven't had to write any fetch code or anything like that — data updates
	automatically. And because we're using a ( form ) element, this app would work even if JavaScript
	was disabled or unavailable.
</p>
<br />
<p>see our todo app below</p>
<br />

<div class="centered">
	<h1>todos</h1>

	<!-- added -->
	<form method="POST">
		<label>
			add a todo:
			<input name="description" autocomplete="off" />
		</label>
	</form>
	<!-- end added -->

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				{todo.description}
			</li>
		{/each}
	</ul>
</div>

<div style="height: 10rem;"></div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	/* span {
		flex: 1;
	}

	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	} */
</style>
