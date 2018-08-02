class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratingss() {
    return this._ratings;
  }
  set isCheckedOut(newStatus) {
    if(typeof newStatus === 'boolean') {
      this._isCheckedOut = newStatus;
    } else {
      console.log('ERROR! INVALID ENTRY -- isCheckedOut');
    }
  }
  toggleCheckOutStatus() {
    if(this._isCheckedOut === true) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }
  getAverageRating() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const rating = this._ratings.reduce(reducer) / this._ratings.length
    return (Math.round(rating*100)) / 100;
  }
  addRating(rating) {
    this._ratings.push(rating);
  }
}


class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

