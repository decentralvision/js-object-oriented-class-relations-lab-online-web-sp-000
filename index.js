let store = { drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.id = driverId++
    this.name = name
    store.drivers.push(this)
  }
  trips() {
    return trips.filter(
      function(trip) {
        return trip.driverId === this.id
      }.bind(this)
    )
  }
  passengers() {
    return this.trips().passengers.filter(
    }
      function(passenger) {
        return
      }
    )
}
