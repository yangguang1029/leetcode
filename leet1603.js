/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    this.types = [0, big, medium, small]
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    let c = this.types[carType]
    if(c > 0) {
        this.types[carType] = c - 1
        return true
    }
    return false
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */