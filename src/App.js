import { BrowserRouter, Route } from 'react-router-dom';
import Editor from './pages/Editor';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Editor}></Route>
    </BrowserRouter>
  );
}

export default App;
