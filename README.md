# MSR Knowledge Base

![CI](https://github.com/Ekemzz123/msr-knowledge-base/actions/workflows/ci.yml/badge.svg)

A single-page web application that serves as a reference guide for **Mining Software Repositories (MSR)** researchers. It helps new PhD students find information about data sources, collection methods, analysis methods, and publication venues in one place.

**Live site:** https://ekemzz123.github.io/msr-knowledge-base/

---

## Project Background
This project was built for the MSR Research Group Lead (the customer). New PhD students joining the group often feel overwhelmed because they don't know what data sources exist, how to collect data, which analysis methods to use, or where to publish. The customer requested a simple, clean web page with four tabs to organize this information.

The full requirements and user stories are in [`docs/requirements.md`](docs/requirements.md).

---

## Features Implemented (Milestone 1: Page Structure & Navigation)
- Header with the project title
- Four navigation tabs: **Data Sources**, **Collection Methods**, **Analysis Methods**, **Publication Venues**
- Tab switching with JavaScript: clicking a tab shows its section and hides the others
- The active tab is highlighted
- **Data Sources** section with all 7 sources (name, data provided, description) in a table
- Clean, responsive styling with CSS

---

## Development Workflow
1. **Requirements:** extracted user stories from the customer meeting notes (`docs/requirements.md`).
2. **Planning:** created 6 milestones and 12 issues in GitHub, each linked to a milestone.
3. **Implementation:** built the page on the `feature/page-structure-navigation` branch and merged it through pull request #13.
4. **Testing:** wrote tests on the `test/page-structure-navigation` branch and merged them through pull request #14.
5. **CI/CD:** a GitHub Actions workflow (`.github/workflows/ci.yml`) runs the tests on every push and pull request. When changes reach `main` and the tests pass, it automatically deploys the site to GitHub Pages.

---

## Remaining Milestones (Future Work)

|## Remaining Milestones (Future Work)

So far, the page structure, tab navigation, and the Data Sources section are complete. The other three tabs currently show a "Coming soon" message. Here's what's planned for each remaining milestone:

### Collection Methods Content (#6, #7)
This tab will explain the different ways researchers can gather data, from REST APIs and GraphQL to web scraping with Selenium or BeautifulSoup, database dumps like GHTorrent, and simple manual downloads. Each method will include what it's best used for, along with its pros and cons, so students can pick the right approach for their project.

### Analysis Methods Content (#8)
This tab will cover the eight main ways MSR researchers analyze data, including statistical and regression analysis, qualitative methods like thematic analysis and grounded theory, machine learning, time series, network analysis, and visualization. Each one will show what type of analysis it is and when it's commonly used.

### Publication Venues Content (#9, #10)
This tab will help students figure out where to publish. It will list the six main conferences (ICSE, FSE, ASE, MSR, EASE, SANER) and three journals (EMSE, TSE, TOSEM), each with its full name, focus area, and how relevant it is to MSR research. Conferences and journals will be shown in separate groups to make them easier to compare.

### Styling & Polish (#11, #12)
Once all the content is in place, the final milestone will focus on making the page look and feel polished, with better support for phones and small screens and refined fonts, spacing, and colours for a more professional look.

---

## Tools Used
- HTML, CSS, JavaScript
- Jest + jsdom (testing)
- GitHub Issues, Milestones, and Pull Requests (project management)
- GitHub Actions (CI/CD) and GitHub Pages (hosting)


---

**Author:** Ekeminiabasi Udodong
**Course:** COIS 3060H – Software Processes