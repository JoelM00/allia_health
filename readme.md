# MyApp

## Overview

**Allia_Health** . This is a simple app to manage patients and notes

---

## Setup

The app is containerized using **Docker Compose**, which handles all dependencies and services.

1. **Clone the repository**

```bash
git clone git@github.com:JoelM00/allia_health.git
cd allia_health
```

2. **Start the app**

```bash
docker-compose up --build
```

3. **Access the app**
   Once running, the app is available at:

```
http://localhost:3000
```

---

## Planned Improvements

1. **Env loading bug**
   - Fix the environment for develop, prodution and tests.

2. **Fix the docker compose deploy**
   - Guarantee that the correct variables are being loaded.

3. **Authentication & Authorization**
   - Implement JWT-based authentication.
   - Role-based access control with admin and regular users.

4. **UI/UX Enhancements**
   - Modern responsive design.
   - Improved navigation and accessibility.

5. **Test Coverage**
   - Add unit, integration, and end-to-end tests.
   - Ensure 80%+ code coverage.

6. **Error Uniformization**
   - Standardize API error responses.
   - Provide clear, user-friendly error messages on the frontend.

---
