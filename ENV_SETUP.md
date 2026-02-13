# Environment Variables Setup

## Local Development (.env.local)

1. Create a `.env.local` file in the root directory (already created)
2. Add your authentication credentials:

```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_password
```

3. Start the dev server:

```bash
npm run dev
```

The API routes will automatically use these environment variables from `.env.local`.

---

## Vercel Production Deployment

Environment variables on Vercel are set in the **Project Settings**, NOT in a `.env` file.

### Steps to Set Environment Variables on Vercel:

1. **Go to your Vercel Project Dashboard**
   - Visit: https://vercel.com/dashboard

2. **Select your "Valentine" project**

3. **Click "Settings" → "Environment Variables"**

4. **Add these variables:**
   - **Name:** `ADMIN_USERNAME`
     **Value:** `your_username`
     **Environments:** Production, Preview, Development
   - **Name:** `ADMIN_PASSWORD`
     **Value:** `your_password`
     **Environments:** Production, Preview, Development

5. **Click "Save"**

6. **Redeploy your project:**
   ```bash
   git push origin main
   # or
   vercel --prod
   ```

---

## Security Best Practices

### ❌ DO NOT:

- Commit `.env.local` to git (use `.gitignore`)
- Share your `.env.local` file
- Put real passwords in comments or documentation
- Use weak credentials
- Store secrets in code

### ✅ DO:

- Use strong, unique credentials (16+ characters)
- Store `.env.local` only on your local machine
- Use Vercel's secure environment variable management
- Rotate credentials regularly
- Keep `.env.example` as a template (NO real values)

---

## File Structure

```
Valentine/
├── .env.example          ← Template (safe to commit)
├── .env.local            ← Local secrets (DO NOT commit)
├── .gitignore            ← Excludes .env files
└── api/
    ├── login.js          ← Uses process.env.ADMIN_USERNAME/PASSWORD
    ├── logout.js
    └── check-auth.js
```

---

## How Authentication Works

### Local (npm run dev):

1. Node.js reads `.env.local`
2. Sets `process.env.ADMIN_USERNAME` and `process.env.ADMIN_PASSWORD`
3. API routes use these values to authenticate logins

### Production (Vercel):

1. Vercel reads environment variables from Project Settings
2. Sets `process.env.ADMIN_USERNAME` and `process.env.ADMIN_PASSWORD`
3. API routes use these values to authenticate logins

---

## Example Credentials (Change These!)

For development/testing:

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password123
```

For production (create strong credentials):

```env
ADMIN_USERNAME=your_secure_username
ADMIN_PASSWORD=your_secure_random_password_here
```

You can use a password generator like:

- https://www.random.org/strings/ (numbers + letters + symbols)
- https://passwordsgenerator.net/
- Or generate one yourself: `Abc!Xyz@2024$Secure`

---

## Troubleshooting

### "Invalid credentials" on localhost

- ✅ Check `.env.local` exists and has correct values
- ✅ Restart `npm run dev` after creating/editing `.env.local`
- ✅ Make sure Node.js can read the file (check permissions)

### "Invalid credentials" on Vercel

- ✅ Go to Project Settings → Environment Variables
- ✅ Verify `ADMIN_USERNAME` and `ADMIN_PASSWORD` are set
- ✅ Redeploy after adding/changing env vars: `vercel --prod`
- ✅ Check build logs for errors

### Can't see environment variables in code

- ✅ Must use `process.env.VARIABLE_NAME` (NOT dotenv in Node.js on Vercel)
- ✅ Restart dev server after changing `.env.local`
- ✅ Vercel automatically injects env vars (no package needed)

---

## Reference

- [Vercel Environment Variables Docs](https://vercel.com/docs/concepts/projects/environment-variables)
- [Node.js Environment Variables](https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/)
