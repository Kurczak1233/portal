import AdminMenuLayout from "components/common/AdminMenu/AdminMenuLayout/AdminMenuLayout";
import PostMenuContent from "components/PostsPage/PostMenuContent/PostMenuContent";
import {
  administrationRoute,
  articlesRoute,
  createEduLinkRoute,
  createJobOfferRoute,
  createPostRoute,
  dashboardRoute,
  eduLinksRoute,
  errorRoute,
  invitationsRoute,
  jobOffersRoute,
  postsRoute,
  profileRoute,
  usersRoute,
} from "constants/apiRoutes";
import AdministrationLayout from "pages/AdministrationLayout/AdministrationLayout";
import DashboardPage from "pages/AdministrationSubpages/DashboardPage/DashboardPage";
import InvitationsPage from "pages/AdministrationSubpages/InvitationsPage/InvitationsPage";
import PostsPage from "pages/AdministrationSubpages/PostsPage/Overview/Posts/PostsPage";
import ProfilePage from "pages/AdministrationSubpages/ProfilePage/ProfilePage";
import UsersPage from "pages/AdministrationSubpages/UsersPage/UsersPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLogic from "./AppLogic";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const { checkIfRouteIsAuthenticated } = AppLogic();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={`${errorRoute}`} element={<div>X2D</div>} />
        <Route
          path={`${administrationRoute}`}
          element={checkIfRouteIsAuthenticated(<AdministrationLayout />)}
        >
          <Route
            path={`${articlesRoute}`}
            element={checkIfRouteIsAuthenticated(
              <AdminMenuLayout menuContent={<PostMenuContent />} />
            )}
          >
            <Route
              path={`${postsRoute}`}
              element={checkIfRouteIsAuthenticated(<PostsPage />)}
            />
            <Route path={`${jobOffersRoute}`} element={<div>xD1</div>} />
            <Route path={`${eduLinksRoute}`} element={<div>X2D</div>} />
            <Route path={`${createPostRoute}`} element={<div>xD3</div>} />
            <Route path={`${createJobOfferRoute}`} element={<div>xD3</div>} />
            <Route path={`${createEduLinkRoute}`} element={<div>xD4</div>} />
          </Route>
          <Route path={`${profileRoute}`} element={<ProfilePage />} />
          <Route path={`${dashboardRoute}`} element={<DashboardPage />} />
          <Route path={`${usersRoute}`} element={<UsersPage />} />
          <Route path={`${invitationsRoute}`} element={<InvitationsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
