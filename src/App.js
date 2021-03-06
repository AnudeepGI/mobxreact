import React from 'react';

import TodoList from './Components/Todo';
import store from './Store/TodoStore';

function App() {
  return (
    <div className="App">
      <TodoList store={store}/>
    </div>
  );
}

export default App;
