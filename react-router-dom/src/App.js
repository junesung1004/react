import "./App.css";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

/*
router-dom에 사용되는 요소들

-Router (BrowserRouter)는 라우팅 컨텍스트를 설정 라우팅에 필요한 모든 정보를 제공할 수 있게
랩핑하는 요소 

-link 컴포넌트를 지정해서 사용자가 클릭할 수 있는 네비게이션 링크를 생성한다.
링크는 페이지를 새로 로드하지 않고 주소만 변경
to='이동될 페이지 주소'

-Routes
컴포넌트 내에서 각 경로와 그에 대응하는 컴포넌트를 설정하는 요소

-Route
컴포넌트 내에서 Link에 연결되어 있는 to에 연결할 주소를 path='페이지 주소(Link와 같아야 함)'
연결하며 그 주소에서 랜더링 할 컴포넌트를 element = {<컴포넌트명 />}

이 모든 과정은 링크를 클릭했을때 사용자는 링크를 이동했다고 인식하지만 페이지는
링크를 이동하지 않고 현재 페이지에서 요청된 컴포넌트만 호출하는 방식
*/

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
