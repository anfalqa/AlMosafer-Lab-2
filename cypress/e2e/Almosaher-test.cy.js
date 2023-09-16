///<reference types= "cypress" />

Cypress.on('uncaught:exception', err => {
    return false
});
let lower=0;
let randomArrEn = Math.floor(Math.random() * 3);
let arrEn = ['Dubai', 'Jeddah', 'Amman']
describe('AlMosafer-Lab 2', () => {
  it('make all the requirements passed', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels').click()
    cy.get('[data-testid="AutoCompleteInput"]').type(`${arrEn[randomArrEn]}`)
    cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()
    cy.wait(18000)
    cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click()
    cy.wait(15000)
    
    cy.get('[data-testid="HotelSearchResult__Hotel0__PriceLabel"] > .Price__Value').invoke('text').then(text =>{
      lower=Number(text)
    })
    cy.get('[data-testid="HotelSearchResult__Hotel39__PriceLabel"] > .Price__Value').invoke('text').then(text => {
      let greater = Number(text);
      cy.wrap(`${greater}`).should('be.greaterThan', cy.wrap(`${Number(lower)}`));
    });


  })
})

   // let lower= Math.floor(cy.get('[data-testid="HotelSearchResult__Hotel0__PriceLabel"] > .Price__Value'))
   // let greater = Math.floor(cy.get('[data-testid="HotelSearchResult__Hotel39__PriceLabel"] > .Price__Value'))
//if (greater < lower){
   // alert("HERE WE HAVE ERORR! THE LOWEST PRICE GREATER THAN THE GREATEST IN THIS PAGE!")
  // }
//else{
   // alert("THE TEST IS PASS !")
 // }

  
