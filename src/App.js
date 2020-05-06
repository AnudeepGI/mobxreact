import React from 'react';

import TodoList from './TodoList';
import store from './TodoStore';

function App() {
  return (
    <div className="App">
      <TodoList store={store}/>
    </div>
  );
}

export default App;
