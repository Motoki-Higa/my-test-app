import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/";
import Home from "../pages/Home/";
import Memo from "../pages/Memo/";
import Snippets from "../pages/Snippets/";
import AsyncUnitTest from '../pages/Snippets/lists/AsyncUnitTest'
import { StyledApp } from './StyledComponents'

function App() {
  return (
    <StyledApp>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="memo" element={<Memo />} />
        <Route path="snippets" element={<Snippets />}>
          <Route path="asyncunittest" element={<AsyncUnitTest />} />
        </Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
