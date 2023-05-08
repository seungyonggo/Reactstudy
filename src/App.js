import React from "react";
import Callback1 from "./component/App_useCallback1";
import Callback2 from "./component/App_useCallback2";
import Context2 from "./component/App_usecontext2";
import Effect1 from "./component/App_useEffect1";
import Effect2 from "./component/App_useEffect2";
import Memo1 from "./component/App_useMemo";
import Memo2 from "./component/App_useMemo2";
import Ref1 from "./component/App_useRef";
import State from "./component/App_useState";
import Custom from "./component/App_custom1";
import Context1 from "./component/App_usecontext1";
import Custom1 from "./component/App_custom1";
import Custom2 from "./component/App_custom2";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <State />
      <hr />
      <h1>useRef</h1>
      <Ref1 />
      <hr />
      <h1>Callback1</h1>
      <Callback1 />
      <hr />
      <h1>Callback2</h1>
      <Callback2 />
      <hr />
      <h1>Memo1</h1>
      <Memo1 />
      <hr />
      <h1>Memo1</h1>
      <Memo2 />
      <hr />
      <h1>Effect1</h1>
      <Effect1 />
      <hr />
      <h1>Effect2</h1>
      <Effect2 />
      <hr />
      <h1>Context1</h1>
      <Context1 />
      <hr />
      <h1>Context2</h1>
      <Context2 />
      <hr />
      <h1>Custom1</h1>
      <Custom1 />
      <h1>Custom2</h1>
      <Custom2 />
    </div>
  );
}

export default App;
