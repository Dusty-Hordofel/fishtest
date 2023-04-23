// Define Photographer class
class Photographer {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._portrait = data.portrait;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
    this._tags = data.tags;
  }
  //use getters to retrieve data
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get portrait() {
    return this._portrait;
  }

  get city() {
    return this._city;
  }

  get country() {
    return this._country;
  }

  get tagline() {
    return this._tagline;
  }

  get price() {
    return this._price;
  }

  get tags() {
    return this._tags;
  }
}
// class Photographer {
//   constructor(photographers) {
//     this._id = photographers.id;
//     this._name = photographers.name;
//     this._portrait = photographers.portrait;
//     this._city = photographers.city;
//     this._country = photographers.country;
//     this._tagline = photographers.tagline;
//     this._price = photographers.price;
//     this._tags = photographers.tags;
//   }

//   get id() {
//     return this._id;
//   }

//   get name() {
//     return this._name;
//   }

//   get portrait() {
//     return this._portrait;
//   }

//   get city() {
//     return this._city;
//   }

//   get country() {
//     return this._country;
//   }

//   get tagline() {
//     return this._tagline;
//   }

//   get price() {
//     return this._price;
//   }

//   get tags() {
//     return this._tags;
//   }
// }
