import React from 'react';
import SovosThemeProvider from 's1-ui/sovos-theme-provider';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import PeopleContainer from '../containers/peoples.container';

// hoc
import HocHead1 from './HocHead1';
import HocHead2 from './HocHead2';
import HocClickWrapper from '../hocs/HocClickWrapper';

import ClassList from './ClassList';
import ProductList from './ProductList';
import HocCountList from '../hocs/countList.hocs';

const NewHead1 = HocClickWrapper(HocHead1);
const NewHead2 = HocClickWrapper(HocHead2);

// hoc abstract state

const NewClassList = HocCountList(ClassList, ['a1', 'a2', 'a3']);
const NewProductList = HocCountList(ProductList, ['Apple', 'Nokia', 'Iphone', 'Samsung']);

const App = () => (
  <SovosThemeProvider>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <PeopleContainer />
      <h1>Head 1</h1>
      <NewHead1 />
      <h1>Head 2</h1>
      <NewHead2 />
      <hr></hr>
      <h1>Abstract state</h1>
      <NewClassList />
      <NewProductList />
    </div>
  </SovosThemeProvider>
)

export default App
