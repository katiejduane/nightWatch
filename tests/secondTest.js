module.exports = {
    'Demo test Google': function (browser) {
        browser
            .url('https://www.google.com')
            .waitForElementVisible('body')
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]')
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};

// a test can be split into multiple steps, if needed
module.exports = {
    'step one: navigate to google': function (browser) {
        browser
            .url('https://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]', 1000)
    },

    'step two: click input': function (browser) {
        browser
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};

// tests could also be written in this format:
this.demoTestGoogle = function (browser) {
    browser
        .url('https://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'nightwatch')
        .waitForElementVisible('input[name=btnK]', 1000)
        .click('input[name=btnK]')
        .pause(1000)
        .assert.containsText('#main', 'The Night Watch')
        .end();
};