const puppeteer = require('puppeteer');

module.exports = (on, config) => {
  on('task', {
    puppeteerTask: async (options) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      // Use Puppeteer as needed
      await page.goto(options.url);
      const content = await page.content();
      await browser.close();
      return content;
    },
  });
};
