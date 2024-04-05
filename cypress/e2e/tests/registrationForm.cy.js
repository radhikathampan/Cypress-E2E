
    import { registrationForm } from "../../pages/registrationForm"
    import regData from '../../fixtures/registrationData.json'
    import { faker } from '@faker-js/faker';

    
    let regObj = new registrationForm();


    const email = faker.internet.email()


    describe('Registration Form', () => {
        it('should allow user to register', () => {
           
            cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        
           regObj.enterFirstName(regData.firstName)
            regObj.enterLastName(regData.lastName)
            regObj.enterEmail("test@qaworld.com")
            regObj.enterPhone(regData.phone)
            regObj.enterPassword(regData.password)
            regObj.selectCheckBox()
            regObj.clickSubmit()

           
        })
      }) 
    
    

