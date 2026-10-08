
import { useState } from "react";

function LoginForm({ onLogin, loginError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <section className="panel">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="form-row">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {loginError && <p className="error">{loginError}</p>}
    </section>
  );
}

export default LoginForm;
