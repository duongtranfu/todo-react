import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList';
import SovosThemeProvider from 's1-ui/sovos-theme-provider';

import SovosDatePicker from 's1-ui/sovos-datepicker';

const App = () => (
  <SovosThemeProvider>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </SovosThemeProvider>
)

export default App
