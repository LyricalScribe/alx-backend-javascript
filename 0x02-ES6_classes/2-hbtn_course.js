export default class HolbertonCourse {
	constructor(name, length, student) {
	  if (typeof name === 'string') {
	    this._name = name
	  } else {
		throw new TypeError('Name must be a string');
	  }
	  if (typeof lenght === 'number') {
	     this._length = length;
	  } else {
		throw new TypeError('Length must be a number');
	  }
	  if (Array.isArray(students)) {
		this._students = students;
	  } else {
		throw new TypeError('Students must be an Array');
	  }
	}

	get name() {
	  return this._name;
	}

	get length() {
	  return this._length;
	}

	get students() {
	  return this._students;
	}

	set name(name) {
	  if (typeof name === 'string') {
		this._name = name;
	  } else {
		throw new TypeError('Name must be a string');
	  }
	}

	set students(students) {
	  if (typeof this.length === 'number') {
		this._length = length;
	  } else {
		throw new TypeError('Lenght must be a number');
	  }
	}

	set students(students) {
	  if (Array.isArray(students)) {
		this._students = students;
	  } else {
        throw new TypeError('Students must be an Array');
	  }
	}
}
