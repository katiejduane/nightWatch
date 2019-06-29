// module.exports = {
//     "Visits Katie's portfolio site"(client){
//         client
//             .url('https://katiejduane.com')
//             .waitForElementVisible('.projects-box')
//             .expect.element('.project').to.be.present.after(1000)
//         client.end();
//     }
// }

module.exports = {
    'Step 1: visits and logs into emOceans': function(client){
        client
            .url('https://emoceans.katiejduane.com')
            .waitForElementVisible('.header-content')
            .useXpath()
            .click("//a[text()='Login']")
            .useCss()
            .waitForElementVisible('.form-login')
            .setValue('#email', 'katiejduane@gmail.com')
            .setValue('#password', 'x')
            .pause(1000)
    },
    'Step 2: clicks on and adjusts a color and advances to form page': function(client){
        client  
            .click('.targBoxlogin')
            .waitForElementVisible('.swatchContainer')
            .click('.swatch')
            .pause(1000)
            .click('#lighten')
            .pause(1000)
            .click('#desat')
            .pause(1000)
            .click('#sat')
            .pause(1000)
            .click('#warm')
            .pause(1000)
            .click('#cool')
            .pause(1000)
            .assert.cssProperty('#palette', 'background-color', 'rgba(182, 88, 106, 1)')
            .click('#save')
    },
    'Step 2b: loads form page and enters word in search bar': function(client){
        client
            .waitForElementVisible('#moodForm')
            .setValue('#search-input', 'happy')
            .pause(1000)
    },
    'Step 3: submits and waits for API response': async function(client){
        await client.click('.datamuse-button')
        // i'm pretty sure this isn't the right way to use async await, as
        // i'm waiting for the RESPONSE of that click, not the click itself. 
        // explore further
        client.waitForElementVisible('.results', 6000, false)
    },
    'Step 4: enters mood data in form and sends to DB': function(client){
        client  
            .setValue('#mood', 'Glorious')
            .setValue('#note', 'This is rather fun')
            .pause(3000)
            .click('#submitButton')
    },
    'Step 5: views mood data': function(client){
        client
            .waitForElementVisible('.boardDisplay')
            .pause(3000)
            .click('#viewMonth')
            .pause(1000)
            .click('#viewYear')
            .pause(1000)
            .click('.byYear')
            .pause(1000)
            .assert.elementPresent('.modal-word')
            .assert.elementPresent('.modal-date')
    },
    'Step 6: views about info and then logs out': function(client){
        client  
            .useXpath()
            .click("//a[text()='about']")
            .useCss()
            .waitForElementVisible('#aboutColorWrapper')
            .moveToElement('#devWrapper', 100, 100)
            .useXpath()
            .pause(1000)
            .click("//a[text()='log out']")
            .pause(2000)
            .end()
    }
}


// move mouse away from modal before clicking backdrop, then see if you can click on elements of
// a specific bg color