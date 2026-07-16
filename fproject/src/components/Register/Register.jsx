import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../CSS/Auth.module.css";
import { registerUser } from "../../lib/auth.api";
import { toast } from "react-toastify"; 

const Register = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fName.trim()) newErrors.fName = "First name is required";
    if (!formData.lName.trim()) newErrors.lName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      await registerUser({
        fName: formData.fName,
        lName: formData.lName,
        email: formData.email,
        password: formData.password,
      });

      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error("Error registering user!");
    }
  };

  return (
    <div className={`card ${styles.authCard}`}>
      <div className={`card-header ${styles.authHeader}`}>Register</div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="fName"
              className="form-control"
              placeholder="Enter your first name"
              value={formData.fName}
              onChange={handleChange}
            />
            {errors.fName && <p className="text-danger">{errors.fName}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lName"
              className="form-control"
              placeholder="Enter your last name"
              value={formData.lName}
              onChange={handleChange}
            />
            {errors.lName && <p className="text-danger">{errors.lName}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword}</p>
            )}
          </div>

          <button type="submit" className={`btn w-100 ${styles.btnBinky}`}>
            Create Account
          </button>
          <Link to="/login" className={styles.smallLink}>
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
