Object.defineProperty(Object.prototype, "mergeDeepRight", {
  value: function (data) {
    const replacer = (key, value) => {
      if (Array.isArray(value)) {
        return value.join(", ");
      }
      return value;
    };

    for (let i in data) {
      if (Array.isArray(data[i]) && i in this) {
        this[i] = [...this[i], ...data[i]];
      } else if (
        typeof data[i] === "object" &&
        i in this &&
        !Array.isArray(data[i])
      ) {
        this[i].mergeDeepRight(data[i]);
      } else {
        this[i] = data[i];
      }
    }
    return JSON.stringify(this, replacer, 2);
  },
  enumerable: false,
});
const data = {
  name: "fred",
  age: 10,
  contact: {
    email: "moo@example.com",
    meta: {
      verified: true,
      tags: ["important"],
    },
  },
};

let data1 = {
  age: 40,
  contact: {
    email: "baa@example.com",
    favorite: true,
    meta: {
      tags: ["vip"],
    },
  },
};


