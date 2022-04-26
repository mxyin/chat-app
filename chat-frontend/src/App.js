import './App.scss';
import Login from './components/Auth/Login.js'
import Register from './components/Auth/Register.js'
import Chat from './components/Chat/Chat.js'
import NotFound from './components/NotFound.js'
import ProtectedRouter from './components/Router/ProtectedRouter.js'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmile, faImage } from '@fortawesome/free-regular-svg-icons'
import { faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell } from '@fortawesome/free-solid-svg-icons'
library.add(faSmile, faImage, faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*'  element={<NotFound />} />
          <Route path='/'  element={<ProtectedRouter><Chat /></ProtectedRouter>} />
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
