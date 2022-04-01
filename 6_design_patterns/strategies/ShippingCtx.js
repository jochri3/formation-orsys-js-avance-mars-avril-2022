class ShippingCtx {
  company = null;

  setStrategy(company) {
    this.company = company;
  }

  calculatePrice(pkg) {
    return this.company.calculatePrice(pkg);
  }
}

export default ShippingCtx;
