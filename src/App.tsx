import { Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import InitPage from './pages/InitPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<InitPage/>}></Route>
        <Route path="chat" element={<ChatPage/>} />
      </Routes>
    </div>
  );
}

export default App;
