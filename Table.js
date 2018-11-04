function Table(x,y) {
  this.size = {
    x: x,
    y: y
  }
}

// Sets current X value
Table.prototype.Size = (x) => {
  console.log(`${this.size[x]}x${this.size[y]}`);
}

// Export
module.exports = Table;