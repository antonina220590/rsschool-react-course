import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <Link to="forms1">Uncontrolled Form</Link>
      <br />
      <Link to="forms2">React Hooks Forms</Link>
    </div>
  );
}

export default MainPage;
