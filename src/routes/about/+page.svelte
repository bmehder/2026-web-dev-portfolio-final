<script>
	import { page } from '$app/state'
	import Close from '$lib/assets/icons/close.svg'
	import Gallery from '$lib/components/Gallery.svelte'
	import PageTitle from '$lib/components/PageTitle.svelte'
</script>

<svelte:head>
	<title>About | Acme Corporation</title>
	<meta
		name="description"
		content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officiis provident perspiciatis rem impedit maxime?"
	/>
</svelte:head>

<PageTitle title="About"></PageTitle>

<section>
	<div class="outer">
		<div class="inner">
			<h2>Biography</h2>

			<img
				class="float-right"
				src="/placeholder-1.png"
				alt="flowers and a blue sky"
			/>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, vero? Porro
				dicta dolores nihil nemo soluta suscipit nam eligendi fugit, cumque aperiam
				cupiditate possimus velit provident a voluptatum distinctio? Ea omnis tempore
				explicabo, soluta cupiditate repudiandae exercitationem aperiam delectus
				excepturi quas, nulla fugiat possimus perspiciatis optio cumque, quidem
				voluptas eos aspernatur libero!
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. A vel reiciendis
				repellat consectetur? Ratione amet, tempora aliquid quam non vitae officiis
				eaque tempore labore nihil! Dicta natus fugiat dolore quis vel sunt neque
				tempore rerum quia suscipit, cupiditate iste, laudantium provident eos.
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi
				dolores iste maxime praesentium, rerum soluta necessitatibus adipisci a illo,
				delectus voluptate temporibus suscipit non voluptatibus ipsa quis sapiente
				ipsam nobis blanditiis sed atque libero! Eum ad vel corporis laborum
				doloribus recusandae aliquid. Accusamus tempore officia excepturi, voluptates
				dicta assumenda perferendis distinctio?
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. A vel reiciendis
				repellat consectetur? Ratione amet, tempora aliquid quam non vitae officiis
				eaque tempore labore nihil! Dicta natus fugiat dolore quis vel sunt neque
				tempore rerum quia suscipit, cupiditate iste, laudantium provident eos.
			</p>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi
				dolores iste maxime praesentium, rerum soluta necessitatibus adipisci a illo,
				delectus voluptate temporibus suscipit non voluptatibus ipsa quis sapiente
				ipsam nobis blanditiis sed atque libero! Eum ad vel corporis laborum
				doloribus recusandae aliquid. Accusamus tempore officia excepturi, voluptates
				dicta assumenda perferendis distinctio?
			</p>
		</div>
	</div>
</section>

<section>
	<div class="outer">
		<div class="inner">
			<h2>Gallery</h2>
			<button commandfor="modal" command="show-popover">Open Gallery</button>
		</div>
	</div>
</section>

<div id="modal" class="modal" popover>
	<button commandfor="modal" command="hide-popover">X</button>
	<Gallery images={page.data.gallery} />
</div>

<style>
	.modal {
		position: relative;
		background-color: transparent;
		border: none;

		button {
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			display: grid;
			place-content: center;
			inline-size: 3rem;
			block-size: 3rem;
			padding: 0.5rem;
			background-color: rgba(0, 0, 0, 0.5);
			color: white;
			font-size: 1.5rem;
			border-radius: 50%;

			&:hover {
				background-color: rgba(0, 0, 0, 0.7);
			}
		}

		&::backdrop {
			background-color: rgba(0, 0, 0, 0.9);
		}
	}
</style>
