Feature('example');

Scenario('test 1', ({ I }) => {
    I.amOnPage("http://www.example.com")
    I.wait(1)
    I.waitForElement("h1")
    I.see("Example")
});

Scenario('test 2', ({ I }) => {
    I.amOnPage("http://www.example.com")
    I.wait(1)
    I.waitForElement("h1")
    I.dontSeeElement(".login-form")
    I.seeInCurrentUrl("example.com")
});

Scenario('test 3', ({ I }) => {
    I.amOnPage("http://www.example.com")
    I.wait(1)
    I.waitForElement("h1")
    I.see("Example")
    I.dontSeeElement(".login-form")
    I.seeInCurrentUrl("example.com")
});

Scenario('Full page screenshot', ({ I }) => {
    I.amOnPage("http://www.example.com")
    I.wait(1)
    I.saveScreenshot("test.png", true)
});

Scenario('Single element screenshot', ({ I }) => {
    I.amOnPage("http://www.example.com")
    I.wait(1)
    I.saveElementScreenshot("h1", "Element.png")
});


Scenario('Login test', ({ I }) => {
    I.amOnPage("http://zero.webappsecurity.com/login.html")
    I.waitForElement("#login_form")
    I.fillField("#user_login", "Invalid-username")
    I.fillField("#user_password", "Invalid-password")
    I.click("input[type='submit']")
    I.waitForText("Login and/or password are wrong.")
});


Scenario('Extract text', async ({ I }) => {
    I.slowTest(0.2)
    I.amOnPage("http://www.example.com")
    I.refreshPage()
    let text = await I.grabTextFrom("h1")
    console.log(text)
    let value = await I.grabValueFrom("h1")
});

Scenario('Page Object', ({ I, LoginPage }) => {
    LoginPage.goto()
    LoginPage.fillForm()
    I.waitForText("Login and/or password are wrong.")
});