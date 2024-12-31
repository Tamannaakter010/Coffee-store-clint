import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    signIn(email, password)
      .then((result) => {
        console.log("User signed in:", result.user);

        // Prepare user data for backend
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime, // Corrected field for Firebase Auth
        };

        // Send user data to backend
        return fetch(`http://localhost:5000/user`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("User update response:", data);
      })
      .catch((error) => {
        console.error("Error signing in or updating user:", error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign in now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="/forgot-password" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
