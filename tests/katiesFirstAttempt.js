module.exports = {
    "Visits Katie's portfolio site"(client){
        client
            .url('https://katiejduane.com')
            .waitForElementVisible('.projects-box')
            .expect.element('.project').to.be.present.after(1000)
        client.end();
    }
}

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
            .click('#lighten')
            .pause(500)
            .click('#desat')
            .pause(500)
            .click('#sat')
            .pause(500)
            .click('#warm')
            .pause(500)
            .click('#cool')
            .pause(500)
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
            .click('#viewYear')
            .pause(1000)
            .click('.byYear')
            .pause(1000)
            .assert.elementPresent('.modal-word')
            // .moveTo(null, 200, 200)
            // .click('.back-drop')
            .end()
    }
}


// move mouse away from modal before clicking backdrop, then see if you can click on elements of
// a specific bg color