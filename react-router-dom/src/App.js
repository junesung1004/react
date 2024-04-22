import "./App.css";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import ItemList from "./pages/ItemList";
import ItemDetail from "./pages/ItemDetail";

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

useParms()
-react-router-dom에서 임포트 되는 hook
현재 라우트에서 매개변수를 받아와서 객체 형태로 반환해주는 역할

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
          <li>
            <Link to="/itemList">itemList</Link>
          </li>
        </ul>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/product"} element={<Product />}></Route>
          <Route path={"/itemList"} element={<ItemList />} />
          <Route path={"/items/:id"} element={<ItemDetail />} />
          {/* path에 : 붙는 경우 매개변수를 참조하게 된다. 
          현재 코드에서는 :id id를 지정된 주소로 참조하는 것이 아닌 매개변수로 참조해서
          itemDetail페이지에서 useParams이용해서 매개변수를 객체형태로 반환
          */}

          <Route path={"*"} element={<NotFound />} />
          {/* 
          path에 * 넣게 되면 Route로 연결된 path를 제외한 모든 페이지를 선택하게 된다
          path에 지정된 경로 외에 다른 페이지로 들어가게 되면 오류를 출력해야 하므로
          NotFound 컴포넌트를 작성해서 불러오도록 한다.

          오류 페이지는 필수는 아니지만 사용자가 혹은 페이지에 정상적으로 접근하지 못하는 경우
          아무런 내용을 출력하지 않기 때문에 오류인지 사용자는 인식하기 어렵다.
          오류 출력 메세지를 담고 있는 컴포넌트를 출력해주는 것이 좋다.

          */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
