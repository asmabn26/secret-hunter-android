# Secret Hunter Android — APK Security Analysis Platform

**Android Application Static Security Analysis | Secret Detection | API Endpoint Discovery | Risk Assessment**

## Overview

Secret Hunter Android is an academic cybersecurity project designed to analyze Android APK files and identify potential security weaknesses through static analysis.

The platform combines a Python Flask backend with a React-based web dashboard to inspect Android applications, detect potentially exposed secrets, identify suspicious API endpoints, analyze application configurations, and generate security assessment reports.

The project explores Android application security, vulnerability identification, automated security analysis, and DevSecOps principles.

> **Disclaimer:** Secret Hunter Android is an educational security analysis tool. It is intended exclusively for authorized assessments and research.

## Project Demonstration

### Video Demo

A video demonstration is available to showcase the Secret Hunter Android platform and its APK security analysis workflow.



https://github.com/user-attachments/assets/0308fa35-c075-4ebe-b18b-2bb7db6784e3


The demonstration highlights the platform's main features:

- APK upload through the web interface.
- Android application static analysis.
- Detection of potentially exposed secrets and credentials.
- Identification of API endpoints.
- AndroidManifest.xml security inspection.
- Security risk scoring.
- Visualization of findings and security reports.

### Application Preview

Add screenshots to `docs/screenshots/` to showcase the interface.

Example:

```markdown
![Secret Hunter Android Dashboard](docs/screenshots/dashboard.png)
```

## Key Features

### 1. Android APK Static Analysis

- APK file extraction and inspection.
- Analysis of application resources and configuration files.
- Identification of security-relevant information.
- Extraction of artifacts for further security analysis.

### 2. Sensitive Information Detection

The secret scanning module searches for patterns associated with potentially exposed sensitive information, including:

- API keys.
- Authentication tokens.
- Hardcoded credentials.
- Other potentially sensitive strings.

Detection rules are configured through:

`backend/rules/secret_patterns.json`

### 3. API Endpoint Discovery

- Extraction of potential API endpoints.
- Identification of URLs and network-related references.
- Analysis of suspicious endpoint patterns.
- Classification of findings based on security indicators.

Endpoint detection rules are stored in:

`backend/rules/endpoint_patterns.json`

### 4. Android Manifest Security Analysis

The manifest analysis module examines Android application configuration information.

Areas of analysis include:

- Application permissions.
- Security-relevant manifest attributes.
- Potentially risky application configurations.
- Android component exposure indicators.

### 5. Network Security Analysis

- Inspection of network-related configuration indicators.
- Identification of potentially insecure communication settings.
- Analysis of network references extracted from application resources.

### 6. Risk Scoring

The platform includes a risk scoring module designed to consolidate security findings into an overall assessment.

The scoring system uses configured risk rules to help prioritize detected issues.

Risk rules are defined in:

`backend/rules/risk_rules.json`

### 7. AI-Assisted Analysis Components

The backend contains AI-related analysis modules:

- `ai_analyzer.py`
- `ai_model_service.py`
- `ai_service.py`

These components provide a foundation for enhanced security analysis.

AI-related capabilities should be considered experimental until their model integration and behavior have been validated.

### 8. Security Report Generation

- Generation of structured security findings.
- HTML report generation.
- Risk assessment summaries.
- Security recommendations.
- Report visualization through the application interface.

### 9. Interactive Web Dashboard

The frontend is built using React and Vite.

It provides a user interface for:

- Uploading APK files.
- Initiating analysis.
- Viewing detected findings.
- Exploring risk assessment results.
- Accessing security reports.

## Technology Stack

| Category | Technologies |
|---|---|
| Backend | Python, Flask |
| Frontend | React, JavaScript, Vite |
| Styling | Tailwind CSS, PostCSS |
| Android Analysis | APK Extraction, Manifest Inspection |
| Security Detection | Pattern Matching, JSON Rules |
| API | RESTful API |
| Reporting | HTML Report Generation |
| Storage | File-Based Storage |
| Containerization | Docker, Docker Compose |
| Testing | Python Unit Tests |

## System Architecture

```text
                  USER
                    |
                    v
          React Web Dashboard
             (Vite Frontend)
                    |
                    v
             Flask REST API
                    |
                    v
            Analysis Workflow
                    |
          +---------+---------+
          |                   |
          v                   v
     APK Extraction       Job Management
          |
          v
   +------+----------------------+
   |             |              |
   v             v              v
Secret       Endpoint       Manifest
Scanner      Scanner        Analyzer
   |             |              |
   +-------------+--------------+
                 |
                 v
          Network Analysis
                 |
                 v
            Risk Scoring
                 |
                 v
         Analysis Results
                 |
                 v
         HTML Report Generator
                 |
                 v
          React Dashboard
```

## Project Structure

