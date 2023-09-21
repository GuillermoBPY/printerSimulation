class Queue {
  constructor() {
    //El valor inicial de la cola es un arreglo vacio.
    this.items = [];
  }

  enqueue(item) {
    //Método para agregar un item a la cola.
    this.items.push(item);
  }

  dequeue() {
    //Método para eliminar el primer elemento de la cola y retornar el mismo.
    return this.items.shift();
  }

  isEmpty() {
    //Método para saber si la cola esta vacía.
    return this.items.length === 0;
  }

  size() {
    //Método para saber la cantidad de items que tiene la cola.
    return this.items.length;
  }
}

export default Queue;
