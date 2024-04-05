import { login } from "../../pages/loginForm"
import loginData from '../../fixtures/loginData.json'

let loginObj = new login()

describe('Login Form', () => {
    it('should allow the user to login', () => {

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        loginObj.enterEmail(loginData.email)
        loginObj.enterPwd(loginData.pwd)
        loginObj.clickSubmit()
  
    })
})