```text
secret-hunter-android/
|
├── backend/
│   ├── api/
│   │   ├── routes_analysis.py
│   │   ├── routes_reports.py
│   │   └── routes_health.py
│   │
│   ├── scanners/
│   │   ├── apk_extractor.py
│   │   ├── secret_scanner.py
│   │   ├── endpoint_scanner.py
│   │   ├── manifest_analyzer.py
│   │   ├── network_analyzer.py
│   │   └── risk_scoring.py
│   │
│   ├── rules/
│   │   ├── secret_patterns.json
│   │   ├── endpoint_patterns.json
│   │   └── risk_rules.json
│   │
│   ├── reports/
│   │   ├── report_generator.py
│   │   └── templates/
│   │
│   ├── services/
│   ├── schemas/
│   ├── storage/
│   ├── jobs/
│   ├── core/
│   ├── tests/
│   ├── ai_analyzer.py
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── docs/
├── scripts/
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites

- Python 3.8 or newer
- Node.js 16 or newer
- npm
- Git
- APKTool for APK extraction workflows, where required
- Docker and Docker Compose (optional)

### Step 1 — Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/secret-hunter-android.git
cd secret-hunter-android
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 2 — Set Up the Backend

On Windows:

```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

The backend requirements file lists Flask, Flask-CORS, and Werkzeug.

### Step 3 — Start the Backend

From the `backend` directory:

```bash
python app.py
```

The expected local backend address is:

`http://localhost:5000`

### Step 4 — Set Up the Frontend

Open a second terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

The expected frontend address is:

`http://localhost:5173`

Open the application in your browser.

### Step 5 — Analyze an APK

1. Open the Secret Hunter Android web interface.
2. Upload an APK file that you own or are authorized to analyze.
3. Start the security analysis.
4. Review detected secrets and endpoints.
5. Inspect manifest and network security findings.
6. Review the risk assessment.
7. Generate or view the available security report.

## Docker Support

The repository includes a `docker-compose.yml` file.

However, the supplied Compose file is currently empty, so Docker deployment requires additional configuration.

A future Docker configuration can provide separate services for:

- Flask backend.
- React frontend.
- Shared configuration and networking.

Docker deployment should be tested before being considered operational.

## API Overview

The backend contains API modules for analysis and reporting.

The project's documented API design includes the following routes:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/analysis/upload` | Upload and analyze an APK |
| GET | `/api/analysis/<analysis_id>` | Retrieve analysis results |
| POST | `/api/analysis/advanced` | Advanced analysis workflow |
| GET | `/api/reports/<analysis_id>` | Retrieve a report |
| POST | `/api/reports/export` | Export analysis results |

The exact behavior and availability of each endpoint should be verified against the running backend.

## Detection Rules

The platform uses configurable JSON-based rules.

### Secret Detection

`backend/rules/secret_patterns.json`

Contains patterns for identifying potentially sensitive information.

### Endpoint Detection

`backend/rules/endpoint_patterns.json`

Defines patterns for discovering and assessing application endpoints.

### Risk Assessment

`backend/rules/risk_rules.json`

Contains rules used to support the security risk assessment.

## Testing

The repository contains Python test modules, including:

- `test_endpoint_scanner.py`
- `test_risk_scoring.py`
- `test_secret_scanner.py`

To run available backend tests:

```bash
cd backend
python -m pytest tests/
```

Install pytest separately if it is not already available:

```bash
pip install pytest
```

Some test files are currently placeholders. Test coverage and execution results should be validated before claiming full automated testing.

## Security Considerations

This project processes potentially untrusted Android application packages.

Important precautions include:

- Analyze only authorized APK files.
- Validate uploaded file types and sizes.
- Restrict access to temporary files.
- Avoid exposing detected secrets in public logs or reports.
- Apply authentication and authorization before public deployment.
- Isolate APK processing from sensitive host resources.
- Use HTTPS when deploying outside a local development environment.
- Apply appropriate file retention and cleanup policies.
- Review all findings manually to reduce false positives.

Static analysis cannot guarantee that an application is secure or identify every vulnerability.

## Limitations

- The project focuses primarily on static analysis.
- It does not replace dynamic application security testing.
- Pattern-based detection can produce false positives and false negatives.
- Some AI-related components require further validation.
- Docker deployment configuration is incomplete.
- Some tests and support modules are placeholders.
- Production deployment requires additional security hardening.

## Future Improvements

- Complete Docker and Docker Compose configuration.
- Integrate automated CI/CD pipelines.
- Improve Android manifest parsing.
- Expand secret detection rules.
- Add dynamic analysis capabilities.
- Integrate vulnerability intelligence sources.
- Implement role-based access control.
- Add API rate limiting.
- Improve automated test coverage.
- Introduce more advanced ML-based detection.
- Support additional report formats.
- Add security audit logging.

## Skills Demonstrated

- Android application security analysis.
- Static Application Security Testing (SAST).
- Sensitive information detection.
- API endpoint discovery.
- Security configuration analysis.
- Risk assessment and vulnerability prioritization.
- Python backend development.
- REST API architecture.
- React frontend development.
- Security reporting.
- DevSecOps-oriented application design.

## Author

**Asma Bensassi Nour**

Cyberdefense Engineering Student — ENSA Marrakech

Academic cybersecurity project focused on Android application security, static analysis, and automated vulnerability detection.

---

**Secret Hunter Android — Analyze. Detect. Assess. Secure.**
