// import { Switch } from 'antd';
import React from 'react'
//  import ReactDOM from "react-dom";
import { BrowserRouter as  Router, Routes,Route} from "react-router-dom";
import Page2 from './Page2';
 import Page1 from './Page1';
// const navigate = useNavigate();


// const siderMenuCallback= (menu) => {
//   navigate(menu);
// }
function PageRouter() {
  return (
    <div>
    
    <Router>
        <Routes>
            <Route exact path="/" element={<Page1/>}/>
            <Route exact path="/page2" element={<Page2/>}/>
        </Routes>
        
        </Router>
    </div>
  )
}

export default PageRouter