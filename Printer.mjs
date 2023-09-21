class Printer {
  constructor(ppm) {
    this.pageRate = ppm; //ppm = páginas por minuto, seria la velocidad de impresión de la impresora, se especifica a voluntad para poder analizar.
    this.currentTask = null; // Tarea actual que tiene la impresora, valor inicial null.
    this.timeRemaining = 0; // se utiliza para hacer seguimiento de cuánto tiempo falta para que una tarea de impresión actual se complete en la impresora. Si no tiene ninguna tarea, el valor es 0, si tiene una tarea, esta se calcula de acuerdo a la cantidad de hojas dividido la velocidad de impresion.
  }

  tick() {
    //Método que va reduciendo el tiempo restante para finalizar una tarea, si tenemos una tarea, se resta 1 segundo, y al llegar a 0, ya no tenemos una tarea en impresión.
    if (this.currentTask !== null) {
      this.timeRemaining -= 1;
      if (this.timeRemaining <= 0) {
        this.currentTask = null;
      }
    }
  }

  busy() {
    //Método para saber si una impresora esta procesando una impresión.
    return this.currentTask !== null;
  }

  startNext(newTask) {
    //Médoto para crear una nueva tarea y asignar el tiempo de impresión según la cantidad de hojas dividido la velocidad de impresión.
    this.currentTask = newTask;
    this.timeRemaining =
      (newTask.getPages() * 60) / this.pageRate;
  }
}

export default Printer;
