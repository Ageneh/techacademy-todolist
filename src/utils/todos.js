const uuidv4 = require('uuid/v4');

export const createTodo = (title) => ({
    title,
    id: uuidv4(),
    completed: false,
});

export const toLocalStorage = (key, val) => {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(val));
}

export const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
