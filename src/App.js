import Pc from "./components/ps";
import Phone from "./components/phone";
import "./styles/index.scss";
import MediaQuery from 'react-responsive'
import Work03 from "./components/work03";

function App() {
  return (
    <div>
      <MediaQuery minWidth={1224 || 1824}>
        <Pc/>
        <Work03 />
      </MediaQuery>
      <MediaQuery maxWidth={480}>
      <Phone/>
      </MediaQuery>
    </div>
  );
}

export default App;
