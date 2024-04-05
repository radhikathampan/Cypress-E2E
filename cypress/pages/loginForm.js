export class login{

loginElements = {
    email: "#input-email",
    password: "#input-password",
    submitButton: "[type='submit']"

    }

    //Define methods
    enterEmail(email)
    {
        cy.get(this.loginElements.email).type("test@qaworld.com")
    }

    enterPwd(pwd)
    {
        cy.get(this.loginElements.password).type("Abcd")

      
    }

    clickSubmit()
    {
        cy.get(this.loginElements.submitButton).click()
    }
}