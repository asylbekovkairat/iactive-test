import './App.css';
import MassageBlock from './component/MassageBlock';
import { useEffect, useState } from "react";
import axios from "axios"
import { url } from './Api/Api';


function App() {
  const [masseges, setMassages] = useState([])

  useEffect(() => {
    const data = new FormData();
    data.append("actionName", "MessagesLoad")
    axios.post(url, data)
    .then((res) => {
      setMassages(res.data.Messages)
    })
  }, [])

  return (
    <>
    <div className="massagesBlocks_wrapper">
      {
        masseges.map((item) =><MassageBlock key={item.id} {...item}/> )
      } 
    </div>
    </>
  );
}

export default App;
