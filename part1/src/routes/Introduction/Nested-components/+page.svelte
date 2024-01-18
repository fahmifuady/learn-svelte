<script>
	import Nested from './Nested.svelte';
</script>

<h1>This is Heading 1</h1>
<Nested />

<p>
	It would be impractical to put your entire app in a single component. Instead, we can import
	components from other files and include them in our markup.
</p>

<div>
	code
	<br />
	&lt;script&gt;
	<br />
	import Nested from &#39;./Nested.svelte&#39;;
	<br />
	&lt;/script&gt;
	<br />
	&lt;h1&gt;This is Heading 1&lt;/h1&gt;
	<br />
	&lt;Nested /&gt;
	<br /><br />

	&lt;style&gt;
	<br />
	h1 &lcub; color: goldenrod; font-family: &#39;Comic Sans MS&#39;, cursive; font-size: 2em; &rcub;
	<br />
	&lt;/style&gt;
</div>

<p>
	Notice that even though Nested.svelte has a &lt;h1&gt; element, the styles from App.svelte don't
	leak in.
</p>

<style>
	h1 {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
