workflow "New workflow" {
  on = "push"
  resolves = ["Mocha"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Test" {
  uses = "actions/npm@master"
  needs = ["Build"]
  args = "install mocha"
}

action "Mocha" {
  uses = "actions/npm@master"
  needs = ["Test"]
  runs = "mocha"
}
