import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import EntryField from './pages/EntryField/EntryField.jsx';
import RegistrationField from './pages/RegistrationField/RegistrationField.jsx';
import NewPasswordField from './pages/NewPasswrodField/NewPasswordField.jsx';
import NewPasswordFieldAnswer from './pages/NewPasswrodFieldAnswer/NewPasswordFieldAnswer';

import QuestionsPage from './pages/QuestionsPage/QuestionsPage.jsx';
import WorkSpace from './pages/WorkSpace/WorkSpace.jsx';


import './App.css';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
      </style>
      <Router>
        <Routes>
          <Route path="/" element={<EntryField />} />
          <Route path="/registrationField" element={<RegistrationField />} />
          <Route path="/newPasswordField" element={<NewPasswordField />} />
          <Route path="/newPasswordFieldAnswer" element={<NewPasswordFieldAnswer />} />
          <Route path="/user/questions" element={<QuestionsPage />} />
          <Route path="/user/workSpace" element={<WorkSpace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
