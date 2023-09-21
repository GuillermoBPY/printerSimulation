class Task {
  constructor(time) {
    this.timestamp = time; // Tiempo exacto en el que fue creada la tarea.
    this.pages = Math.floor(Math.random() * 20) + 1; // Cantidad de páginas que tiene una tarea, se calcula de manera aleatoria entre 1 y 20 páginas.
  }
  getStamp() {
    //Método para retornar el tiempo en el que fue creada la tarea
    return this.timestamp;
  }
  getPages() {
    //Método para retornar la cantidad de páginas de la tarea.
    return this.pages;
  }
  waitTime(currentTime) {
    //Método para retornar el tiempo de espera de la tarea en la cola de la impresora. Se resta el momento que sale de la cola menos el momento en el que fue creada.
    return currentTime - this.timestamp;
  }
}

export default Task;
