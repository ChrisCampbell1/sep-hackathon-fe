// npm modules
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// pages
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Recipes from "./pages/Recipes/Recipes";
import ShowRecipe from "./pages/ShowRecipe/ShowRecipe";
import NewRecipe from "./pages/NewRecipe/NewRecipe";
import AddFamily from "./pages/AddFamily/AddFamily";
import ShowProfile from "./pages/ShowProfile/ShowProfile";
import EditRecipe from "./pages/EditRecipe/EditRecipe";

// components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// services
import * as authService from "./services/authService";
import * as recipeService from "./services/recipeService"
import * as profileService from "./services/profileService"

// styles
import "./App.css";

function App() {
  const [user, setUser] = useState(authService.getUser());
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleAuthEvt = () => {
    setUser(authService.getUser());
  };

  // fetching and storing recipes and user profile on the app level

  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    const fetchAllRecipes = async () => {
      const recipesArr = await recipeService.getAllRecipes()
      setRecipes(recipesArr)
    }
    const fetchProfile = async () => {
      const userProfile = await profileService.getProfile(user.profile)
      setProfile(userProfile)
    }
    fetchAllRecipes()
    fetchProfile()
  }, [user])

  return (
    <>
      <NavBar user={user} profile={profile} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} profile={profile}/>} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/recipes"
          element={<Recipes 
            user={user}
            profile={profile}
            recipes={recipes}
          />}
        />
        <Route 
          path="/recipes/new"
          element={<NewRecipe 
            user={user}
            profile={profile}
            recipes={recipes}
            setRecipes={setRecipes}
          />}
        />
        <Route path="/recipes/:id" element={<ShowRecipe />} />
        <Route 
          path="/family/add"
          element={<AddFamily 
            user={user}
            profile={profile}
          />}
        />
        <Route 
          path="/family/:id"
          element={<ShowProfile 
            user={user}
            profile={profile}
            setProfile={setProfile}
          />}
        />
        <Route path="/recipes/:id" element={<ShowRecipe profile={profile} user={user}/>} />
        <Route path="/recipes/:id/edit" element={<EditRecipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
