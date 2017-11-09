//const testFunctions = require('../testSupport/testFunctions')
const testData = require('../testSupport/testData')
const selectors = require('../testSupport/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/home')  //remeber to change out url based on whos server your using 
            // .acceptAlert()
            .resizeWindow(1200, 1300)
            .pause(500)
    },
    afterEach: (browser, done) => {
        browser.end()
        setTimeout(() => {
            done()
        }, 500)
    },
    'Click through all tabs and assert text': (browser) => {
        browser
            .assert.containsText(selectors.findTheText.homeUpComingEventsTag.tag, selectors.findTheText.homeUpComingEventsTag.text)
            .clickByText(selectors.menuSelectors.calendarTag.tag, selectors.menuSelectors.calendarTag.text)
            .assert.containsText(selectors.findTheText.calendarNotificationsTag.tag, selectors.findTheText.calendarNotificationsTag.text)
            .clickByText(selectors.menuSelectors.aboutUsTag.tag, selectors.menuSelectors.aboutUsTag.text)
            .assert.containsText(selectors.findTheText.whoWeAreTag.tag, selectors.findTheText.whoWeAreTag.text)
            .clickByText(selectors.menuSelectors.mediaTag.tag, selectors.menuSelectors.mediaTag.text)
            .assert.containsText(selectors.findTheText.mediaPhotoTag.tag, selectors.findTheText.mediaPhotoTag.text)
            .clickByText(selectors.menuSelectors.blogTag.tag, selectors.menuSelectors.blogTag.text)
            .assert.containsText(selectors.findTheText.elSistemaBlogTag.tag, selectors.findTheText.elSistemaBlogTag.text)
    },
    'navigate from home screen to caledar input scren': (browser)=> {
        browser
            .click(selectors.buttonsTag.upComingEventsButton)
            //.pause(1000)
            .assert.containsText(selectors.findTheText.calendarNotificationsTag.tag, selectors.findTheText.calendarNotificationsTag.text)
            .click(selectors.buttonsTag.calendarSignUp)
            //.pause(1000)
            .click(selectors.buttonsTag.phoneNumber)
            //.pause(1000)
            .setValue(selectors.buttonsTag.phoneNumber, testData.inputPhoneNumber.goodNumber)
            .click(selectors.buttonsTag.classSignUp)
            //.pause(1000)
            .click(selectors.buttonsTag.signUp)
        
    },
    'Navigate from home sreen to about us': (browser)=> {
        browser
            .click(selectors.homeScreenNavigation.aboutUsButton)
            .assert.containsText(selectors.findTheText.whoWeAreTag.tag, selectors.findTheText.whoWeAreTag.text)
            //.pause(1000)
    },
    'Input good info into credit card info ': (browser)=> {
        browser
            .clickByText(selectors.menuSelectors.supportUsTag.tag, selectors.menuSelectors.supportUsTag.text)
            //.pause(1000)
            .assert.containsText(selectors.findTheText.supportUsText.tag, selectors.findTheText.supportUsText.text)
            .setValue(selectors.creditCartSelectors.emailInput, testData.creditCardInfo.email)
            .setValue(selectors.creditCartSelectors.amount, testData.creditCardInfo.amount)
            .setValue(selectors.creditCartSelectors.creditCardNumber, testData.creditCardInfo.creditCardNumber)
            .setValue(selectors.creditCartSelectors.CVC, testData.creditCardInfo.CVC)
            .setValue(selectors.creditCartSelectors.expirationDate, testData.creditCardInfo.expirationDate)
            .click(selectors.creditCartSelectors.submitButtonTag)
    },
    'input nothing into credit card field': (browser)=>{ //Credit card fiedls with accept anything.
        browser
            .clickByText(selectors.menuSelectors.supportUsTag.tag, selectors.menuSelectors.supportUsTag.text)
            .setValue(selectors.creditCartSelectors.emailInput, testData.badData.email)
            .waitForElementPresent(selectors.creditCartSelectors.submitButtonTag, 2000)
            .click(selectors.creditCartSelectors.submitButtonTag)
            //.pause(20000)
            .assert.containsText(selectors.creditCartSelectors.emailErrorMessage, testData.errorMessages.emailErrorMessage)
            .pause(200)
        },
    'click on the events by picture': (browser)=> {
        browser
            .clickByText(selectors.eventPictureButtonsTag.eventJune12.tag, selectors.eventPictureButtonsTag.eventJune12.text)
            .assert.containsText(selectors.findTheText.calendarNotificationsTag.tag, selectors.findTheText.calendarNotificationsTag.text)
            .clickByText(selectors.menuSelectors.homeTag.tag, selectors.menuSelectors.homeTag.text)
            .assert.containsText(selectors.findTheText.homeScreen.tag, selectors.findTheText.homeScreen.text)
            .clickByText(selectors.eventPictureButtonsTag.eventJune24.tag, selectors.eventPictureButtonsTag.eventJune24.text)
            .clickByText(selectors.menuSelectors.homeTag.tag, selectors.menuSelectors.homeTag.text)
            .assert.containsText(selectors.findTheText.homeScreen.tag, selectors.findTheText.homeScreen.text)
            .clickByText(selectors.eventPictureButtonsTag.eventJuly30.tag, selectors.eventPictureButtonsTag.eventJuly30.text)
            
    },
    'navigate to support us from homescreen':(browser)=>{
        browser
        .clickByText(selectors.buttonsTag.supportUsFromHomeTag.tag, selectors.buttonsTag.supportUsFromHomeTag.text)
        .assert.containsText(selectors.findTheText.supportUsText.tag, selectors.findTheText.supportUsText.text)
    },
    'navigate using the footer tags':(browser)=>{//navigate using footers then return to home screen and do the next one. 
        browser
        .clickByText(selectors.menuSelectors.footerTags.footerAboutUsTag.tag, selectors.menuSelectors.footerTags.footerAboutUsTag.text)
        .assert.containsText(selectors.findTheText.whoWeAreTag.tag, selectors.findTheText.whoWeAreTag.text)
        .clickByText(selectors.menuSelectors.homeTag.tag, selectors.menuSelectors.homeTag.text)
        .assert.containsText(selectors.findTheText.homeScreen.tag, selectors.findTheText.homeScreen.text)
        .clickByText(selectors.menuSelectors.footerTags.footerOurteam.tag, selectors.menuSelectors.footerTags.footerOurteam.text)
        .assert.containsText(selectors.findTheText.whoWeAreTag.tag, selectors.findTheText.whoWeAreTag.text) //this one goes to the same screen? 
        .clickByText(selectors.menuSelectors.homeTag.tag, selectors.menuSelectors.homeTag.text)
        .assert.containsText(selectors.findTheText.homeScreen.tag, selectors.findTheText.homeScreen.text)
        .clickByText(selectors.menuSelectors.footerTags.footerCalendar.tag, selectors.menuSelectors.footerTags.footerCalendar.text)
        .assert.containsText(selectors.findTheText.calendarNotificationsTag.tag, selectors.findTheText.calendarNotificationsTag.text)
        .clickByText(selectors.menuSelectors.homeTag.tag, selectors.menuSelectors.homeTag.text)
        .assert.containsText(selectors.findTheText.homeScreen.tag, selectors.findTheText.homeScreen.text)
        .clickByText(selectors.menuSelectors.footerTags.footVolunteer.tag, selectors.menuSelectors.footerTags.footVolunteer.text)//same page again? oooh but diffrent section of the page. 
        .assert.containsText(selectors.findTheText.whoWeAreTag.tag, selectors.findTheText.whoWeAreTag.text)
        .clickByText(selectors.menuSelectors.homeTag.tag, selectors.menuSelectors.homeTag.text)
        .assert.containsText(selectors.findTheText.homeScreen.tag, selectors.findTheText.homeScreen.text)
        .clickByText(selectors.menuSelectors.footerTags.footerDonate.tag, selectors.menuSelectors.footerTags.footerDonate.text)
        .assert.containsText(selectors.findTheText.supportUsText.tag, selectors.findTheText.supportUsText.text)
        .clickByText(selectors.menuSelectors.homeTag.tag, selectors.menuSelectors.homeTag.text)
        .assert.containsText(selectors.findTheText.homeScreen.tag, selectors.findTheText.homeScreen.text)
    }
}