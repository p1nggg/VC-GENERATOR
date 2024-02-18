import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import { AuthContext } from "./context";


function App() {
  useEffect(() => {
    document.title = 'CV GEN';
  }, []);
  // const isLoading = useState(true);
  return (
    // <AuthContext.Provider value={{
    //   isLoading
    // }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    // </AuthContext.Provider>
  );
}

export default App;

