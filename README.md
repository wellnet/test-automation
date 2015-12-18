# Prerequesites

- [Node.js]
- NPM
- JDK

# Setup

Clone this repository (coming soon: a way to integrate this stack into your existing build).
```sh
$ git clone https://github.com/wellnet/test-automation.git
```

Install globally gulp, karma, protractor and cucumber
```sh
$ npm install -g gulp karma protractor cucumber
```

Install node development dependencies and Selenium Server
```sh
$ node install
$ webdriver-manager update
```

# Usage

To execute JavaScript unit tests and coverage, execute the karma task
```sh
$ gulp karma
```

To execute cucumber test, start Selenium Server and execute the protractor task
```sh
$ webdriver-manager start
$ gulp protractor
```

   [node.js]: <http://nodejs.org>
