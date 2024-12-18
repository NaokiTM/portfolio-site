# My Portfolio Site

Welcome to my portfolio site repository! This project is built using Next.js and Tailwind CSS, showcasing my skills, projects, and experiences.

NOTE: This project is still a work in progress, as I had some issues with displaying SVG's, and I have yet to add a dedicated email form. 
However, My contact links such as my Github and Linkedin are still accessible. 

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)

## Features
- Responsive design using Tailwind CSS
- Scroll-to-content feature implemented using refs
- Cool dark mode feature

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/NaokiTM/portfolio-site.git
   cd portfolio-site
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the Next.js development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. The page will automatically reload if you make changes to the code.

localhost won't run if there are fields in next.config.ts, so comment out the content in next config before testing locally. add it back in when building / deploying (This was the case on my computer, may not be the same on yours)

## Building for Production

To create a production-ready build, use the following command:

```bash
npm run build
```

This will generate an optimized version of your site in the `.next` folder.

To start the production server, run:

```bash
npm start
```