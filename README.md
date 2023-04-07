# Scrape StackOverflow Questions

This repo is made for scrapping questions based on the tags provided in the code.

If you want to scrape any question related to any search query, you can change the `search_term` inside the
code, which is located at `tests/scrape.spec.ts`.

For eg - let's say I want to search for `selenium-webdriver`, then replace the term `search_term` with the 
`selenium-webdriver` inside the `tests/scrape.spec.ts`.

You can fork the repo and use it.

# Report
The report for this repo is hosted on https://zac11.github.io/scrape-stackoverflow-questions

Thanks to Amuthan Sakthivel for pointing the right resource to work this out - 

https://harshitshah156.medium.com/host-your-automation-report-on-github-pages-with-github-actions-69f80857bd28

# Currently test status

[![Playwright Tests](https://github.com/zac11/scrape-stackoverflow-questions/actions/workflows/playwright.yml/badge.svg)](https://github.com/zac11/scrape-stackoverflow-questions/actions/workflows/playwright.yml)

