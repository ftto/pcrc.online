import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joinUrl, setJoinUrl] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://api.pcrc.online/status")
      .then((res) => res.json())
      .then((res) => {
        setJoinUrl(res.joinUrl);
        setStatus(res.status);
      });
  }, []);

  return (
    <div className="App">
      status: {status}
      <br />
      {status === "started" && <a href={joinUrl}>참여하기</a>}
    </div>
  );
}

export default App;
