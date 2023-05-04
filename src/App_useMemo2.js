import React, { useEffect, useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   };

  useEffect(() => {
    console.log(`useEffect 호출`);
    // 뭔가 오래걸리는 작업..
  }, [location]);

  return (
    <>
      <h1>하루에 몇끼 먹어요?</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </>
  );
}
export default App;
