let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor (name) {
    this.id = driverId++
    this.name = name
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers() {
    return store.passengers.filter(passengers => {
      return passengers
    })
  }
}

let passengerId = 0

class Passenger {
  constructor (name) {
    this.id = passengerId++
    this.name = name
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver()
    })
  }
}

let tripId = 0

class Trip {
  constructor (driver, passenger) {
    this.id = tripId++
    store.trips.push(this)
    this.driverId = driver.id
    this.passengerId = passenger.id
  }
  driver() {
    return store.drivers.find (driver => {
      return driver
    })
  }
  passenger() {
    return store.passengers.find (passenger => {
      return passenger
    })
  }
}
