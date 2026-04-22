<form>
  <div>
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

  <button type="submit">Send Message</button>
</form>

<style>
  form {
    max-width: 32rem;
    display: grid;
    gap: 0.5rem;
  }

  div {
    display: grid;
  }

  label {
    font-weight: 500;
  }

  input, textarea, button {
    padding: 0.5rem;
    font: inherit;
  }

  button {
    padding: 1rem;
    background-color: var(--color-blue);
    color: var(--color-white);
    border: none;
    border-radius: 0.5rem;
  }
</style>