const uuidv4 = require('uuid/v4');

export const createTodo = (title) => ({
    title,
    id: uuidv4(),
    completed: false,
});