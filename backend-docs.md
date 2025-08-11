# iQueTechnology Backend Documentation

This document outlines the architecture, setup, and endpoints for the iQueTechnology client application's backend services.

## Overview

The backend is built directly into the Next.js frontend application using **Next.js API Routes**. This provides a unified codebase, seamless deployment, and excellent performance.

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Database:** PlanetScale (Serverless MySQL)
- **ORM:** Prisma
- **Email:** Resend
- **Validation:** Zod
- **Rate Limiting:** Upstash

---

## **Action Required:** Initial Setup

Before the backend can run, you must sign up for the following free services and add your secret keys to the `.env` file.

1.  **Create `.env` file:** Copy the `.env.example` file to a new file named `.env`.
2.  **PlanetScale (Database):**
    *   Sign up at [PlanetScale](https://planetscale.com/).
    *   Create a new database.
    *   Go to the database's "Connect" modal and get the full connection string for Prisma.
    *   Paste this URL into the `DATABASE_URL` variable in your `.env` file.
3.  **Resend (Email):**
    *   Sign up at [Resend](https://resend.com/).
    *   Verify your domain (e.g., `iquetechnology.com`). This is required to send emails.
    *   Create an API Key.
    *   Paste the key into the `RESEND_API_KEY` variable in your `.env` file.
4.  **Upstash (Rate Limiting):**
    *   Sign up at [Upstash](https://upstash.com/).
    *   Create a new "Global" Redis database.
    *   Copy the `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.
    *   Paste these into the corresponding variables in your `.env` file.

---

## Running the Backend

After populating the `.env` file, you need to sync your database schema with PlanetScale. Run this command **once**:

```bash
npx prisma db push
```

This command reads your `schema.prisma` file and configures your PlanetScale database to match. The backend is now live and will run whenever you run `npm run dev`.

---

## Current API Endpoints

### 1. Quote Request

-   **Endpoint:** `POST /api/quote`
-   **Description:** Submits a new quote request from the contact form. It saves the request to the database and sends email notifications.
-   **Rate Limit:** 5 requests per minute per IP.
-   **Request Body:**
    ```json
    {
      "name": "string",
      "email": "string (valid email format)",
      "company": "string (optional)",
      "phone": "string (optional)",
      "message": "string (min 10 characters)"
    }
    ```

---

## Future Features We Could Add

-   **User Authentication System:** Login/signup functionality with secure password handling and social logins.
-   **Blog/CMS:** API for creating and managing blog posts or case studies.
-   **Customer Dashboard:** Protected API routes that provide data for logged-in customers.
-   **Stripe Integration:** For handling payments and subscriptions.
-   **File Uploads:** Allow users to upload documents via an API connected to a cloud storage service like AWS S3.