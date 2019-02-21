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
import IICountList from '../hocs/IICountList.hoc';

import ClassList from './ClassList';
import ProductList from './ProductList';
import HocCountList from '../hocs/countList.hocs';

// Refs
import RefsCustomInput from './RefsCustomInput';
import RefsAutoFocusTextInput from './RefsAutoFocusTextInput';

const NewHead1 = HocClickWrapper(HocHead1);
const NewHead2 = HocClickWrapper(HocHead2);


const NewClassList = HocCountList(['a1', 'a2', 'a3'])(ClassList);
const NewProductList = HocCountList(['Apple', 'Nokia', 'Iphone', 'Samsung'])(ProductList);
const NewProductList1 = IICountList(ProductList);

const App = () => (
  <SovosThemeProvider>
    <div>
      {/* <AddTodo />
      <VisibleTodoList />
      <Footer />
      <PeopleContainer />
      <h1>Head 1</h1>
      <NewHead1 />
      <h1>Head 2</h1>
      <NewHead2 />
      <hr></hr>
      <h1>Add props count</h1>
      <NewClassList />
      <NewProductList />
      <hr />
      <NewProductList1 data={{ list: ['Apple', 'Nokia', 'Iphone', 'Samsung'] }} /> */}
      <RefsAutoFocusTextInput />
    </div>
  </SovosThemeProvider>
)

export default App
