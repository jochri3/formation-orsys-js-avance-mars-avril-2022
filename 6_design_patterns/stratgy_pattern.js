class Fedex {
  calculatePrice(pkg) {
    // calculs fedex
    return 6.5;
  }
}

class UPS {
  calculatePrice(pkg) {
    // calculs fedex
    return 10.5;
  }
}

class USPS {
  calculatePrice(pkg) {
    // calculs fedex
    return 5.7;
  }
}

// Context
class Shipping {
  company = null;

  setStrategy(company) {
    this.company = company;
  }

  calculatePrice(pkg) {
    return this.company.calculatePrice(pkg);
  }
}

// Usage : choix de Fedex
const packg = {
  weight: 4.5,
  packageName: "Laptop",
};
const shipping = new Shipping();

shipping.setStrategy(new UPS());

console.log("Coût : " + shipping.calculatePrice(packg));
