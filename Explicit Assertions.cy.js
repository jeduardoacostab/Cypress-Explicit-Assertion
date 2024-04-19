
describe("Assertions Demo", () =>{
    it("Explicit assertion", () =>{

        cy.visit("https://auth.applitools.com/users/login")

        cy.get("input[placeholder='Enter email']").type("hiwic67507@laymro.com")
        cy.get("input[placeholder='Enter password']").type("Radamel123*")
        cy.get("button[type='submit']").click()
        cy.get('.eyesProduct').click()
        cy.get('.user-menu > [data-test="button"]').click()

        let expName="Radamel Falcao";

        cy.get(".user-name").then(   (x)=>{

                let actName=x.text()                  
        
                /* // BDD Style
                expect(actName).to.equal(expName)
                expect(actName).to.no.equal(expName) */
        
                // TDD Style

                assert.equal(actName,expName)
                assert.notequal(actName,expName)

            })

 
    })
}) 