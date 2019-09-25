'use strict'

class AnimalShelter {
  constructor() {
    this.queuestorage = New LinkedList();
    this.front = this.queuestorage.head;
  }

  enqueue(animal) {
    if (animal.value === 'dog' || 'cat') {
      this.queuestorage.insertAtHead(animal)
    } else {
      return null;
    }
  }

  dequeue(pref) {
    let current = this.head;
    if (pref.value === current.value) {
      previous.next = null;
      return current.value
    }
    if (pref.value !== current.value) {
      previous.next = null;
      previous = this.head;
    }
    if (pref.value = null) {
      return this.head.value;
    }
  }
}