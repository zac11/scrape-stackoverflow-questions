import { chromium, test } from "@playwright/test";

test.use({ viewport: { width: 1400, height: 1000 } });

test("Launch the SO page with Playwright questions", async () => {
  await test.step("Launch the url", async () => {
    const browser = await chromium.launch({
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    const baseurl = "https://stackoverflow.com";

    const search_term = "selenium-webdriver"; // add your search term here
    const url = `https://stackoverflow.com/questions/tagged/${search_term}`;
    await page.goto(url);

    await page.waitForSelector(".ws-nowrap.s-btn.s-btn__primary", {
      state: "visible",
    });

    //change to view 50 questions
    await page.locator("a[title='Show 50 items per page']").click();
    await page.waitForTimeout(5000);

/*
    //enable this for viewing only unanswered questions
    await page.locator("[data-nav-value='Unanswered']").click();
    await page.waitForTimeout(5000);
*/

    const total_questions = await page.locator("#questions > div").count();
    await console.log(`Total questions on the page ${total_questions}`);

    const questions_class = await page.$$eval(
      ".s-post-summary--content",
      (all_items) => {
        const data = [];
        all_items.forEach((questions) => {
          const question_name = questions.querySelector("h3").innerText;
          const question_url =
            baseurl +
            questions.querySelector("h3 > a").getAttribute("href");

          data.push({ question_name, question_url });
        });
        return data;
      }
    );
    await console.log(questions_class);
    await browser.close();
  });
});
