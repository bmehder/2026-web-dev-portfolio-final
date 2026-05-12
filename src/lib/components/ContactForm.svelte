<form class="grid gap-1">
  <div class="grid">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" required />
  </div>
  
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required />
  </div>
  
  <div>
    <label for="phone">Phone</label>
    <input type="tel" name="phone" id="phone" />
  </div>
  
  <div>
    <label for="message">Message</label>
    <textarea name="message" id="message" rows="10" required></textarea>
  </div>

  <button type="submit" class="justify-self-start bg-primary light">Send Message</button>
</form>

<style>
  form {
    max-width: 32rem;
  }

  div {
    display: grid;
  }
</style>