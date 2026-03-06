# Login UI From Figma

## Project Overview

This project is a front-end implementation of a login page based on a Figma design. The main goal is to recreate the original layout, color palette, typography, and visual style as closely as possible while exploring different ways to build the same interface on the web.

The page follows a modern two-column layout:

- The left section contains decorative illustrations, background elements, and supporting marketing text.
- The right section contains the login area, including the logo, heading, Google sign-in button, email/password form, and support links.

## Highlights

- Converted a Figma design into a real web interface.
- Built in 3 different versions:
  - `index.html`: pure HTML/CSS version
  - `index-bt.html`: Bootstrap version
  - `index-tw.html`: Tailwind CSS version
- Uses image assets and decorative elements to stay close to the original design.
- Includes basic responsive behavior by hiding the illustration area on smaller screens and prioritizing the login form.
- Includes JavaScript-based form validation.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Tailwind CSS

## Current Features

- Two-column login page layout
- `Continue with Google` button for third-party sign-in UI
- Login form with email and password fields
- Input validation:
  - Required email and password fields
  - Email format validation in the Tailwind version
  - Minimum password length validation in the Tailwind version
- Inline error messages shown directly in the interface

## Project Structure

```text
.
|-- index.html
|-- index-bt.html
|-- index-tw.html
|-- style.css
|-- style-bt.css
|-- script.js
|-- scrypt.js
`-- images/
```

## Project Purpose

This project demonstrates my ability to translate a Figma design into a working web interface. It also shows how the same layout can be implemented using different approaches, including pure CSS, Bootstrap, and Tailwind CSS. It is a good practice project for improving UI slicing, pixel alignment, responsive design, and basic form handling skills.

## Short Portfolio Description

> I designed and developed a login page based on a Figma mockup, then recreated it using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS to compare layout implementation, responsiveness, and form validation approaches.
