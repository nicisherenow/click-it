import { useState, useEffect } from "react";
import { Router, Route, Routes } from "react-router";
import Home from "./Home";
import SpeedMode from "./SpeedMode";
import ZenMode from "./ZenMode";




function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded)return null

  return (
      <Routes>
        <Route path={'/zen-mode'} exact={true}>
          <ZenMode />
        </Route>
        <Route path={'/speed-mode'} exact={true}>
          <SpeedMode />
        </Route>
        <Route path={'/'} exact={true}>
          <Home />
        </Route>
        <Route>Page not found.</Route>
      </Routes>
  );
}

export default App;
