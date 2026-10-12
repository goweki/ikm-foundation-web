# Next.js Website Editing Guide

This guide covers updating team details and adding impact reports to the website.

## Prerequisites

- VS Code installed
- Basic GitHub and Git knowledge
- Access to the website's GitHub repository

---

## Step 1: Clone the Repository & Open in VS Code

1. Open your terminal and clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open the project folder in VS Code.
3. Install dependencies and run the development server:
   ```bash
   npm ci
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser to view the site.

_[Screenshot Placeholder: VS Code terminal running `npm run dev`]_

---

## Step 2: Handle Assets (Photos & Reports)

1. Drop the new **CSR Committee Photo** into the public assets folder (e.g., `public/images/team/`).
2. Drop the new **Sustainability Report PDF** into the documents folder (e.g., `public/docs/reports/`).

_[Screenshot Placeholder: File explorer in VS Code showing new files added to the public folder]_

---

## Step 3: Update the Team Section

1. Locate the team data file (commonly found under `data/team.js`, `content/team.json`, or directly inside the team component file).
2. Open the file and find James's entry to update his title.

### Use Case 1b: Change James's Title

- Change `"Managing Partner"` to `"Patron"`.

```json
// Example Data Structure
{
  "name": "James Smith",
  "title": "Patron", // Updated from Managing Partner
  "image": "/images/team/james.jpg"
}
```

_[Screenshot Placeholder: VS Code editor highlighting the title change for James]_

### Use Case 1a: Add CSR Committee Member

- Add a new object to the team array with the new member's details and the uploaded photo path, setting their title to `"CSR Committee Member"`.

```json
{
  "name": "Jane Doe",
  "title": "CSR Committee Member",
  "image": "/images/team/csr-new-member.jpg"
}
```

_[Screenshot Placeholder: VS Code editor showing the new team object added to the array]_

---

## Step 4: Update the Impact Section (Annual Reports)

1. Locate the impact or reports data file/component (e.g., `data/reports.js` or `content/impact.json`).
2. Add a new entry for the Sustainability Report, linking to the PDF file you placed in the `public` folder.

```json
// Example Reports Array
{
  "title": "Sustainability Report 2026",
  "year": "2026",
  "fileUrl": "/docs/reports/sustainability-report-2026.pdf"
}
```

_[Screenshot Placeholder: VS Code editor showing the new annual report entry added]_

---

## Step 5: Test Locally

1. Check your local browser preview (`http://localhost:3000`) to confirm:
   - James's title reads "Patron".
   - The new CSR Committee member is visible with their photo and title.
   - The Sustainability Report is downloadable/accessible under the Annual Reports section.

_[Screenshot Placeholder: Browser view showing updated team and impact sections]_

---

## Step 6: Commit and Push Changes

1. Stage your changes in git:
   ```bash
   git add .
   ```
2. Commit with a clear message:
   ```bash
   git commit -m "Update team titles, add CSR member, and add sustainability report"
   ```
3. Push to GitHub to deploy:
   ```bash
   git push origin main
   ```

_[Screenshot Placeholder: Terminal showing successful git push]_
