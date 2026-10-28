const { I } = inject();

module.exports = {
  goto() {
    I.amOnPage("http://zero.webappsecurity.com/login.html?login_error=true")
  },
  fillForm() {
    I.waitForElement("#login_form")
    I.fillField("#user_login", "Invalid-username")
    I.fillField("#user_password", "Invalid-password")
    I.click("input[type='submit']")
  }
}
