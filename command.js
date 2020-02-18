let invoker = {
  add: function(x, y) {
    return x + y;
  },
  subtract: function(x, y) {
    return x - y;
  }
};

let manager = {
  commands: [],
  execute(name, ...rest) {
    if (invoker[name]) {
      this.commands.push(name);
      return invoker[name](...rest);
    }
    return false;
  }
};

console.log(manager.execute("add", 3, 5)); // 8
console.log(manager.execute("subtract", 5, 3)); // 2
console.log(manager.execute("mult", 10, 3)); // false
console.log(manager.commands); // ['add', 'subtract']
