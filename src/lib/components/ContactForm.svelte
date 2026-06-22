<form class="max-w-lg grid gap-4">
	<div class="grid">
		<label for="name">Name</label>
		<input type="text" name="name" id="name" required />
	</div>

	<div class="grid">
		<label for="email">Email</label>
		<input type="email" name="email" id="email" required />
	</div>

	<div class="grid">
		<label for="phone">Phone</label>
		<input type="tel" name="phone" id="phone" />
	</div>

	<div class="grid">
		<label for="message">Message</label>
		<textarea name="message" id="message" rows="10" required></textarea>
	</div>

	<button type="submit" class="justify-self-start bg-zinc-500 bg-zinc-400 light"
		>Send Message</button
	>
</form>
