import SaleInfo from "./SaleInfo";
import SideBar from "./SideBar";
import Search from "./components/Search";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Search />
      <SaleInfo />
      <SideBar />
    </>
  );
};

export default App;
