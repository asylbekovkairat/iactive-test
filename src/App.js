import "./App.css";
import MassageBlock from "./component/MassageBlock";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [masseges, setMassages] = useState([]);

  const messegesData = () => {
    const data = new FormData();
    data.append("actionName", "MessagesLoad");
    axios.post(data).then((res) => {
      const sorted = res.data.Messages.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setMassages(sorted);
    });
  };

  useEffect(() => {
    messegesData();
  }, []);

  return (
    <>
      <div className="massagesBlocks_wrapper">
        {masseges.map((item) => (
          <MassageBlock key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
