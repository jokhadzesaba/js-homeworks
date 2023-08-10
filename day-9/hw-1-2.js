class DB {
  #map = new Map();
  #id = 0;
  #allUser = [];
  #idContainer = [];
  create(obj) {
    this.#objValidation(obj);
    this.#keyValidatiion(obj);
    this.#valueValidation(obj, "name", "country", "string");
    this.#valueValidation(obj, "age", "salary", "number");
    this.#id++;
    this.#map.set(this.#id, obj);
    obj.id = this.#id;
    this.#allUser.push(obj);
    this.#idContainer.push(this.#id);
    return this.#id.toString();
  }
  read(id) {
    if (typeof id === "undefined") {
      throw new Error("please pass the ID");
    }
    this.#idValidation(id);
    id = parseInt(id);
    if (!this.#map.has(id)) {
      return null;
    }
    return this.#map.get(id);
  }
  readAll() {
    if (arguments.length > 0) {
      throw new TypeError("this function does not need argument");
    }
    return this.#allUser;
  }
  update(id, obj) {
    this.#idValidation(id);
    this.#objValidation(obj);
    for (let i of Object.getOwnPropertyNames(obj)) {
      if (i !== "name" && i !== "age" && i !== "country" && i !== "salary") {
        throw new Error(`${i} is not valid`);
      }
    }
    id = parseInt(id);
    if (!this.#idContainer.includes(id)) {
      throw new Error("no such an Id exists");
    }
    this.#valueValidation(obj, "name", "country", "string");
    this.#valueValidation(obj, "age", "salary", "number");
    for (let i of Object.getOwnPropertyNames(obj)) {
      this.#map.get(id)[i] = obj[i];
    }
    return this.#map.get(id);
  }
  delete(id) {
    this.#idValidation(id);
    id = parseInt(id);
    if (!this.#idContainer.includes(id)) {
      throw new Error("this id does not exist");
    }
    this.#allUser = this.#allUser.filter((user) => user.id !== id);
    this.#map.delete(id);
    this.#idContainer = this.#idContainer.filter((el) => el !== id);
    return true;
  }

  find(obj) {
    let filtered = [];
    this.#objValidation(obj);
    this.#queryValidation(obj);
    for (let i of Object.getOwnPropertyNames(obj)) {
      if (i !== "name" && i !== "age" && i !== "country" && i !== "salary") {
        throw new Error(
          "please do not enter anything apart from name, age, country and salary"
        );
      }
    }
    for (let user of this.#map.values()) {
      if (
        (!obj.name || user.name === obj.name) &&
        (!obj.country || user.country === obj.country) &&
        this.#checkAge(user.age, obj.age) &&
        this.#checkSalary(user.salary, obj.salary)
      ) {
        filtered.push(user);
      }
    }
    return filtered;
  }
  #checkAge(userAge, queryAge) {
    if (!queryAge) return true;
    if (queryAge.min && userAge < queryAge.min) return false;
    if (queryAge.max && userAge > queryAge.max) return false;
    return true;
  }

  #queryValidation(query) {
    if (typeof query !== "object") {
      throw new Error("Query must be an object");
    }
    if (query.hasOwnProperty("name")) {
      if (typeof query["name"] !== "string") {
        throw new Error(`please enter string for name`);
      }
    }
    if (query.hasOwnProperty("country")) {
      if (typeof query["country"] !== "string") {
        throw new Error(`please enter string for country`);
      }
    }

    if (query.hasOwnProperty("country")) {
      if (typeof query["country"] !== "string") {
        throw new Error("please enter string for country");
      }
    }
    if (query.hasOwnProperty("age")) {
      this.#objValidation(query["age"]);
      this.#ageAndSalaryValidation(Object.keys(query.age), "age", query);
    }
    if (query.hasOwnProperty("salary")) {
      this.#objValidation(query["salary"]);
      this.#ageAndSalaryValidation(Object.keys(query.salary), "salary", query);
    }
  }
  #ageAndSalaryValidation(objKeys, ageOrSalary, query) {
    const properties = objKeys;
    if (!(properties.includes("min") || properties.includes("max"))) {
      throw new Error(`${ageOrSalary} object must contain min, max, or both`);
    }
    if (
      properties.length > 2 ||
      (properties.length === 1 &&
        properties[0] !== "min" &&
        properties[0] !== "max")
    ) {
      throw new Error(
        `${ageOrSalary} object must only contain min, max, or both`
      );
    }
    if (
      query[ageOrSalary].hasOwnProperty("min") &&
      typeof query[ageOrSalary].min !== "number"
    ) {
      throw new Error(
        `min property inside ${ageOrSalary} object must be a number`
      );
    }
    if (
      query[ageOrSalary].hasOwnProperty("max") &&
      typeof query[ageOrSalary].max !== "number"
    ) {
      throw new Error(
        `max property inside ${ageOrSalary} object must be a number`
      );
    }
    if (
      query[ageOrSalary].hasOwnProperty("min") &&
      query[ageOrSalary].min <= 0
    ) {
      throw new Error(
        `min property inside ${ageOrSalary} object must be greater than 0`
      );
    }

    if (
      query[ageOrSalary].hasOwnProperty("max") &&
      query[ageOrSalary].max <= 0
    ) {
      throw new Error(
        `max property inside ${ageOrSalary} object must be greater than 0`
      );
    }
  }
  #checkSalary(userSalary, querySalary) {
    if (!querySalary) return true;
    if (querySalary.min && userSalary < querySalary.min) return false;
    if (querySalary.max && userSalary > querySalary.max) return false;
    return true;
  }

  #objValidation(obj) {
    if (typeof obj !== "object") {
      throw new TypeError("not an object");
    }
  }
  #keyValidatiion(obj) {
    if (
      !Object.getOwnPropertyNames(obj).includes("name") ||
      !Object.getOwnPropertyNames(obj).includes("country") ||
      !Object.getOwnPropertyNames(obj).includes("age") ||
      !Object.getOwnPropertyNames(obj).includes("salary")
    ) {
      throw new Error("user must contain name, age , country and salary");
    }
  }
  #idValidation(id) {
    if (typeof id !== "string") {
      throw new Error("please enter a String");
    }
  }
  #valueValidation(obj, key, secondKey, type) {
    for (let i of Object.getOwnPropertyNames(obj)) {
      if (
        (i === `${key}` || i === `${secondKey}`) &&
        typeof obj[i] !== `${type}`
      ) {
        throw new Error(
          "name and countrty must be string, age and salary must be number"
        );
      }
    }
  }
}
