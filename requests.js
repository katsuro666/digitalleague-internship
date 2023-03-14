// ======== GET ALL TASKS ========

const getAll = async () => {
  const response = await fetch(`https://intership-liga.ru/tasks`)
  if (!response.ok) {
    console.log(`Ошибка ${response.status}`)
    return
  }
  const data = await response.json()
  console.groupCollapsed('ALL TASKS:')
  console.log(data)
  console.groupEnd()
}

const getAllTasks = async (name = '', isImportant = false, isCompleted = false) => {
  const response = await fetch(`https://intership-liga.ru/tasks?name_like=${name}&isImportant=${isImportant}&isCompleted=${isCompleted}`)
  if (!response.ok) {
    console.log(`Ошибка ${response.status}`)
    return
  }
  const data = await response.json()
  console.groupCollapsed('All tasks:')
  console.log(data)
  console.groupEnd()
}

// ======== GET TASK BY ID ========

const getTaskById = async (taskId) => {
  const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`)
  if (!response.ok) {
    console.log(`Ошибка ${response.status}`)
    return
  }
  const data = await response.json()
  console.groupCollapsed('Single task:')
  console.log(data)
  console.groupEnd()
}

// ======== POST NEW TASK ========

const postNewTask = async (name, info, isImportant = false) => {
  const response = await fetch('https://intership-liga.ru/tasks', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      'name': name,
      'info': info,
      'isImportant': isImportant 
    })
  })

  const data = await response.json()
  console.groupCollapsed('Post:')
  console.log(data)
  console.groupEnd()
}

// ======== UPDATE TASK ========

const updateTask = async (taskId) => {
  const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'patched task',
      'info': 'Lorem ipsum',
      'isImportant': false,
      'isCompleted': true
    })
  })

  const data = await response.json()
  console.groupCollapsed('Update task:')
  console.log(data)
  console.groupEnd()
}

// ======== DELETE TASK ========

const deleteTask = async (taskId) => {
  const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    console.log(`При удалении произошла ошибка ${response.status}`)
    return
  }

  console.groupCollapsed('Delete task:')
  console.log(`Задание ${taskId} успешно удалено`)
  console.groupEnd()
}

// getAllTasks('Wash dishes', true)
// getAll()
// getTaskById(106)
// postNewTask('Съесть пиццу', 'Очень важное задание', true)
// updateTask(1475)
// deleteTask(1483)