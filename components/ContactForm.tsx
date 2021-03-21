import { FC } from "react";

const ContactForm: FC = () => (
  <form name="contact" method="POST" data-netlify="true">
    <div>
      <label>
        Name*: <input type="text" name="name" />
      </label>
    </div>
    <p>
      <label>
        Email*: <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        Message*: <textarea name="message" />
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
);

export default ContactForm;
