# Requirements – MSR Knowledge Base

## 1. Project Overview
The MSR Knowledge Base is a single-page web application that serves as a reference guide for researchers in Mining Software Repositories (MSR). New PhD students in the MSR Research Group often feel overwhelmed because they do not know which data sources exist, how to collect data, which analysis methods to use, or where to publish. This page organizes that information into four sections — Data Sources, Collection Methods, Analysis Methods, and Publication Venues — that users can switch between using tabs.

## 2. Stakeholders
- **Customer:** MSR Research Group Lead
- **Primary users:** New PhD students joining the research group
- **Secondary users:** Experienced MSR researchers looking for a quick reference

## 3. User Stories

### US1 – Navigate between sections
As a PhD student, I want to switch between the four categories using tabs at the top of the page, so that I can quickly find the type of information I need.

**Acceptance criteria:**
- Four tabs are displayed at the top: Data Sources, Collection Methods, Analysis Methods, Publication Venues.
- Clicking a tab shows only that tab's content and hides the others.
- The currently selected tab is visually highlighted.
- The Data Sources tab is shown by default when the page loads.

### US2 – View data sources
As a PhD student, I want to see a list of common MSR data sources and the kind of data each provides, so that I can choose which data to collect for my research.

**Acceptance criteria:**
- The Data Sources section lists all 7 sources: GitHub, Stack Overflow, JIRA, App Stores, Travis CI / Jenkins, Mailing Lists, and npm Registry.
- Each source shows its name, the kind of data it provides, and a brief description.
- The information is displayed in a table or list format.

### US3 – Compare collection methods
As a PhD student, I want to see different data collection methods along with their pros and cons, so that I can choose the most suitable method for my data source.

**Acceptance criteria:**
- The Collection Methods section lists all 6 methods: REST APIs, GraphQL, Web Scraping (Selenium), Web Scraping (BeautifulSoup), Database Dumps, and Manual Download.
- Each method shows its name, what it is used for, and its pros and cons.
- All methods are formatted consistently.

### US4 – Explore analysis methods
As a researcher, I want to browse analysis methods along with their type and common use cases, so that I can decide how to analyze the data I have collected.

**Acceptance criteria:**
- The Analysis Methods section lists all 8 methods: Statistical Analysis, Regression Analysis, Thematic Analysis, Grounded Theory, Machine Learning, Time Series Analysis, Network Analysis, and Visualization.
- Each method shows its name, type of analysis (e.g., quantitative or qualitative), and common use cases.

### US5 – Find publication venues
As a researcher, I want to see relevant conferences and journals with their focus area, so that I can pick the most appropriate venue to publish my work.

**Acceptance criteria:**
- The Publication Venues section lists all 9 venues (ICSE, FSE, ASE, MSR, EASE, SANER, EMSE, TSE, TOSEM).
- Each venue shows its full name, abbreviation, type (conference or journal), and focus area.

### US6 – Judge venue relevance
As a PhD student, I want each venue to show how relevant it is to MSR research, so that I can prioritize where to submit my papers.

**Acceptance criteria:**
- Each venue displays a relevance level of High or Medium.
- Conferences and journals are displayed in separate groups.

### US7 – Read content comfortably
As a researcher, I want the page to be clean and easy to read, so that I can focus on the content without distractions.

**Acceptance criteria:**
- The page uses readable fonts, consistent spacing, and clear headings.
- Content is presented in tables or lists rather than long paragraphs.
- The page has no distracting animations.

### US8 – Access the guide anywhere
As a PhD student, I want to open the knowledge base in my web browser without installing anything, so that I can use it whenever I need it.

**Acceptance criteria:**
- The page is hosted live on GitHub Pages.
- The page works in modern browsers (Chrome, Firefox, Edge).
- The page layout remains usable on smaller screens.

## 4. Non-Functional Requirements
- **Simplicity:** The interface should be minimal and focus on content, as requested by the customer.
- **Readability:** Text and tables should be easy to scan, with clear contrast and spacing.
- **Professional appearance:** Basic modern styling so the page does not look outdated.
- **Maintainability:** Content should be easy to update by editing the HTML, with styling kept in a separate CSS file.
- **Availability:** The website should be publicly accessible through GitHub Pages and update automatically after each change to the main branch.