import { Link } from "react-router-dom";

export const Service = () => {
  return (
    <div>
      <h1>Serviceページです</h1>
      <Link to="/service/serviceA">ServiceA</Link>
      <br />
      <Link to="/service/serviceB">ServiceB</Link>
    </div>
  );
};
