import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../CSS/Auth.module.css";
import { loginUser } from "../../lib/auth.api";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const users = await loginUser(email, password);
      if (users.length > 0) {
        localStorage.setItem("user", JSON.stringify(users[0]));
        toast.success("✅ Login successful");
        navigate("/");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Server error, please try again later");
    }
  };

  return (
    <div className={styles.authCard}>
      <div className={styles.authHeader}>Login</div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-1"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}

          <input
            type="password"
            className="form-control mb-1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}

          <button className={`${styles.btnBinky} w-100 mt-2`} type="submit">
            Login
          </button>
          <Link to="/register" className={styles.smallLink}>
            Don’t have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
