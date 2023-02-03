import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to homePage</h1>
      <Link to="/contact">Contact us</Link> <br />
      <Link to="/about">About</Link>
    </div>
  );
}

export default HomePage;
