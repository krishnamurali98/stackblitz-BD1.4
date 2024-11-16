const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our services!';
}

app.get('/', (req, res) => {
  res.send(getWelcomeMessage());
});

// Question - 1
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetMessage(name) {
  return 'Hello, ' + name;
}

// Question - 2
app.get('/greet', (req, res) => {
  let name = req.query.name;
  res.send(getGreetMessage(name));
});

function checkPassword(password) {
  if (password.length > 15) return 'Password is strong';
  else return 'Password is week';
}

// Question - 3
app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function sumTwoNumbers(a, b) {
  let sum = a + b;
  return sum.toString();
}

// Question - 4
app.get('/sum', (req, res) => {
  let sum1 = parseFloat(req.query.sum1);
  let sum2 = parseFloat(req.query.sum2);
  res.send(sumTwoNumbers(sum1, sum2));
});

function checkSubscription(name, isSubscribed) {
  if (isSubscribed) return name + ' is subscribed';
  return name + ' is not subscribed';
}

// Question - 5
app.get('/subscription-status', (req, res) => {
  let name = req.query.name;
  let isSubscribed = req.query.isSubscribed === 'true';
  res.send(checkSubscription(name, isSubscribed));
});

function calculateDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice.toString();
}

// Question - 6
app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscountedPrice(price, discount));
});

function getGreeting(age, gender, name) {
  return 'Hello, ' + name + '!, you are a ' + age + ' old ' + gender;
}

// Question - 7
app.get('/personalized-greeting', (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getGreeting(age, gender, name));
});

function finalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);

  return finalPrice.toString();
}

// Question - 8
app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(finalPrice(price, discount, tax));
});

function sumThreeNumbers(a, b, c) {
  let sum = a + b + c;
  return sum.toString();
}

// Question - 9
app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(sumThreeNumbers(running, cycling, swimming));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
