class HomePage {
    elements = {
        fieldFullName: () => cy.get('[data-automation-id="textInput"]').eq(0),
        fieldPhoneNumber: () => cy.get('[data-automation-id="textInput"]').eq(1),
        radioAffordable: () => cy.get('[type="radio"]').eq(0),
        radioExpensive: () => cy.get('[type="radio"]').eq(1),
        radioOther: () => cy.get('[type="radio"]').eq(2),
        fieldOther: () => cy.get('[data-automation-id="textInput"]').eq(2),
        radioBintang1: () => cy.get('[aria-label="1 Star"]'),
        radioBintang2: () => cy.get('[aria-label="2 Star"]'),
        radioBintang3: () => cy.get('[aria-label="3 Star"]'),
        radioBintang4: () => cy.get('[aria-label="4 Star"]'),
        radioBintang5: () => cy.get('[aria-label="5 Star"]'),
        fieldReviewDate: () => cy.get('#DatePicker0-label'),
        btnMeatball: () => cy.get('[aria-label="More options"]'),
        btnSubmit: () => cy.get('[data-automation-id="submitButton"]')
    }

    setFullName(name) {
        this.elements.fieldFullName().type(name)
    }

    setPhone(phone) {
        this.elements.fieldPhoneNumber().type(phone)
    }

    checkAffordable() {
        this.elements.radioAffordable().check()
    }

    checkExpensive() {
        this.elements.radioExpensive().check()
    }

    checkOther() {
        this.elements.radioOther().check()
    }

    setOther(text) {
        this.elements.fieldOther().type(text)
    }

    checkBintang(star) {
        switch (star) {
            case 1:
                this.elements.radioBintang1().click({ force: true })
                break;
            case 2:
                this.elements.radioBintang2().click({ force: true })
                break;
            case 3:
                this.elements.radioBintang3().click({ force: true })
                break;
            case 4:
                this.elements.radioBintang4().click({ force: true })
                break;
            case 5:
                this.elements.radioBintang5().click({ force: true })
        }
    }

    setReviewDate(date) {
        this.elements.fieldReviewDate().click()
        cy.get(`[aria-label="${date}"]`).click()
    }

    submit() {
        this.elements.btnSubmit().click();
    }

    clickButtonMeatball() {
        this.elements.btnMeatball().click();
    }
}

module.exports = new HomePage();