import React, { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        // Email validation
        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format.";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    };

    return (
        <div id="container">
            <h2>Login Form</h2>
            {isSubmitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
            <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                        className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="form-error" style={{ color: "red" }}>{errors.email}</p>}
                    </div>
                
                <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                        className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="form-error" style={{ color: "red" }}>{errors.password}</p>}
                    </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;
