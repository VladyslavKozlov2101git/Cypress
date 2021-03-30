describe("Registration",function(){
    const inputsClasses = ".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiOutlinedInput-inputAdornedEnd",
          emailAddress = 'dofer37431@bsmitao.com',
          password = 'vv654321';

    it("Sign up", ()=>{
        cy.visit("https://user.gourmetpt.com/auth/sign-up");

        //STEP 1

        cy.get(inputsClasses).first().type('Vladyslav Kozlov') // Enter Full name
        cy.get(inputsClasses).eq(1).type(emailAddress) // Enter email
        cy.get(inputsClasses).eq(2).type(password) // Enter the password
        cy.get(inputsClasses).last().type(password) // Confirm the password
        cy.get("img[src='/static/media/unchecked.64acdb44.svg']").click() // Agree with privacy policy
        cy.get("button[type='submit']").click()  // Submit Personal information


        //Add token from temp mail or other ervices
           
    })

    it("Sign in", ()=>{
        cy.visit("https://user.gourmetpt.com/auth/login");

        //STEP 1

        cy.get(inputsClasses).first().type(emailAddress); //Enter email
        cy.get(inputsClasses).last().type(password); //Enter the password
        cy.get("button[type='submit']").click() //Sign in

        cy.contains('Proceed to pay').click()
           
    })
})
