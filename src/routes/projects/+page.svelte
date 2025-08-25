<div id="sidebar">
	<h3>C Projects</h3>
	<div class="indented">
		<h4><a href="#m-calc">M-Calculator</a></h4>
	</div>
	<h3>Rust Projects</h3>
	<div class="indented">
		<h4><a href="#kingdom-kards">Kingdom Kards Game Server</a></h4>
	</div>
</div>
<article>
	<section class="project">
		<h1 id="m-calc">
			<a href="https://github.com/EHMD28/m-calc_ver.4" target="_blank">M-Calculator Version 4</a>
		</h1>
		<p>
			M-Calculator 4 is a fully featured scientific calculator written in pure C, no libraries
			(except ones I wrote). This is my first non-trivial project I created. If you're wondering why
			this is "version 4", it's because the other three versions were me trying to get the hang of
			trying to create a non-trivial program, and all of them failed for one reason or another. This
			project taught me a lot about how to create maintainable codebases.
		</p>
	</section>
	<hr />
	<section class="project">
		<h1 id="kingdom-kards">
			<a href="https://github.com/EHMD28/kingdom-kards" target="_blank">Kingdom Kards Server</a>
		</h1>
		<p>
			Kingdom Kards is a card game I invented which can be played with a standard deck of playing
			cards. I wrote a TCP server in Rust for online play, though with the way it is currently set
			up, the game must be hosted locally. In the future, I plan to use Tauri to add a GUI, but
			currently everything in on the command line.
		</p>
	</section>
	<hr />
</article>

<style>
	div#sidebar {
		position: fixed;
		top: 10vh;
		left: 0;
		right: 85vw;
		bottom: 0;
		padding: 10pt;
		background-color: rgb(11, 11, 37);
	}

	h3 {
		font-size: 14pt;
		font-weight: bold;
		margin-top: 20px;
	}

	h4 {
		font-size: 12pt;
		padding-top: 5px;
	}

	div.indented {
		padding-left: 1.5vw;
	}

	article {
		margin-left: 15vw;
	}
</style>
