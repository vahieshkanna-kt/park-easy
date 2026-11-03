# ParkEasy – Smart Parking Slot Booking & Management System

A MERN full-stack mini project. Customers can register, add vehicles, browse parking locations, reserve available slots, and view/cancel bookings. Admins can manage locations, slots, and booking statuses.

## Stack
- React + Vite + Bootstrap (frontend)
- Node.js + Express + Mongoose (REST API)
- MongoDB Atlas or local MongoDB
- JWT authentication + bcrypt password hashing

## Requirements
- Node.js 20.19+ or 22.12+ and npm
- MongoDB Atlas account (or local MongoDB)

## 1. Configure the backend
```bash
cd server
npm install
```
Copy `.env.example` to `.env`, then set `MONGODB_URI` and a long random `JWT_SECRET`.

Create the first administrator:
```bash
npm run seed:admin
```
The default admin credentials are read from `ADMIN_NAME`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` in `.env`. Change the sample password before running the script.

Start the API:
```bash
npm run dev
```
API runs at `http://localhost:5000`; health check: `http://localhost:5000/api/health`.

## 2. Configure the frontend
Open a second terminal:
```bash
cd client
npm install
```
Copy `.env.example` to `.env` (default API URL is `http://localhost:5000/api`) and run:
```bash
npm run dev
```
Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## 3. First use
1. Register a normal customer account from the website.
2. Sign in using the admin credentials configured in `server/.env` to access the admin dashboard.
3. As admin, create a parking location and add parking slots.
4. Sign in as a customer, add a vehicle, select a location and reserve an available slot.

## Features
- Customer/admin role-based access control
- Password hashing and JWT-protected API routes
- Vehicle create/read/update/delete
- Parking location and slot CRUD (admin)
- Booking create/read/cancel and admin status updates
- Slot reservation lock to prevent two active bookings for the same slot
- Server-side validation, centralized error responses, and responsive UI
- Dashboard counts and booking history

## API overview
| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| POST | `/api/auth/register` | Public | Register customer |
| POST | `/api/auth/login` | Public | Login |
| GET | `/api/auth/me` | User | Current profile |
| GET/POST | `/api/vehicles` | User | List/add vehicles |
| PUT/DELETE | `/api/vehicles/:id` | Owner | Update/delete vehicle |
| GET | `/api/locations` | Public | List locations with slots |
| POST | `/api/locations` | Admin | Create location |
| PUT/DELETE | `/api/locations/:id` | Admin | Update/delete location |
| POST | `/api/locations/:id/slots` | Admin | Add slot |
| PUT/DELETE | `/api/slots/:id` | Admin | Update/delete slot |
| POST | `/api/bookings` | User | Reserve slot |
| GET | `/api/bookings/mine` | User | My bookings |
| PATCH | `/api/bookings/:id/cancel` | Owner/Admin | Cancel booking |
| GET | `/api/bookings` | Admin | All bookings |
| PATCH | `/api/bookings/:id/status` | Admin | Update booking status |

## Notes / scope
- Payments are represented as payment records/status only; no real money is charged. Integrate a payment provider only after configuring its official server-side credentials.
- The MVP reserves a slot until the booking is cancelled or marked completed. For production timed reservations, add date/time overlap checks and a transaction/atomic reservation strategy.
- Do not commit `.env`, database credentials, or real user data to GitHub.

## GitHub upload
```bash
git init
git add .
git commit -m "Initial ParkEasy full stack application"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ParkEasy.git
git push -u origin main
```
Add screenshots of the home/dashboard, slot listing, booking history, and admin dashboard to a `screenshots/` folder before final submission.
