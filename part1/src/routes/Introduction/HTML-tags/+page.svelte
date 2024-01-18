<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>{string}</p>
<p>{@html string}</p>

<p>
	Ordinarily, strings are inserted as plain text, meaning that characters like &lt; and &gt; have no
	special meaning.
	<br />
	But sometimes you need to render HTML directly into a component. For example, the words you&#39;re
	reading right now exist in a markdown file that gets included on this page as a blob of HTML.
	<br />
	In Svelte, you do this with the special &lcub;@html ...&rcub; tag:
</p>

<p>code:</p>
<code>
	&lt;script&gt;
	<br />
	let string = `this string contains some &lt;strong&gt;HTML!!!&lt;/strong&gt;`;
	<br />
	&lt;/script&gt;
	<br />
	<br />
	&lt;p&gt;&lcub;string&rcub;&lt;/p&gt;
	<br />
	&lt;p&gt;&lcub;@html string&rcub;&lt;/p&gt;
</code>
<br />
<p>note:</p>
<p>
	Warning! Svelte doesn't perform any sanitization of the expression inside &lcub;@html ...&rcub;
	before it gets inserted into the DOM. This isn't an issue if the content is something you trust
	like an article you wrote yourself. However if it's some untrusted user content, e.g. a comment on
	an article, then it's critical that you manually escape it, otherwise you risk exposing your users
	to Cross-Site Scripting (XSS) attacks.
</p>
