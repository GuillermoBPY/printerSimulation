import Queue from "./Queue.mjs";
import Task from "./Task.mjs";
import Printer from "./Printer.mjs";

//Función para simular una cola de impresión. Recibe el rango de tiempo en el cual se desea analizar la simulación y la velocidad de impresión de páginas por minuto (ppm)
function simulation(numSeconds, pagesPerMinute) {
  const labPrinter = new Printer(pagesPerMinute); //Instancia de Printer, donde se le pasa la velocidad de impresión por minuto.
  const printQueue = new Queue(); //Instancia de cola de impresión.
  const waitingTimes = []; //Variable donde iremos guardando los tiempos de espera para luego realizar el promedio.

  //Bucle para simular el tiempo en el cual se analiza la simulación.
  for (
    let currentSecond = 0;
    currentSecond < numSeconds;
    currentSecond++
  ) {
    //En este bloque se analizar la probabilidad de generar una tarea, con probabilidad de 1/180. Si se recibe un true, se crea una instancia de tarea, donde se le pasa el tiempo de la simulación donde fue creada la misma y se envia a la cola de impresión.
    if (newPrintTask()) {
      const task = new Task(currentSecond);
      printQueue.enqueue(task);
    }

    //En este bloque, se verifica si la impresora NO esta ocupada y si la cola de impresión no esta vacía. Si no esta ocupada, significa que esta libre para inciar una siguiente impresión, y si la cola no esta vacía, significa que aun tenemos tareas que imprimir. Por lo que se genera una nueva tarea, y se envia en el arreglo de waitingTimes con el tiempo actual de la simulación en la que paso a ser immpresa.
    if (!labPrinter.busy() && !printQueue.isEmpty()) {
      const nextTask = printQueue.dequeue();
      waitingTimes.push(nextTask.waitTime(currentSecond));
      labPrinter.startNext(nextTask);
    }

    labPrinter.tick(); //Método que va reduciendo el tiempo restante para finalizar una tarea
  }

  //Una vez finalizado nuestro bucle de simulación, se realiza el promedio del tiempo de espera de las tareas y se verifique si queda tarea pendiente al finalizar la simulación.
  const averageWait =
    waitingTimes.reduce((sum, time) => sum + time, 0) /
    waitingTimes.length;
  console.log(
    `Average Wait ${averageWait.toFixed(
      2
    )} secs ${printQueue.size()} tasks remaining.`
  );
}

//Función para verificar si creamos una tarea o no, si el resultado es 180 se crea una tarea, caso contrario no.
function newPrintTask() {
  const num = Math.floor(Math.random() * 180) + 1;
  return num === 180;
}

//Bucle para iniciar la función de simulación, se le pasa el rango de tiempo que se quiere analizar y la velocidad de impresión de nuestra impresora.
for (let i = 0; i < 10; i++) {
  simulation(3600, 5);
}
