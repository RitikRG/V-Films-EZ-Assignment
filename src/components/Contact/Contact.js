import React, {useState} from "react";
import "./Contact.css";
import Circle1 from "../../assets/contact/circular-design.svg";
import Circle2 from "../../assets/contact/circular-design-2.svg";
import Header from "../Header/Header";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email";
        }

        if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid 10-digit phone number";
        }

        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("Submitting...");

        try {
        const response = await fetch("https://your-api-endpoint.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus("Thank you! Your message has been sent.");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
            setStatus("Failed to send message. Please try again later.");
        }
        } catch (error) {
        setStatus("Error connecting to server.");
        }
    };
  return (
    <>
    <Header/>
    <section className="contact-section">
        <div className="contact-left">
            <p>
                Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.<br/>Let’s catch up over coffee.Great stories always begin with a good conversation
            </p>
        </div>
        <div className="contact-right">
            <div className="contact-container">
                <h2>Join the Story</h2>
                <p>Ready to bring your vision to life? Let's talk.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name*"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email*"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Your message*"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}
                    </div>

                    <button type="submit" className="btn">
                    Submit
                    </button>
                    {status && <p className="status">{status}</p>}
                </form>

                <div className="contact-info">
                    <a href="mailto:venita@varanfilms.co.in">venita@varanfilms.co.in</a>
                    <span>+91 98736 84567</span>
                </div>
            </div>
        </div>
        <div className="circle-left">
            <img src={Circle1}/>
        </div>
        <div className="circle-right">
            <img src={Circle2}/>
        </div>
    </section>
    </>
  );
}
