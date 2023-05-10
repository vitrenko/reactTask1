import { Routes as ReactRoutes, Route} from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";

import { PublicLayout } from "../layouts";
import { About, Blog, Contact, Home, NotFound, Post } from "../pages";

const Routes = () => (
    <ReactRoutes>
        <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post" element={<Post />} />
            <Route path="*" element={<NotFound />} />
        </Route>      
    </ReactRoutes>
);

export default Routes;

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <PublicLayout />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />,
//             },
//             {
//                 path: "/about",
//                 element: <About />,
//             },
//             {
//                 path: "/blog",
//                 element: <Blog />,
//             },
//             {
//                 path: "/contact",
//                 element: <Contact />,
//             },
//             {
//                 path: "/posts/:id",
//                 element: <Post />,
//             },
//             {
//                 path: "*",
//                 element: <NotFound />,
//             }
//         ]
//     }
// ])


