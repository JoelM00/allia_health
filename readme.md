# MyApp

## Overview

**Allia_Health** . This is a simple app to manage patients and notes

---

## Setup

The app is containerized using **Docker Compose**, which handles all dependencies and services.

1. **Clone the repository**

```bash
git clone git@github.com:JoelM00/allia_health.git
cd myapp
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

1. **Authentication & Authorization**
   - Implement JWT-based authentication.
   - Role-based access control (RBAC) for admin vs regular users.

2. **UI/UX Enhancements**
   - Modern responsive design.
   - Improved navigation and accessibility.
   - Interactive components and better feedback for actions.

3. **Test Coverage**
   - Add unit, integration, and end-to-end tests.
   - Ensure 80%+ code coverage.

4. **Error Uniformization**
   - Standardize API error responses.
   - Provide clear, user-friendly error messages on the frontend.
   - Centralized logging for debugging.

---
