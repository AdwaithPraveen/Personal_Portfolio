# API Contract
Base URL: http://localhost:8000

## Database Schema (Projects)
- id (Integer, Primary Key)
- title (String)
- github_link (String)
- image_url (String)

## Endpoints
1. GET /api/projects
   - Description: Returns a JSON array of all uploaded projects.
   - Response: `[{"id": 1, "title": "My Project", "github_link": "...", "image_url": "..."}]`

2. POST /api/projects
   - Description: Adds a new project to the portfolio.
   - Payload: `{"title": "String", "github_link": "String", "image_url": "String"}`
   - Response: `{"status": "success", "message": "Project added successfully"}`