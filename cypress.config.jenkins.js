const {defineConfig} = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
    projectId: 'u99rrn',
    "video": true,

    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        chromeWebSecurity: false,
        experimentalRunAllSpecs: true,
        experimentalOriginDependencies: true,
    //    experimentalModifyObstructiveThirdPartyCode: true,

        specPattern: [
            /*
            'cypress/e2e/Admin/Admin_Command_TS001.cy.js',
            'cypress/e2e/Admin/Admin_Home_TS001.cy.js',
            'cypress/e2e/Admin/Admin_Login_TS001.cy.js',
            'cypress/e2e/Admin/Admin_Settings_TS001.cy.js',
            'cypress/e2e/Admin/Admin_Settings_TS002.cy.js',
            'cypress/e2e/Admin/Admin_User_TS001.cy.js',

            'cypress/e2e/Admin/Admin_User_TS002.cy.js',
            'cypress/e2e/Admin/Admin_User_TS003.cy.js',
            'cypress/e2e/Admin/Admin_User roles_TS001.cy.js',
            'cypress/e2e/Admin/Admin_User logs_TS001.cy.js',
            'cypress/e2e/Admin/Admin_Commission Plans_TS001.cy.js',
            'cypress/e2e/Admin/Admin_Revoke Reason_TS001.cy.js',
            'cypress/e2e/Admin/Admin_Cancellation reasons_TS0001.cy.js',
            'cypress/e2e/Admin/Admin_Info Banners_TS001.cy.js',
            'cypress/e2e/Admin/Admin_Advisor Cohorts_TS001.cy.js',
            'cypress/e2e/Admin/Admin_Profile.TS001.cy.js',*/
           'cypress/e2e/Admin/Admin_Invite_TS001.cy.js',
           'cypress/e2e/Advisor/Advisor_Booking_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Booking_TS002.cy.js',
           'cypress/e2e/Advisor/Advisor_Booking_TS003.cy.js',
            'cypress/e2e/Advisor/Advisor_Booking_TS004.cy.js',
            'cypress/e2e/Advisor/Advisor_Booking_TS005.cy.js',
            'cypress/e2e/Advisor/Advisor_Booking_TS006.cy.js',
            'cypress/e2e/Advisor/Advisor_Booking_TS007.cy.js',
            'cypress/e2e/Advisor/Advisor_Booking_TS008.cy.js',
            'cypress/e2e/Advisor/Advisor_Booking_TS009.cy.js',
            'cypress/e2e/Advisor/Advisor_Booking_TS010.cy.js',
           'cypress/e2e/Advisor/Advisor_Booking_TS011.cy.js',
            'cypress/e2e/Advisor/Advisor_Bookings_Travel Review_TS001.cy.js',
           'cypress/e2e/Advisor/Advisor_Fora Email_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Forum_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Profile_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Marketing.cy.js',
          'cypress/e2e/Advisor/Advisor_Booking_change client_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Whatsnew_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Resource_TS001.cy.js',
           'cypress/e2e/Advisor/Advisor_Newhelp_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Community_Guideline.cy.js',
            'cypress/e2e/Advisor/Advisor_Suppliermodal.cy.js',
            'cypress/e2e/Advisor/Advisor_Cancel subscription_TS001.cy.js',
          'cypress/e2e/Advisor/Advisor_Bookings_Report an issue.cy.js',
            'cypress/e2e/Advisor/Advisor_New_HomeOnboarding_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Partners_TS001.cy.js',
         'cypress/e2e/Advisor/Advisor_Partners_TS002.cy.js',
       //  'cypress/e2e/Advisor/Advisor_Partners_TS003.cy.js',
            'cypress/e2e/Advisor/Advisor_Training_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Newhelp_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Cancel subscription_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Client_TS001.cy.js',
       'cypress/e2e/Advisor/Advisor_Client_TS002.cy.js',
       "cypress/e2e/Advisor/Advisor_Leads_TS001.cy.js",
       "cypress/e2e/Advisor/Advisor_Leads_TS002.cy.js",
          /*  'cypress/e2e/Advisor/Advisor_Profile_Subscription_TS001.cy.js',
            'cypress/e2e/Advisor/Advisor_Profile_Subscription_TS002.cy.js',
            'cypress/e2e/Advisor/Advisor_Profile_Subscription_TS003.cy.js',
            'cypress/e2e/Advisor/Advisor_Profile_Subscription_TS004.cy.js',*/


        
        ]
    },
    setupNodeEvents(on, config) {},

    reporter: "cypress-multi-reporters",
    reporterOptions: {
        reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
        cypressMochawesomeReporterReporterOptions: {
            reportDir: "results/html",
            // reportFilename: "[status]_[datetime]-[name]-report",
            charts: true,
            embeddedScreenshots: true,
            overwrite: false,
            html: false,
            json: true
        },
        mochaJunitReporterReporterOptions: {
            mochaFile: "results/junit/test-results.[hash].xml",
            jenkinsMode: true
        }
    },
});