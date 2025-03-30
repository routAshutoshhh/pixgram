import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      {/*wrapping in parent route */}
      <Routes>
        {/*public route : every one will be able to see this route like signup and signin*/}
        <Route path="/sign-in" element={<SigninForm />} />
        {/*private route:only can be seen if singned in */}
        <Route index element={<Home />} />
        {/* index when used first/starting page to appear  */}
      </Routes>
    </main>
  );
};

export default App;
