<script>
	import '../../../app.css';
	import SectionHeader from '$lib/SectionHeader.svelte';
</script>

<SectionHeader title="M-Calculator Version 3" link="https://github.com/EHMD28/m-calc_ver.3" />
<section class="px-10 pb-10 leading-8 text-gray-200">
	<p>
		This was my first non-trivial project in C. The project has gone through three iterations so
		far. M-Calculator Version 1 was barely functional (and has been removed from Github). The
		program simply evaluated operators from left to right, ignoring order of operators. M-Calculator
		Version 2 was better, taking into account order of operations. But the way the equation was
		represented was prone to error, and there was no error checking on the inputs. M-Calculator
		Version 3 was built after I learned more about data structures, and I implemented my first basic
		recursive descent parser. In the future, I plan to make an M-Calculator Version 4, a
		fully-featured scientific calculator rather than just an expression evaluator.
	</p>
</section>
<hr />
