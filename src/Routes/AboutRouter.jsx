import { About } from "../About";
import { UrlParameter } from "../UrlParameter";

export const AboutRouter = [
  { path: "/", exact: true, item: <About /> },
  { path: "/:id", exact: false, item: <UrlParameter /> }
];
