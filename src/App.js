import { Routes, Route } from "react-router-dom";
import Body from "./components/body";
import Header from "./components/header";
import Maincomponent from "./components/maincomponent";
import Videocomponent from "./components/videocomponent";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Maincomponent />}></Route>
          <Route path="watch" element={<Videocomponent />}></Route>
        </Route>
      </Routes>
    </div>

  )
}

export default App;
