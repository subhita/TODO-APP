export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id ===id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updated) => {
    const updateIndex = list.findIndex(item => item.id ===updated.id)
    return [
        ...list.slice(0, updateIndex),
        updated,
        list.slice(updateIndex+1)
    ]
}