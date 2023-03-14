// ======== GET ALL TASKS ========

const getAllTasksXHR = (name = '', isImportant = false, isCompleted = false) => {
  let promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://intership-liga.ru/tasks?name_like=${name}&isImportant=${isImportant}&isCompleted=${isCompleted}`)
    xhr.responseType = 'json'
    xhr.onload = () => resolve(xhr.response)
    xhr.onerror = () => reject(xhr.status)
    xhr.send()
  })
  promise
    .then((data) => {
      console.groupCollapsed('All tasks by XHR:')
      console.log(data)
      console.groupEnd()
    })
    .catch((error) => console.log(error))
}

// ======== GET TASK BY ID ========

const getTaskByIdXHR = (taskId) => {
  let promise = new Promise((resolve, reject) =>{
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://intership-liga.ru/tasks/${taskId}`)
    xhr.responseType = 'json'
    xhr.onload = () => resolve(xhr.response)
    xhr.onerror = () => reject(xhr.status)
    xhr.send()
  })

  promise
    .then((data) => {
      console.groupCollapsed('Single task by XHR:')
      console.log(data)
      console.groupEnd()
    })
    .catch((error) => console.log(error))
}

// ======== POST NEW TASK ========

const postNewTaskXHR = (name, info, isImportant = false) => {
  let json = JSON.stringify({
    'name': name,
    'info': info,
    'isImportant': isImportant 
  })
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://intership-liga.ru/tasks')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.upload.onload = () => resolve(JSON.parse(json))
    xhr.upload.onerror = () => reject(xhr.status)
    xhr.send(json)
  })

  promise
    .then((data) => {
      console.groupCollapsed('Post by XHR:')
      console.log(data)
      console.groupEnd()
    })
    .catch((error) => console.log(error))
}

// ======== UPDATE TASK ========

const updateTaskXHR = (taskId) => {
  let json = JSON.stringify({
    'name': 'patched task by XHR',
    'info': 'Lorem ipsum dolor sit amet',
    'isImportant': false,
    'isCompleted': true
  })
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('PATCH', `https://intership-liga.ru/tasks/${taskId}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.upload.onload = () => resolve(JSON.parse(json))
    xhr.upload.onerror = () => reject(xhr.status)
    xhr.send(json)
  })

  promise
    .then((data) => {
      console.groupCollapsed('Update task by XHR:')
      console.log(data)
      console.groupEnd()
    })
}

// ======== DELETE TASK ========

// const deleteTaskXHR = (taskId) => {
//   let promise = new Promise ((resolve, reject) => {
//     let xhr = new XMLHttpRequest()
//     xhr.open('DELETE', `https://intership-liga.ru/tasks/${taskId}`)
//     xhr.onload = () => resolve(console.log('uspeh promise resolve'))
//     xhr.onerror = () => reject(xhr.status)
//     xhr.send()
//   })

//   promise
//     .then((data) => {
//       console.groupCollapsed('Delete task by XHR:')
//       console.log('uspeh promise then')
//       console.groupEnd()
//     })
//     .catch((error) => console.log(error))
// }

// getAllTasksXHR('Wash dishes', true)
// getTaskByIdXHR(1066)
// postNewTaskXHR('Съесть роллы', 'Не такое уж и важное задание')
// updateTaskXHR(1474)
// deleteTaskXHR(1485)