import { create } from 'zustand';

const useStore = create(set => ({
  user: null,
  users: [],
  todos: [],
  login: (username) => set({ user: username }),
  logout: () => set({ user: null }),
  // addUser: (username) => set(state => ({ users: [...state.users, username] })),
  addTodo: (todo) => set(state => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
  setTodos: (todos) => set({ todos }),
  setUsers: (users) => set({ users }),

  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo)})),

    addUser: (username) => set((state) => ({
      users: [...state.users, { id: Date.now(), username }] })),

}));

export default useStore;

// Local storage utility functions
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Subscribe to store changes and persist to local storage
useStore.subscribe((state) => {
  saveToLocalStorage('todos', state.todos);
  saveToLocalStorage('users', state.users);
  saveToLocalStorage('user', state.user);
});

// Load initial state from local storage
const storedTodos = loadFromLocalStorage('todos');
const storedUsers = loadFromLocalStorage('users');
const storedUser = loadFromLocalStorage('user');

if (storedTodos) {
  useStore.getState().setTodos(storedTodos);
}

if (storedUsers) {
  useStore.getState().setUsers(storedUsers);
}

if (storedUser) {
  useStore.getState().login(storedUser);
}
