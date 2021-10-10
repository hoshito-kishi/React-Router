import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>Aboutページです</h1>
      <Link to="/about/1000">Url Parameter</Link>
      <br />
      <Link to="/about/1000?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
