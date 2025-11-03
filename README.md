# Module 13: JWT Authentication & Full-Stack Integration

**Course:** IS601 - Python for Web API Development  
**Semester:** Fall 2025  
**Student:** Pruthul Patel  
**GitHub:** https://github.com/Pruthul15/assignment13  
**Status:** ✅ COMPLETE - 99 Tests Passing

---

## 📌 Project Overview

This project demonstrates **full-stack web development** with JWT authentication. It combines a secure FastAPI backend, PostgreSQL database, and interactive Jinja2/JavaScript frontend.

### Key Features
✅ User registration with password validation  
✅ JWT-based authentication  
✅ Protected dashboard  
✅ Create & manage calculations  
✅ 99 automated tests  
✅ Docker containerization  

---

## 📂 Complete Project Structure

```
assignment13/
│
├── 📁 app/                                # FastAPI Application
│   ├── __init__.py
│   ├── main.py                            # 9.7KB - Main FastAPI routes (Jinja2 + REST API)
│   ├── database.py                        # Database connection & configuration
│   ├── database_init.py                   # Database initialization script
│   ├── __pycache__/                       # Python cache
│   │
│   ├── 📁 auth/                           # Authentication Module
│   │   ├── __init__.py
│   │   ├── jwt.py                         # JWT token creation/verification
│   │   ├── redis.py                       # Token blacklisting (in-memory)
│   │   ├── dependencies.py                # Auth middleware & decorators
│   │   └── __pycache__/
│   │
│   ├── 📁 core/                           # Configuration Module
│   │   ├── __init__.py
│   │   ├── config.py                      # Settings & environment variables
│   │   └── __pycache__/
│   │
│   ├── 📁 models/                         # SQLAlchemy ORM Models
│   │   ├── __init__.py
│   │   ├── user.py                        # User model with password hashing
│   │   ├── calculation.py                 # Calculation model with factory pattern
│   │   └── __pycache__/
│   │
│   ├── 📁 operations/                     # Business Logic
│   │   ├── __init__.py
│   │   ├── calculation.py                 # Calculation operations
│   │   └── __pycache__/
│   │
│   └── 📁 schemas/                        # Pydantic Validation Schemas
│       ├── __init__.py
│       ├── base.py                        # Base schema classes
│       ├── user.py                        # User registration/login schemas
│       ├── calculation.py                 # Calculation request/response schemas
│       ├── token.py                       # JWT token response schema
│       └── __pycache__/
│
├── 📁 templates/                          # Jinja2 HTML Templates
│   ├── layout.html                        # Base template (extends to all pages)
│   ├── index.html                         # Home page (206 bytes)
│   ├── register.html                      # Registration form (7.9KB)
│   ├── login.html                         # Login form (6.6KB)
│   └── dashboard.html                     # Dashboard with calculations (11KB)
│
├── 📁 static/                             # Static Frontend Assets
│   ├── 📁 css/
│   │   └── style.css                      # Tailwind CSS styling (274 bytes)
│   └── 📁 js/
│       └── script.js                      # JavaScript form handling (72 bytes)
│
├── 📁 tests/                              # Test Suite (99 tests, 66% coverage)
│   ├── __init__.py
│   ├── conftest.py                        # 9.5KB - Pytest configuration & fixtures
│   ├── __pycache__/
│   │
│   ├── 📁 unit/                           # Unit Tests (21 tests)
│   │   ├── __init__.py
│   │   ├── test_calculator.py             # 8.9KB - Calculator logic tests
│   │   └── __pycache__/
│   │
│   ├── 📁 integration/                    # Integration Tests (78 tests)
│   │   ├── __init__.py
│   │   ├── test_calculation.py            # 5.1KB - Calculation model tests
│   │   ├── test_calculation_schema.py     # 3.3KB - Calculation schema validation
│   │   ├── test_database.py               # 2.1KB - Database connection tests
│   │   ├── test_dependencies.py           # 3.9KB - Auth dependency tests
│   │   ├── test_schema_base.py            # 3.3KB - Schema validation tests
│   │   ├── test_user.py                   # 12KB - User model & database tests
│   │   ├── test_user_auth.py              # 6.6KB - Authentication tests
│   │   └── __pycache__/
│   │
│   └── 📁 e2e/                            # End-to-End Tests
│       ├── __init__.py
│       ├── test_fastapi_calculator.py     # 14KB - Playwright browser tests
│       ├── test_e2e.bk                    # Backup file
│       └── __pycache__/
│
├── 📁 .github/                            # GitHub Configuration
│   └── workflows/                         # CI/CD Pipeline
│       └── test.yml                       # GitHub Actions workflow
│
├── 📁 .pytest_cache/                      # Pytest cache files
├── 📁 .vscode/                            # VS Code settings
├── 📁 .git/                               # Git version control
├── 📁 htmlcov/                            # Code coverage reports
│
├── 📁 venv/                               # Virtual environment (excluded from git)
│
├── 📄 Dockerfile                          # Docker container configuration
├── 📄 docker-compose.yml                  # 1.6KB - Multi-container orchestration
├── 📄 requirements.txt                    # 927 bytes - Python dependencies
├── 📄 pytest.ini                          # 1009 bytes - Pytest configuration
├── 📄 .gitignore                          # 71 bytes - Git ignore rules
├── 📄 .coverage                           # 52KB - Coverage data
├── 📄 init-db.sh                          # 158 bytes - Database init script
├── 📄 LICENSE                             # MIT License
└── 📄 README.md                           # 5.1KB - This documentation
```

