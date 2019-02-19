import React from 'react';
import SovosThemeProvider from 's1-ui/sovos-theme-provider';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import PeopleContainer from '../containers/peoples.container';

const App = () => (
  <SovosThemeProvider>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <PeopleContainer />
    </div>
  </SovosThemeProvider>
)

export default App
