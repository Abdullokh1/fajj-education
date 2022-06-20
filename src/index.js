import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GroupContext from './Store/GroupContext/GroupContext';
import StudentsContext from './Store/StudentsContext/StudentsContext';
import TeacherContext from './Store/TeacherContext/TeacherContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GroupContext>
      <StudentsContext>
        <TeacherContext>
          <App />
        </TeacherContext>
      </StudentsContext>
    </GroupContext>
  </BrowserRouter>
);


