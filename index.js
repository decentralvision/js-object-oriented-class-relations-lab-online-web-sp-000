let store = { drivers: [], passengers: [], trips: []}
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
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
      function(passenger) {
        return
      }
    )
  }
}
