Reflection - Assignment 13: JWT Authentication and E2E Testing
What I Learned
How to implement a full JWT authentication system in FastAPI, including registration, login, and token handling both server-side and in the front-end.

Applied password hashing using bcrypt for secure storage.

Learned how Jinja2 templates and JavaScript work together to validate user input and interact with backend APIs.

Understood the automated testing workflow using pytest for backend logic and Playwright for browser-based end-to-end (E2E) tests of registration and login flows.

Saw how Docker and CI/CD integrate to automate builds and run tests for every commit.

Challenges I Faced
Challenge 1: Database Port Conflict
Docker PostgreSQL port 5432 was already in use; changed docker-compose config and environment variable to 5433 to avoid collision.

Challenge 2: Database and Table Creation
Tables did not automatically appear; fixed by running the database initialization script, ensuring all models were created.

Challenge 3: Registration and JWT Flow
Needed to handle duplicate email/username errors and consistent JSON error formats for frontend and Playwright feedback.

Challenge 4: Playwright E2E Test Flakiness
Some E2E test steps would randomly fail if UI redirect was too fast or if users/emails were reused. Fixed by generating a random username/email for every test run and by checking for redirects instead of transient messages.

How I Solved These Problems
Changed database ports and configs for Docker compatibility.

Used manual docker-compose exec ... scripts to initialize tables.

Added proper exception handling in registration/login endpoints so frontend and Playwright always get JSON errors, never raw errors.

Improved Playwright coverage for all user flows—register, login valid/invalid—with unique credentials every run.

Used both curl and browser-based tests to debug all scenarios.

Testing Process
Ran and verified:

All backend pytest tests (100/100 passing, 66%+ coverage)

Frontend registration and login flows by hand in browser

Playwright E2E tests for registration/login (all 6 scenarios passing)

Playwright tested valid/invalid registration, valid/invalid login, and UI updates for alerts and redirects.

Docker and CI workflows also validated that everything succeeds in automation, not just locally.

What I Would Improve
Automate database clean-up or isolation between tests (for re-using usernames/emails)

Add more E2E coverage for edge cases and future calculation/BREAD operations

Improve logs and documentation for setup steps and troubleshooting

Standardize all error responses for the frontend (makes E2E easier)

Conclusion
This assignment was my first full-stack feature: both backend and frontend working together with security. Automated tests (pytest and Playwright) gave me confidence I didn't break any flows, and CI/CD means every push is checked. Most importantly, I now understand how modern web apps use JWT for auth and why covering both positive and negative scenarios is key to reliable apps.