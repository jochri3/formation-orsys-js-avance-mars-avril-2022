const CONSTANTES = Object.freeze({
  DEVELOPER: "developer",
  TESTER: "tester",
  IMAGE: "image",
  VIDEO: "video",
});

class Personne {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
}

class Developer extends Personne {
  constructor(fname, lname, age) {
    super(fname, lname, age);
    this.type = CONSTANTES.DEVELOPER;
  }
}

class Tester {
  constructor(fname, lname, age) {
    super(fname, lname, age);
    this.type = CONSTANTES.TESTER;
  }
}

class EmployeeFactory {
  create(name, type) {
    if (type === CONSTANTES.DEVELOPER) {
      return new Developer(name);
    } else {
      return new Tester(name);
    }
  }
}

const employeeFactory = new EmployeeFactory();

const employees = [];

employees.push(
  employeeFactory.create("Christian Lisangola", CONSTANTES.DEVELOPER)
);
employees.push(employeeFactory.create("Xavier", CONSTANTES.TESTER));
employees.push(employeeFactory.create("Anass L", CONSTANTES.TESTER));
employees.push(employeeFactory.create("Damien Le Guen", CONSTANTES.DEVELOPER));

// Medias

const medias = [
  { id: 1, author: "Jean", title: "Toto", image: "toto.jpg" },
  { id: 2, author: "Xavier", title: "Ma photo", image: "xavier.jpg" },
  { id: 3, author: "Chris", title: "Ma video", video: "moi.mp4" },
];
class Media {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class Image extends Media {
  constructor(id, title, author, image) {
    super(id, title, author);
    // this.image = image;
    this.mediaURL = image;
  }
}

class Video extends Media {
  constructor(id, title, author, video) {
    super(id, title, author);
    // this.video = video;
    this.mediaURL = video;
  }
}

class MediaFactory {
  create(media) {
    if (media[CONSTANTES.IMAGE]) {
      return new Image(media.id, media.title, media.author, media.image);
    } else {
      return new Video(media.id, media.title, media.author, media.video);
    }
  }
}
