const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("User is on page1 {string}", async function (string) {
  // Открываем страницу
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 50000,
  });
});
When("The user selects the desired day1", async function () {
  // Нужный день
  return await clickElement(this.page, ".page-nav__day:last-child");
});
Then ("The user selects the desired movie1", async function () {
  //нужный фильм
  return await clickElement (
    this.page,"body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(1) > a");
});
Then ("The user chooses a location1", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
Then ("The user is booking tickets1", async function () {
  //
  return await clickElement(this.page, ".acceptin-button");
});

Then("The user confirms the booking1 {string}", async function (string) {
  const actual = await getText(this.page, ".acceptin-button");
  await expect(actual).contain("Получить код бронирования");
});

Given("User is on page2 {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 30000,
  });
});
When("The user selects the desired day2", async function () {
  return await clickElement(this.page, ".page-nav__day:last-child");
});
Then ("The user selects the desired movie2", async function () {
  return await clickElement(
    this.page,"body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a");
});
Then ("The user chooses a location2", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
Then ("The user is booking tickets2", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then("The user confirms the booking2 {string}", async function (string) {
  const actual = await getText(this.page, ".acceptin-button");
  await expect(actual).contain("Получить код бронирования");
});

Given("User is on page3 {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 30000,
  });
});
When("The user selects the desired day3", async function () {
  return await clickElement(this.page, ".page-nav__day:last-child");
});
Then ("The user selects the desired movie3", async function () {
  return await clickElement(
    this.page,
    "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a"
  );
});
Then ("The user selects the occupied place", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
Then ("The user has booked tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then ("The user has confirmed the booking of tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then("Get Error {string}", async function (string) {
  const actual = await getText(this.page, ".ticket__hint");
  await expect(actual).contain("Выбранное Вами место уже забронировано");
});
