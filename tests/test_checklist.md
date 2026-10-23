# Manual Test Checklist

These tests were carried out by opening `src/index.html` in a web browser (Chrome) and checking the page by hand.

---

## Test 1: The page loads correctly
**What I did:** Opened `index.html` in the browser.
**What should happen:** The page opens with the "MSR Knowledge Base" header and four tab buttons underneath it.
**Result:** Passed

---

## Test 2: Data Sources is shown first
**What I did:** Loaded the page without clicking anything.
**What should happen:** The Data Sources tab is highlighted, and its table is the only content visible.
**Result:** Passed

---

## Test 3: Switching between tabs
**What I did:** Clicked Collection Methods, then Analysis Methods, then Publication Venues, then back to Data Sources.
**What should happen:** Each click shows only that tab's section and hides the others.
**Result:** Passed

---

## Test 4: The selected tab is highlighted
**What I did:** Clicked on different tabs one at a time.
**What should happen:** The tab I clicked turns dark blue, and the previously selected tab goes back to white.
**Result:** Passed

---

## Test 5: Data Sources content is complete
**What I did:** Read through the Data Sources table.
**What should happen:** All 7 sources are listed (GitHub, Stack Overflow, JIRA, App Stores, Travis CI / Jenkins, Mailing Lists, npm Registry), each with the type of data it provides and a short description.
**Result:**  Passed

---

## Test 6: The page works on a small screen
**What I did:** Made the browser window narrow, like a phone screen.
**What should happen:** The tab buttons wrap onto new lines, and the table can scroll sideways without breaking the page layout.
**Result:** Passed