---

## 🎯 Key Directories Explained

### `app/`
Contains the FastAPI application core:
- **main.py** - All routes (register, login, dashboard, calculations)
- **auth/** - JWT token management
- **models/** - Database models (User, Calculation)
- **schemas/** - Request/response validation
- **core/** - Configuration settings
- **operations/** - Business logic

### `templates/`
Jinja2 HTML templates for frontend:
- **layout.html** - Base template inherited by all pages
- **index.html** - Home page
- **register.html** - User registration form
- **login.html** - User login form
- **dashboard.html** - Protected dashboard with calculations

### `static/`
Client-side assets:
- **css/style.css** - Tailwind CSS styling
- **js/script.js** - Form handling & API calls

### `tests/`
99 automated tests organized by type:
- **unit/** - 21 tests for calculator logic
- **integration/** - 78 tests for API & database
- **e2e/** - Browser automation tests

---

## 🚀 Getting Started

### Prerequisites
```
Python 3.10+
Docker & Docker Compose
Git
```

### Quick Start with Docker
```bash
cd ~/projects/assignment13
docker-compose up --build
```

Visit:
- **Home:** http://localhost:8000
- **Register:** http://localhost:8000/register
- **Login:** http://localhost:8000/login
- **Dashboard:** http://localhost:8000/dashboard

### Local Development
```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run application
uvicorn app.main:app --reload --port 8000
```

---

## 🧪 Testing

### Run All Tests
```bash
pytest --tb=short -v
```

### Run Specific Tests
```bash
pytest tests/unit/ -v              # Unit tests only
pytest tests/integration/ -v       # Integration tests only
pytest tests/e2e/ -v              # E2E tests only
```

### View Coverage
```bash
pytest --cov=app --cov-report=html
```

### Test Results
```
✅ 99 PASSED
⏭️ 1 SKIPPED
❌ 0 FAILED
📊 66% Code Coverage
```

---

## 🔐 API Endpoints

### Authentication
```
POST /auth/register        → 201 Created (new user registered)
POST /auth/login           → 200 OK (returns JWT token)
```

### Protected Routes (require JWT)
```
GET  /dashboard            → 200 OK (user dashboard)
GET  /calculations         → 200 OK (list user's calculations)
POST /calculations         → 201 Created (create new calculation)
DELETE /calculations/{id}  → 204 No Content (delete calculation)
```

### Health Check
```
GET /health                → 200 OK (system status)
```

---

## 💡 How It Works

### Registration Flow
```
1. User fills registration form
2. Client validates (JavaScript)
3. POST request to /auth/register
4. Server validates (Pydantic)
5. Password hashed (bcrypt)
6. User stored in PostgreSQL
7. Success response with JWT
8. Token saved to localStorage
9. Redirect to login
```

### Login & Authentication
```
1. User submits credentials
2. Server validates username/password
3. JWT token generated (HS256)
4. Token sent to client
5. Client stores token (localStorage)
6. Protected requests include token in header
7. Server validates token before allowing access
8. Dashboard renders with user data
```

### Dashboard Access
```
1. User on dashboard page
2. JavaScript checks localStorage for token
3. If no token → redirect to login
4. If token exists → fetch /calculations
5. Include token in Authorization header
6. Server validates token
7. Return user's calculations
8. Display in HTML table
```

---

## 🛠️ Technologies

### Backend
- **FastAPI 0.115.8** - Web framework
- **SQLAlchemy 2.0.38** - ORM
- **Pydantic 2.10.6** - Validation
- **PostgreSQL 15** - Database
- **PyJWT** - JWT tokens
- **passlib + bcrypt** - Password hashing

### Frontend
- **Jinja2 3.1.5** - Templates
- **HTML5** - Markup
- **CSS3 + Tailwind** - Styling
- **JavaScript ES6** - Interactivity
- **Fetch API** - HTTP requests

### Testing & DevOps
- **pytest 8.3.4** - Test framework
- **Playwright 1.50.0** - E2E automation
- **Docker** - Containerization
- **GitHub Actions** - CI/CD

---

## 📊 Test Coverage Summary

| Component | Tests | Status | Coverage |
|-----------|-------|--------|----------|
| Unit Tests | 21 | ✅ PASS | - |
| Integration Tests | 78 | ✅ PASS | - |
| **TOTAL** | **99** | **✅ PASS** | **66%** |

### High Coverage Areas
- models/user.py - **89%**
- models/calculation.py - **92%**
- schemas/calculation.py - **92%**
- auth/dependencies.py - **86%**

---

## 🔒 Security Features

### Password Security
✅ Bcrypt hashing with salt  
✅ 8+ character minimum  
✅ Uppercase, lowercase, digit required  
✅ Server-side validation  

### JWT Authentication
✅ HS256 encryption  
✅ Secret key from environment  
✅ Token expiration (30 min)  
✅ Bearer token in Authorization header  

### API Security
✅ Protected routes require token  
✅ Proper HTTP status codes (401, 403)  
✅ Input validation (Pydantic)  
✅ CORS configuration  

---

## 📝 Requirements

All dependencies listed in `requirements.txt`:
- redis==5.0.0
- fastapi==0.115.8
- sqlalchemy==2.0.38
- pydantic==2.10.6
- python-jose==3.3.0
- passlib==1.7.4
- psycopg2-binary==2.9.10
- pytest==8.3.4
- pytest-cov==6.0.0
- playwright==1.50.0
- faker==36.1.0
- And 40+ more...

---

## 📸 Application Screenshots

1. **Home Page** - Welcome message
2. **Register Page** - Registration form
3. **Login Page** - Login form
4. **Dashboard** - Authenticated, shows calculations
5. **Tests** - 99 passing tests

---

## 🔗 GitHub Repository

**URL:** https://github.com/Pruthul15/assignment13

### Git Commands
```bash
# View commits
git log --oneline

# View current status
git status

# Push changes
git push origin main
```

---

## 📋 Submission Checklist

- ✅ GitHub repository with complete code
- ✅ 99 tests passing (1 skipped)
- ✅ Docker Compose working
- ✅ 5 application screenshots
- ✅ Comprehensive README documentation
- ✅ Security features implemented
- ✅ Full-stack integration complete
- ✅ Code follows best practices

---

## 🎓 Learning Outcomes Met

✅ **CLO 3** - Automated testing (99 tests)  
✅ **CLO 4** - GitHub Actions CI/CD  
✅ **CLO 7** - JWT authentication concepts  
✅ **CLO 9** - Docker containerization  
✅ **CLO 10** - REST API design & testing  
✅ **CLO 11** - SQLAlchemy & PostgreSQL  
✅ **CLO 12** - Pydantic validation & JSON  
✅ **CLO 13** - Security best practices  

---

## 🎉 Conclusion

Module 13 successfully demonstrates a complete full-stack web application with:

- Secure JWT authentication
- Modern Python FastAPI framework
- Interactive frontend with Jinja2 & JavaScript
- PostgreSQL database integration
- Comprehensive test coverage (99 tests)
- Docker containerization
- Production-ready code



---


**Author:** Pruthul Patel  
**Email:** pp8787140@gmail.com  
**GitHub:** [@Pruthul15](https://github.com/Pruthul15)