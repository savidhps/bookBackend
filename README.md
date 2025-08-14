# Book Review Board – Backend

## Quick Start
1. Copy `.env.example` to `.env` and update values if needed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server (http://localhost:5000):
   ```bash
   npm run dev
   ```

## API
- `POST /api/register` – { name, email, password }
- `POST /api/login` – { email, password }
- `POST /api/books` (Auth) – { title, author, description, coverImage }
- `GET  /api/books`
- `GET  /api/books/:id`
- `POST /api/books/:id/reviews` (Auth) – { rating, comment }

### Test JSON
**Register:**
```json
{ "name": "Alice", "email": "alice@example.com", "password": "pass123" }
```
**Login:**
```json
{ "email": "alice@example.com", "password": "pass123" }
```
**Add Book (Auth header: Bearer <token>):**
```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "description": "A handbook of agile software craftsmanship.",
  "coverImage": "https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX374_BO1,204,203,200_.jpg"
}
```
**Add Review (Auth):**
```json
{ "rating": 5, "comment": "A must-read for devs!" }
```
