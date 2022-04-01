class Personne {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }

  sePresenter() {
    return "Je me présente";
  }
}

export default Personne;
