import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import "./App.css";
import AppRoutes from './Components/AppRoutes';
import BlogCard from "./Components/Cards/BlogCard/BlogCard";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Widgets/Navigation/Navigation";
import routes from './Config/Routes';
import { AuthProvider } from "./Context";

function App(props) {
  return (
  <>
    <AuthProvider >
    <Router>
      <Switch>
        {routes.map((route) => (
          <AppRoutes
            key={route.path}
            exact path={route.path}
            component={route.component}
            isPrivate={route.isPrivate}
          />
        ))}
      </Switch>
    </Router>
    </AuthProvider>
 
  </>
  );
}

export default App;
