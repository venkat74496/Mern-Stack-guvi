class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerKm) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerKm = costPerKm;
    }

    setBaseFare(baseFare) {
        this.baseFare = baseFare;
    }

    setCostPerMinute(costPerMinute) {
        this.costPerMinute = costPerMinute;
    }

    setCostPerMile(costPerMile) {
        this.costPerKm = costPerKm;
    }


    calculatePrice(minutes, km) {
        const timeCost = this.costPerMinute * minutes;
        const distanceCost = this.costPerKm * km;
        const totalCost = (this.baseFare + timeCost + distanceCost);
        return totalCost;
    }
}

const calculator = new UberPriceCalculator(300, 2, 8);
const price = calculator.calculatePrice(20, 5);  
console.log(`The Uber price is Rs${price.toFixed(2)}`);
