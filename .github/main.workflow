workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm-1"]
}

action "mocha" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  args = "install"
}

action "GitHub Action for npm" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["mocha"]
  args = "install mocha"
}

action "GitHub Action for npm-1" {
  uses = "mocha"
  needs = ["GitHub Action for npm"]
  args = "mocha"
}
