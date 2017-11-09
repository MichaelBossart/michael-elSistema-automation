module.exports = {
    menuSelectors:
    {
        homeTag:{ 
           tag: 'a',
            text: 'Home',
        },
        calendarTag :{ 
            tag : 'a',
            text: 'Calendar',
        },
        aboutUsTag:{
            tag: 'a',
            text: 'About Us',
        },
        mediaTag: {
            tag:'a',
            text: 'Media',
        },
        blogTag:{
            tag:'a',
            text: 'Blog',
        },
        supportUsTag: {
            tag:'a',
            text:'Support Us'
        }, 
        footerTags:{
            footerHomeTag:{
            tag:'li',
            text:'Home'
            },
            footerAboutUsTag:{
            tag:'li',
            text:'About us'
            },
            footerOurteam:{
            tag:'li',
            text:'Our Team'
            },
            footerCalendar:{
            tag:'li',
            text: 'Calendar'
            },
            footVolunteer:{
            tag:'li',
            text:'Volunteer'
            },
            footerDonate:{
            tag:'li',
            text:'Donate' 
            }
        }
    },
    findTheText:{
        homeScreen:{
            tag:'a',
            text:'Home'
        },
        homeUpComingEventsTag:{
            tag: 'h2',
            text: 'Upcoming Events'
        },
        calendarNotificationsTag: {
            tag: 'h3',
            text: 'Notifications'
        },
        whoWeAreTag:{
            tag: 'h1',
            text:'Who We Are'
        },
        mediaPhotoTag:{
            tag: 'h1',
            text: 'Photo'
        },
        elSistemaBlogTag:{
            tag: 'h1',
            text: 'El Sistema Blog'
        },
        supportUsText:{
            tag: 'h1',
            text: 'Support El Sistema Pittsburgh'
        }
    },
    buttonsTag: {
        upComingEventsButton: 'input[value="See More"]',
        calendarSignUp: 'input[value="Sign up"]',
        phoneNumber: 'input[type="tel"]',
        classSignUp: 'input[type="checkbox"]',
        signUp: 'input[type="submit"]',
        supportUsFromHomeTag:{
            tag:'a',
            text:'Support Us'
        }
    },
    homeScreenNavigation: {
        aboutUsButton: 'input[value="Read More"]'
    },
    creditCartSelectors: {
        emailInput: 'input[type="email"]',
        amount: 'input[type="number"]',
        creditCardNumber: 'input[class="donate-money-card"]',
        CVC: 'input[class="donate-money-cvc"]',
        expirationDate:'input[class="donate-money-exp"]',
        submitButtonTag:'button[class="donate-btn"]',
        emailErrorMessage: 'div[class="donate-error-message"]'
    },
    eventPictureButtonsTag:{
        eventJune12:{
        tag:'span',
        text: 'June 12th'
        },
        eventJune24:{
        tag:'span',
        text:'June 24th'
        },
        eventJuly30:{
        tag:'span',
        text:'July 30th'
        }
    }
}