<template>
  <section class='real-app'>
    <input type="text" class="add-input" autofocus="autofocus" placeholder="说点什么吧。。。" @keyup.enter="addTodo">
    <item :todo="todo" v-for='todo in filterTodos' :key="todo.id" @del="deleteTodo" @complete="completeTodo" />
    <tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAllCompleted="clearAllCompleted" @save="save"/>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
import storage from "../model/storage.js";

export default {
  data() {
    return {
      todos: [],
      filter: "all",
      id:0
    };
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filterTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    addTodo(e) {
      if (e.target.value) {
        this.todos.unshift({
          id: this.id++,
          content: e.target.value.trim(),
          completed: false
        });
        e.target.value = "";
        console.log(this.todos, this.id)
        storage.set("todos", this.todos)
        storage.setId("id", this.id)
      } else {
        console.log("为空")
      }
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
      // this.todos.splice(e,1)
      storage.set("todos", this.todos)
      storage.setId("id", this.id)
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      console.log("clearAll")
      this.todos = this.todos.filter(todo => !todo.completed);
      storage.clearAll()
      this.todos = []
    },
    save() {
      console.log(this.todos,this.id)
    },
    completeTodo(item) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === item[0]), 1, {
        id: item[0],
        content: item[1],
        completed: true
      });
      storage.set("todos", this.todos)
    }
  },
  mounted() {
    var todos = storage.get('todos');
    var id = storage.getId('id');
    if (todos) {
      this.todos = todos
    }
    if (id) {
      this.id = id
    }
  },
};
</script>

<style lang="scss" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  // font-smoothing: antialiased;
  padding: 16px 16px 16px 36px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>

