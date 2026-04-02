// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import { useAuth, SignedIn, SignedOut } from '@clerk/clerk-react';
// import Home from './Pages/Home';
// import MyResultPage from './Pages/MyResultPage'; 
// const App = () => {
//   const {isLoaded}=useAuth();
//   if(!isLoaded) return null;
//   return (
//  <Routes>
// <Route path="/" element={<Home/>}/>
// <Route
//   path="/result"
//   element={
//     <>
//       <Show when="signed-in">
//         <MyResultPage />
//       </Show>

//       <Show when="signed-out">
//         <Navigate to="/" />
//       </Show>
//     </>
//   }
// />
//  </Routes>
//   );
// };
// export default App



import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth, SignedIn, SignedOut } from '@clerk/clerk-react';

import Home from './Pages/Home';
import MyResultPage from './Pages/MyResultPage';

const App = () => {
  const { isLoaded } = useAuth();

  if (!isLoaded) return null;

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/result"
        element={
          <>
            <SignedIn>
              <MyResultPage />
            </SignedIn>

            <SignedOut>
              <Navigate to="/" />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
};

export default App;




// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuth, SignedIn, SignedOut } from "@clerk/clerk-react";

// import Home from "./Pages/Home";
// import MyResultPage from "./Pages/MyResultPage";
// import DashboardPage from "./Pages/DashboardPage"; // ✅ FIX

// const App = () => {
//   const { isLoaded } = useAuth();

//   if (!isLoaded) return null;

//   return (
//     <Routes>
//       {/* Home */}
//       <Route path="/" element={<Home />} />

//       {/* Result */}
//       <Route
//         path="/result"
//         element={
//           <>
//             <SignedIn>
//               <MyResultPage />
//             </SignedIn>

//             <SignedOut>
//               <Navigate to="/" />
//             </SignedOut>
//           </>
//         }
//       />

//       {/* ✅ Dashboard FIX */}
//       <Route
//         path="/dashboard"
//         element={
//           <>
//             <SignedIn>
//               <DashboardPage />
//             </SignedIn>

//             <SignedOut>
//               <Navigate to="/" />
//             </SignedOut>
//           </>
//         }
//       />
//     </Routes>
//   );
// };

// export default App;