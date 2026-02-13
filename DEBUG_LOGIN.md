# LOGIN DEBUGGING GUIDE - STEP BY STEP

## 🔍 QUICK DIAGNOSIS STEPS

### STEP 1: Check if Environment Variables are Actually Set on Vercel

1. Go to: https://vercel.com/dashboard
2. Click your "Valentine" project
3. Go to **Settings → Environment Variables**
4. **Screenshot and verify:**
   - Variable name: `ADMIN_USERNAME` with value `Velkani`
   - Variable name: `ADMIN_PASSWORD` with value `ILoveRaajiS`
   
⚠️ **CRITICAL:** Look for ANY extra spaces, quotes, or hidden characters!

---

### STEP 2: Use Debug Endpoint to See What Environment Variables Vercel Has

After redeplying:

```bash
# Open your browser and visit:
https://valentine-69oxnc8pq-velkanis-projects.vercel.app/api/debug
```

This will show you:
- Is `NODE_ENV` set to `production`?
- Are `ADMIN_USERNAME` and `ADMIN_PASSWORD` showing as "exists"?
- What are their exact values and lengths?

**Example Response:**
```json
{
  "nodeEnv": "production",
  "adminUsernameExists": true,
  "adminPasswordExists": true,
  "adminUsernameLength": 7,
  "adminPasswordLength": 11,
  "adminUsernameValue": "Velkani",
  "adminPasswordValue": "ILoveRaajiS",
  "timestamp": "2026-02-13T..."
}
```

If `false` for exists, env vars aren't being injected!

---

### STEP 3: Check Browser Console While Logging In

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Go to **Network** tab
4. Try to login with `Velkani` / `ILoveRaajiS`
5. Look for POST request to `/api/login`
6. **Take a screenshot** and look for:
   - Response status: `200` (success) or `401` (unauthorized)?
   - Request body shows correct username/password?

---

### STEP 4: Redeploy from Scratch

```bash
# From your local machine in the Valentine directory:
git add .
git commit -m "Debug login with new API endpoint"
git push origin main

# Wait for Vercel to auto-deploy (check deployments page)
# OR manually:
vercel --prod
```

Then immediately test:
- Go to `/api/debug` endpoint first
- Then try login

---

## 📋 WHAT I FIXED

| Issue | Old Code | New Code |
|-------|----------|----------|
| **Logging** | No debug info | Added console.log for all steps |
| **vercel.json** | Too complex routes | Simplified to generic /api/(.*) |
| **Debug endpoint** | None | New /api/debug endpoint |

---

## 🆘 POSSIBLE CAUSES & SOLUTIONS

### **Cause 1: Environment Variables Not Set on Vercel**

**Check:** Go to Vercel Settings → Environment Variables
- Do you see `ADMIN_USERNAME` and `ADMIN_PASSWORD`?
- Are the values exactly `Velkani` and `ILoveRaajiS`?

**Fix:**
1. Delete both variables
2. Re-enter them CAREFULLY:
   - `ADMIN_USERNAME` = `Velkani` (7 characters exactly)
   - `ADMIN_PASSWORD` = `ILoveRaajiS` (11 characters exactly)
3. Click Save
4. Redeploy: `vercel --prod`

---

### **Cause 2: Environment Variables Not Injected During Build**

**Check:** Visit `/api/debug` endpoint
- Does it show `"adminUsernameExists": true`?

**Fix:**
1. Go to Vercel Project Settings
2. Near Environment Variables, look for a "Rebuild" or "Redeploy" button
3. Click to redeploy
4. Wait for build to complete (check Deployments page)

---

### **Cause 3: Wrong Credentials**

**Check:** Look at `/api/debug` output
- What exact values does it show for `adminUsernameValue` and `adminPasswordValue`?
- Compare byte-by-byte with what you entered

**Fix:** If they don't match `Velkani` and `ILoveRaajiS` exactly:
1. Update Vercel environment variables
2. Redeploy

---

### **Cause 4: Browser Not Sending Credentials in Fetch**

**Check:** In Network tab (DevTools) → POST /api/login
- Click on the request
- Go to "Request" tab
- Look at the JSON body - are username/password there?

**Fix:** Usually this works correctly, but if not:
- Try incognito mode
- Clear all cookies
- Hard refresh (Ctrl+Shift+R)

---

### **Cause 5: Cookies Not Being Set**

**Check:** After login attempt
- Open DevTools → Application → Cookies
- Do you see a cookie named `auth`?

**Fix:** If no cookie:
1. Check if `/api/login` returns 200 or 401
2. If 200 but no cookie, issue is in cookie setting
3. If 401, credentials are wrong

---

## 🧪 STEP-BY-STEP TEST PROCEDURE

### **Test Locally First (npm run dev):**

```bash
# Make sure .env.local exists with:
ADMIN_USERNAME=Velkani
ADMIN_PASSWORD=ILoveRaajiS

# Start dev server
npm run dev

# Visit http://localhost:5173/api/debug
# Should show all env vars

# Try login at http://localhost:5173/login
# If it works locally, the issue is Vercel deployment
```

### **If Works Locally but Not on Vercel:**

Then it's definitely an environment variable issue on Vercel.

---

## 📝 WHAT TO REPORT IF STILL FAILING

If login still doesn't work after these steps, please provide:

1. **Screenshot of Vercel Environment Variables page** (showing ADMIN_USERNAME and ADMIN_PASSWORD)
2. **Output of `/api/debug` endpoint** (what does it show?)
3. **Browser DevTools Console output** (any errors?)
4. **Browser DevTools Network tab** (what's the 401 response body?)
5. **Exact username and password you're testing with**

---

## 🔧 COMPLETE FRESH START (NUCLEAR OPTION)

If all else fails:

```bash
# 1. Delete old variables on Vercel
# 2. Clear all cookies in browser
# 3. Hard refresh
# 4. Run locally first to verify
npm run dev
# Test at http://localhost:5173/api/debug
# Test login flow

# 5. If works locally, deploy
git add .
git commit -m "Fresh start with debug endpoint"
git push
vercel --prod

# 6. Wait for deployment
# 7. Go to /api/debug
# 8. Check env vars
# 9. Try login
```

---

## 💡 NEXT STEPS

1. **Run `/api/debug` endpoint** - tell me what you see
2. **Check Vercel env vars** - screenshot if possible
3. **Try local test** - `npm run dev`
4. **Redeploy** - `vercel --prod`
5. **Report findings** - with specifics

Once I see the `/api/debug` output and Vercel settings, I can pinpoint the exact issue!
