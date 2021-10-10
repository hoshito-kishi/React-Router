import { Service } from "../Service";
import { ServiceA } from "../ServiceA";
import { ServiceB } from "../ServiceB";

export const ServiceRouter = [
  { path: "/", exact: true, item: <Service /> },
  { path: "/serviceA", exact: false, item: <ServiceA /> },
  { path: "/serviceB", exact: false, item: <ServiceB /> }
];
