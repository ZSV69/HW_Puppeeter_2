const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
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

Given("user is on page- {string}", async function (string) {
  // Открываем страницу
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 50000,
  });
});
When("The user selects the desired day", async function () {
  // Нужный день
  return await clickElement(this.page, ".page-nav__day:last-child");
});
And ("The user selects the desired movie", async function () {
  //нужный фильм
  return await clickElement(
    this.page,
    "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(1) > a"
  );
});
And ("The user chooses a location", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
And ("The user has booked tickets", async function () {
  //
  return await clickElement(this.page, ".acceptin-button");
});

Then("Is the button get code active", async function (string) {
  const actual = await getText(this.page, ".acceptin-button");
  await expect(actual).contain(
    "Получить код бронирования"
  );
});

Given("user is on page- {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 30000,
  });
});
When("The user selects the desired day", async function () {
  return await clickElement(this.page, ".page-nav__day:last-child");
});
And ("The user selects the desired movie", async function () {
  return await clickElement(
    this.page,"body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a");
});
And ("The user chooses a location", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
And ("The user has booked tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then("Is the button get code active", async function (string) {
  const actual = await getText(this.page, ".acceptin-button");
  await expect(actual).сontain("Получить код бронирования");
});

Given("user is on page- {string}", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 30000,
  });
});
When("The user selects the desired day", async function () {
  return await clickElement(this.page, ".page-nav__day:last-child");
});
And ("The user selects the desired movie", async function () {
  return await clickElement(
    this.page,
    "body > main > section:nth-child(2) > div.movie-seances__hall > ul > li:nth-child(1) > a"
  );
});
And ("The user selects the occupied place", async function () {
  return await clickElement(this.page, ".buying-scheme__chair_standart");
});
And ("The user has booked tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
And ("The user has confirmed the booking of tickets", async function () {
  return await clickElement(this.page, ".acceptin-button");
});
Then("Is the QR code is not visible", async function (string) {
  const actual = await getText(this.page, ".ticket__hint");
  await expect(actual).сontain("Выыбранно Вами место уже забронировано");
});
