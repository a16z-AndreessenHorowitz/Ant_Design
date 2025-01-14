// import {Routes,Route} from "react-router-dom";

import LayoutDefault from '../components/layout/LayoutDefault';

import Dashboard from '../pages/Dashboard';






export const routes=[
    {
        path:'/',
        element:<LayoutDefault/>,
        children:[
        {
                path:"/",
                element:<Dashboard/>
        }, 
       
        
        ]
    }

];

// <Routes>
// <Route path="/" element={  <LayoutDefault />}>
// <Route path="/" element={<Home/> } />
// <Route path="about" element={<About /> } />
// <Route path="contact" element={<Contact/> } />
// <Route path="blog" element={<Blog/>}>
//     <Route index element={<BlogAll/>}/>
//     <Route path="news" element={<BlogNew/>}/>
//     <Route path="related" element={<BlogRelated/>}/>
//     <Route path=":id" element={<BlogDetail/>}/>
// </Route>

// <Route path="login" element={<Login/>} />
// <Route element={<PrivateRuutes/>}>
// <Route path="infouser" element={<InfoUser/> } />
// </Route>
// <Route path="*" element={<Error404/>} /> 
// {/* * là những path chưa được định nghĩa  */}

// </Route>

// </Routes>