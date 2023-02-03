import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <span>Phone: (00)1122-3344</span> <br /> <br />
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link>
    </div>
  );
}

export default Contact;
