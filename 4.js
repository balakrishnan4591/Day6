// 4. Write a class to calculate the Uber price.

class uberPriceCalculator {
  constructor(distance, waitingTime) {
    this.distance = distance;
    this.waitingTime = waitingTime;
  }
  calcWaitingCharge() {
    var waitingCharge = 0;
    const defaultWaitCharge = 0.25; // set waiting charge as 0.25 Ruppes for every 2 mins

    if (this.waitingTime > 0) {
      waitingCharge = defaultWaitCharge * (this.waitingTime / 2);
    }

    return waitingCharge;
  }

  calculate() {
    const baseFare = 20; //set a base fare - Values mentioned in Rupees
    const stdFarePerKm = 4; // set a standard price for 1 KM

    var totalFare = 0;

    if (this.distance < 5) {
      totalFare += baseFare;
    } else if (this.distance > 50) {
      //offer a discount if the total KM is more than 50 KMs
      totalFare += (stdFarePerKm - 0.5) * this.distance;
    } else if (this.distance < 50) {
      totalFare += stdFarePerKm * this.distance;
    } else {
      console.log("Enter a valid data");
    }
    var res = `Total Distance Travelled is ${
      this.distance
    }kms and with Rupees ${this.calcWaitingCharge()} waiting charge & the Total Fare is ${
      totalFare + this.calcWaitingCharge()
    } Rupees `;
    return res;
  }
}

var uberFare = new uberPriceCalculator(51, 0); // Input arguments (distance in kilometers, waitingtime in mins) | sample I/P:  (8,0), (3,0),(56,3)
console.log(uberFare.calculate());
