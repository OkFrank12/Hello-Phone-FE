import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
const LayOut = loadable(() => import("../components/common/LayOut"));
const ContactPage = loadable(() => import("../pages/screen/ContactPage"));
const WelcomePage = loadable(() => import("../pages/screen/WelcomePage"));
const CreatePopOut = loadable(
  () => import("../components/common/CreatePopOut")
);
const HomeContacts = loadable(() => import("../pages/home/HomeContacts"));

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
    ],
  },
  {
    path: "/contact-page",
    element: <ContactPage />,
  },
  {
    path: "/create",
    element: <CreatePopOut />,
  },
  {
    path: "/all-contacts",
    element: <HomeContacts />,
  },
]);
