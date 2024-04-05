 export class registrationForm{

    //List the locators in the Registration form
regElements = {
        firstName:"#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password:"#input-password",
        confirmPwd: "#input-confirm",
        agreeeCheckBox:"[name='agree']",
        submitButton: ".btn-primary"
    }

    //Define methods
    enterFirstName(fname)
    {
        cy.get(this.regElements.firstName).type(fname)
    }
    enterLastName(lname)
    {
        cy.get(this.regElements.lastName).type(lname)
    }

    enterEmail(email)
    {
        cy.get(this.regElements.email).type(email)
    }

    enterPhone(phone)
    {
        cy.get(this.regElements.telephone).type(phone)
 }

    enterPassword(pwd)
    {
         cy.get(this.regElements.password).type(pwd)
         cy.get(this.regElements.confirmPwd).type(pwd)
    }
       
    selectCheckBox()
    {
        cy.get(this.regElements.agreeeCheckBox).click()
    }


    clickSubmit()
    {
        cy.get(this.regElements.submitButton).click()
    }

    }

