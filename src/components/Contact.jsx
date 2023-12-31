import { useState } from "react";
import hostname from "../utils/HostName";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || subject === "" || message === "") {
      alert("Alert! Please fill the form completely.");
    } else {
      try {
        const res = await fetch(`${hostname}/website/add-contact-message`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            subject,
            message,
          }),
        });

        const data = await res.json();
        if (data) {
          alert("Success! Contact Feedback Form submitted.");
          setEmail("");
          setSubject("");
          setMessage("");
          console.log(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <section className="bg-white">
      <div className="py-8 mb-2 md:mb-0 lg:mb-0 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form className="space-y-8" onSubmit={handleContactSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-300 focus:border-stone-300 block w-full p-2.5"
              placeholder="name@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-stone-300 focus:border-stone-300"
              placeholder="Let us know how we can help you"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-stone-300 focus:border-stone-300"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-stone-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
