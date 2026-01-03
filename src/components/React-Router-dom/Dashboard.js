import { Link } from 'react-router-dom';

export default function Dashboard() {

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Dashboard</h1>
      <p>This page is only visible if you are logged in.</p>

      <nav style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: 'blue' }}>
          Home
        </Link>
        <Link to="/profile" style={{ marginRight: '1rem', textDecoration: 'none', color: 'green' }}>
          Profile
        </Link>
        <Link to="/settings" style={{ textDecoration: 'none', color: 'purple' }}>
          Settings
        </Link>
      </nav>
    </div>
  );
}
