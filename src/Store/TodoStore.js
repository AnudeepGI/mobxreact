import {  observable, computed, action, when  } from 'mobx';

import Todo from '../Models/TodoModel';

class TodoStore {
    @observable todos = [];
    @observable filter = "";
    
    constructor(value){
        when(
            () => this.totalTask >= 10,
            () => alert("Now your Task is more than 10")
        )

        this.getVal()

    }

   @action getVal(){
       fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {
            json.slice(0, 5).forEach(element => {
                this.todos.push(new Todo([element.title]));
            });
        })
    }

    @computed get filteredTodos(){
        var matchesFilter = new RegExp(this.filter,"i")
        return this.todos.filter( todo => !this.filter || matchesFilter.test(todo.value) )
    }

    @computed get totalTask() {
        return this.todos.length;
    }

    @action createTodo(value){
        this.todos.push(new Todo(value));
    }

    @action chnageStatus(todo){
        todo.complete = !todo.complete
    }

    @action clearComplete = () => {
        const inCompleteTodos = this.todos.filter(todo => !todo.complete)
        this.todos.replace(inCompleteTodos);
    }

}

var store = window.store = new TodoStore();

export default store