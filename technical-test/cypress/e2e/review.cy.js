import HomePage from "../pages/home.page"

describe('template spec', () => {
  it('As a user, I can see Review Our Product page', () => {
    cy.get('[data-automation-id="questionItem"]').eq(0).scrollIntoView().should('be.visible')
    cy.get('[data-automation-id="questionItem"]').eq(1).scrollIntoView().should('be.visible')
    cy.get('[data-automation-id="questionItem"]').eq(2).scrollIntoView().should('be.visible')
    cy.get('[data-automation-id="questionItem"]').eq(3).scrollIntoView().should('be.visible')
    cy.get('[data-automation-id="questionItem"]').eq(4).scrollIntoView().should('be.visible')
  })

  it('As a user, I can input Full Name in field name', () => {
    HomePage.setFullName('John Doe')
    HomePage.elements.fieldFullName().should('have.value', 'John Doe')
  })

  it('As a user, I can input Phone Number', () => {
    HomePage.setPhone('089638181254')
    HomePage.elements.fieldPhoneNumber().should('have.value', '089638181254')
  })

  it('As a user, I can choose one of the answer among three options', () => {
    HomePage.checkExpensive()
    HomePage.elements.radioExpensive().should('be.checked')
  })

  it('As a user, I cant choose two answer at once among three options', () => {
    HomePage.checkExpensive()
    HomePage.checkAffordable()
    HomePage.elements.radioExpensive().should('not.be.checked')
    HomePage.elements.radioAffordable().should('be.checked')
  })

  it('As a user, I cant choose three answer at once', () => {
    HomePage.checkAffordable()
    HomePage.checkExpensive()
    HomePage.checkOther()
    HomePage.elements.radioAffordable().should('not.be.checked')
    HomePage.elements.radioExpensive().should('not.be.checked')
    HomePage.elements.radioOther().should('be.checked')
  })

  it('As a user, when I choose the third answer I can input Lainnya', () => {
    HomePage.checkOther()
    HomePage.setOther('Lumayann nih')
    HomePage.elements.radioOther().should('be.checked')
    HomePage.elements.fieldOther().should('have.value', 'Lumayann nih')
  })

  it('As a user, I can give a rate from 1 to 5 star', () => {
    HomePage.checkBintang(1)
    HomePage.elements.radioBintang1().should("have.attr", "aria-checked", 'true')
  })

  it('As a user, I can give a rate from 2 to 5 star', () => {
    HomePage.checkBintang(2)
    HomePage.elements.radioBintang2().should("have.attr", "aria-checked", 'true')
  })

  it('As a user, I can give a rate from 3 to 5 star', () => {
    HomePage.checkBintang(3)
    HomePage.elements.radioBintang3().should("have.attr", "aria-checked", 'true')
  })

  it('As a user, I can give a rate from 4 to 5 star', () => {
    HomePage.checkBintang(4)
    HomePage.elements.radioBintang4().should("have.attr", "aria-checked", 'true')
  })

  it('As a user, I can give a rate from 5 to 5 star', () => {
    HomePage.checkBintang(5)
    HomePage.elements.radioBintang5().should("have.attr", "aria-checked", 'true')
  })

  it('As a user, I can input Review date', () => {
    HomePage.setReviewDate('22, November, 2023')
    HomePage.elements.fieldReviewDate().should('have.value', '11/22/2023')
  })

  it('As a user, I can leave the Full Name field blank', () => {
    HomePage.setPhone('089638181254')
    HomePage.checkExpensive()
    HomePage.checkBintang(2)
    HomePage.setReviewDate('22, November, 2023')
    HomePage.elements.fieldReviewDate().should('have.value', '11/22/2023')
    HomePage.submit()

    cy.get('[data-automation-id="validationError"]').should('be.visible')
    cy.contains('1 question(s) need to be completed before submitting: Question 1.').invoke('text').then((text) => {
      expect('1 question(s) need to be completed before submitting: Question 1.').to.equal(text);
    });
  })

  it('As a user, I can leave the Phone Number field blank', () => {
    HomePage.setFullName('John Doe')
    HomePage.checkExpensive()
    HomePage.checkBintang(2)
    HomePage.setReviewDate('22, November, 2023')
    HomePage.elements.fieldReviewDate().should('have.value', '11/22/2023')
    HomePage.submit()

    cy.get('[data-automation-id="validationError"]').should('be.visible')
    cy.contains('1 question(s) need to be completed before submitting: Question 2.').invoke('text').then((text) => {
      expect('1 question(s) need to be completed before submitting: Question 2.').to.equal(text);
    });
  })

  it('As a user, I can leave the Question field blank', () => {
    HomePage.setFullName('John Doe')
    HomePage.setPhone('089638181254')
    HomePage.checkBintang(2)
    HomePage.setReviewDate('22, November, 2023')
    HomePage.elements.fieldReviewDate().should('have.value', '11/22/2023')
    HomePage.submit()

    cy.get('[data-automation-id="validationError"]').should('be.visible')
    cy.contains('1 question(s) need to be completed before submitting: Question 3.').invoke('text').then((text) => {
      expect('1 question(s) need to be completed before submitting: Question 3.').to.equal(text);
    });
  })

  it('As a user, I can leave the Rate our Services blank', () => {
    HomePage.setFullName('John Doe')
    HomePage.setPhone('089638181254')
    HomePage.checkExpensive()
    HomePage.setReviewDate('22, November, 2023')
    HomePage.elements.fieldReviewDate().should('have.value', '11/22/2023')
    HomePage.submit()

    cy.get('[data-automation-id="validationError"]').should('be.visible')
    cy.contains('1 question(s) need to be completed before submitting: Question 4.').invoke('text').then((text) => {
      expect('1 question(s) need to be completed before submitting: Question 4.').to.equal(text);
    });
  })

  it('As a user, I can leave Review Date field blank', () => {
    HomePage.setFullName('John Doe')
    HomePage.setPhone('089638181254')
    HomePage.checkExpensive()
    HomePage.checkBintang(2)
    HomePage.submit()

    cy.get('[data-automation-id="validationError"]').should('be.visible')
    cy.contains('1 question(s) need to be completed before submitting: Question 5.').invoke('text').then((text) => {
      expect('1 question(s) need to be completed before submitting: Question 5.').to.equal(text);
    });
  })

  it('As a user, I can click meatball button', () => {
    HomePage.clickButtonMeatball()
    cy.contains('Enable Immersive Reader').should('be.visible')
    cy.contains('Clear Form').should('be.visible')
  })

  it('As a user, I can click "Bersihkan Formulir"', () => {
    HomePage.setFullName('John Doe')
    HomePage.setPhone('089638181254')
    HomePage.checkExpensive()
    HomePage.checkBintang(2)
    HomePage.setReviewDate('22, November, 2023')
    HomePage.elements.fieldReviewDate().should('have.value', '11/22/2023')

    HomePage.clickButtonMeatball()
    cy.contains('Clear Form').click()
    cy.get('[aria-label="Clear Form"]').eq(1).click()

    HomePage.elements.fieldFullName().should('have.value', '')
    HomePage.elements.fieldPhoneNumber().should('have.value', '')
    HomePage.elements.radioAffordable().should('not.be.checked')
    HomePage.elements.radioExpensive().should('not.be.checked')
    HomePage.elements.radioOther().should('not.be.checked')
    HomePage.elements.fieldOther().should('have.value', '')
    HomePage.elements.radioBintang1().should("have.attr", "aria-checked", 'false')
    HomePage.elements.fieldReviewDate().should('have.value', '')
  })

  it('As a user, I can click button "Kirim" with the condition of emptying data', () => {
    HomePage.submit()
    cy.get('[data-automation-id="validationError"]').should('have.length', 5)
    cy.contains('5 question(s) need to be completed before submitting: Question 1,Question 2,Question 3,Question 4,Question 5.').invoke('text').then((text) => {
      expect('5 question(s) need to be completed before submitting: Question 1,Question 2,Question 3,Question 4,Question 5.').to.equal(text);
    });
  })

  xit('As a user, I can submit review product', () => {
    HomePage.setFullName('John Doe')
    HomePage.setPhone('089638181254')
    HomePage.checkExpensive()
    HomePage.checkBintang(2)
    HomePage.setReviewDate('22, November, 2023')
    HomePage.submit()

    cy.contains('Thanks!', { timeout: 10000 }).should('be.visible')
    cy.get('[data-automation-id="thankYouMessage"]', { timeout: 10000 }).children('.text-format-content').should('be.visible')
  })
})