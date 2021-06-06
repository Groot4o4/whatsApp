import React , {useEffect , useState} from "react"
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios"

function App() {

   const [messages, setMessages] = useState([]);

  useEffect(()=>{
    
    axios.get('/messages/sync')
    .then(response =>{
     
      setMessages(response.data)
    })
    });

  useEffect(()=>{
      const pusher = new Pusher('606419d7cfd69a6dd03f', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessages) => {
      alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages])

    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages])

  console.log(messages)
 
  return (
    <div className="App" >
      <div className="app_body">
      <Sidebar/>
      <Chat messages={messages}/>

      </div>
      
    </div>
  );
}

export default App;
