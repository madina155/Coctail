import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import {Route, Routes} from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Review from "./pages/Home/Review/Review";
import Questions from "./pages/Home/Questions/Questions";
import Product from "./pages/Product/Product";
import Cooperation from "./pages/Home/Cooperation/Cooperation";
import Invite from "./pages/Home/Invite/Invite";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Popup from "./pages/Popup/Popup";
import Table from "./pages/Table/Table";
import Processing from "./pages/Processing/Processing";

import "./styles/style.scss"




function App() {
    //
    // const users = useSelector((s) => s.users.users)
    // const usersCount = useSelector((s) => s.users.usersCount)
    //
    // console.log(users)
    // console.log(usersCount)

  return (
      <div className="App">
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route path={''} element={<Home/>}/>
                  <Route path={'catalog'} element={<Catalog/>}/>
                  <Route path={'shop'} element={<Shop/>}/>
                  <Route path={'review'} element={<Review/>}/>
                  <Route path={'questions'} element={<Questions/>}/>
                  <Route path={'catalog/:id'} element={<Product/>}/>
                  <Route path={'favorites'} element={<Favorites/>}/>
                  <Route path={'cooperation'} element={<Cooperation/>}/>
                  <Route path={'invite'} element={<Invite/>}/>
                  <Route path={'cart'} element={<Cart/>}/>
                  <Route path={'table'} element={<Table/>}/>

              </Route>
              <Route path={'popup'} element={<Popup/>}/>
              <Route path={'login'} element={<Login/>}/>
              <Route path={'registration'} element={<Registration/>}/>
              <Route path={'processing'} element={<Processing/>}/>

          </Routes>
      </div>

  );
}

export default App;
