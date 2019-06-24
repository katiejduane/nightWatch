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
    "Visits and logs into emOceans"(client){
        client
            .url('https://emoceans.katiejduane.com')
            .waitForElementVisible('.header-content')
            .useXpath()
            .click("//a[text()='Login']")
            .useCss()
            .waitForElementVisible('.form-login')
            .setValue('#email', 'katiejduane@gmail.com')
            .setValue('#password', 'x')
            .click(".targBoxlogin")
        client.end();
    }
}