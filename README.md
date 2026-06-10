FitLife Gym
Project Report
EAD Semester Project — 2026
Khalid Hussain  |  GitHub: khalidhussain123

1. Project Title
FitLife Gym — A Modern Gym & Fitness Center Website

2. Project Description
FitLife Gym is a fully responsive, single-page React web application for a gym and fitness center. It serves as a professional front-facing website that showcases gym services, trainer profiles, membership pricing plans, customer testimonials, and contact information. The site features a dark theme with gradient accents, smooth scroll navigation, animated UI components, and a mobile-friendly layout — making it suitable for real-world deployment as a gym business website.

3. Features
•	Responsive Navigation Bar — Fixed top navbar with smooth scroll links and a hamburger menu for mobile.
•	Hero / Banner Section — Full-screen landing with animated headings, fitness icons (Strength, Cardio, Endurance), CTA buttons, and social media links.
•	Stats Row — Key milestones: 5+ Years of Service, 50+ Certified Trainers, 1000+ Happy Members, 95% Satisfaction.
•	Why Choose Us (WCU) — Feature cards listing gym highlights alongside a responsive image grid gallery.
•	Meet Our Trainers — 3-column image grid with hover overlay showing trainer name and certification.
•	Pricing Plans — Beginner, Premium, and Pro tiers with a Monthly / Yearly billing toggle.
•	Community Opinions — 6 customer review cards with star ratings and navigation buttons.
•	Contact Section — Gym address/phone/email info panel plus an animated contact form.
•	Footer — Brand name, quick navigation links, and social icons (Facebook, Instagram, Twitter, LinkedIn).
•	Animations — Framer Motion on Contact section; CSS slide/fade on Banner.
•	Smooth Scrolling — All nav links use react-scroll for seamless in-page navigation.

4. Technologies Used
Category	Technology
Frontend Framework	React 18 (JSX)
Styling	Tailwind CSS v4
Animations	Framer Motion
Icons	React Icons, Lucide React
Smooth Scrolling	react-scroll
Build Tool	Vite
Language	JavaScript (ES6+)

5. Project Structure

project/
  src/
    assets/           (Images: bannertop.png, wcu1-3.jpg, 1-6.jpg)
    Components/
      NavBar.jsx      Fixed navigation bar
      Banner.jsx      Hero section + stats row
      Wcu.jsx         Why Choose Us section
      Mot.jsx         Meet Our Trainers section
      Pricing.jsx     Pricing plans with toggle
      YourOpinion.jsx Community testimonials
      Contact.jsx     Contact info + form
      Footer.jsx      Footer with links
    App.jsx           Root component
    main.jsx          React DOM entry point
    index.css         Global styles (Tailwind import)
  index.html
  vite.config.js
  package.json

6. Prerequisites
Make sure the following are installed before setup:
•	Node.js v18 or higher — https://nodejs.org
•	npm v9 or higher (comes bundled with Node.js)
•	Git — https://git-scm.com

7. Frontend Setup Instructions
Step 1 — Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Step 2 — Install Dependencies

npm install

This installs React, Tailwind CSS, Framer Motion, React Icons, Lucide React, react-scroll, and Vite.
Step 3 — Add Required Assets
Place the following image files inside src/assets/:
File	Used In
bannertop.png	Banner hero background
wcu1.jpg, wcu2.jpg, wcu3.jpg	Why Choose Us section
1.jpg to 6.jpg	Meet Our Trainers section

8. Backend Setup Instructions
This project has no backend. It is a purely static frontend application — no server or API is needed to run it.
If you want to add backend features in the future, consider:
•	Node.js + Express — for a custom REST API
•	Firebase — for a quick serverless backend
•	EmailJS — to send contact form emails without any backend code

9. Database Setup Instructions
This project does not use a database. All data such as pricing plans, testimonials, and trainer info is hardcoded as JavaScript arrays inside the components.
If a database is added in the future, recommended options are:
•	Firebase Firestore — real-time NoSQL cloud database
•	Supabase — PostgreSQL-based backend-as-a-service
•	MongoDB Atlas — cloud-hosted NoSQL database

10. Environment Variables
No environment variables are required for this project right now. If you later add Firebase or EmailJS, create a .env file in the root folder:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

Note: In Vite, all env variables must start with VITE_ and are accessed via import.meta.env.VITE_VARIABLE_NAME

11. How to Run the Project
Development Mode

cd your-project-folder
npm install
npm run dev

Open your browser and visit: http://localhost:5173
The page will auto-reload whenever you save a file.
Production Build

npm run build

Output is generated in the dist/ folder, ready for deployment.
Preview Production Build Locally

npm run preview


12. Component Overview
Component	Section ID	Description
NavBar.jsx	—	Fixed top navbar with desktop & mobile menu
Banner.jsx	#home	Hero section with CTA, icons, and stats
Wcu.jsx	—	Why Choose Us: feature cards + image grid
Mot.jsx	#trainer	Trainer grid with hover overlay effect
Pricing.jsx	—	3-tier pricing with monthly/yearly toggle
YourOpinion.jsx	#opinions	6-card testimonials with star ratings
Contact.jsx	#contact	Address info + animated contact form
Footer.jsx	—	Brand name, quick links, social icons

13. Known Issues & Suggested Improvements
•	Contact form does not send data anywhere — backend or EmailJS integration needed.
•	"Add Your Opinion" button has no functionality yet.
•	Left/right navigation arrows in the Opinions section are not working.
•	Trainer cards show placeholder names (Trainer 1, Trainer 2) — replace with real data.
•	Wcu.jsx has 4 identical feature cards — update with unique content.
•	Typos in code: "Messege" should be "Message", "Couch" should be "Coach".

Khalid Hussain  |  GitHub: khalidhussain123  |  EAD Semester Project 2026
