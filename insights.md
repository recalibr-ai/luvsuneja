# Blog Debugging Journey - Technical Insights

## The Problem We Solved
**Issue**: Blog post showed "Failed to load post content" despite the blog preview working fine.

**Root Cause**: A complex interaction between GitHub Pages, Jekyll, SPA routing, and base paths that required multiple fixes.

---

## Key Technical Insights

### 1. Jekyll + GitHub Pages Markdown Handling
**Discovery**: Even with `.nojekyll` file, GitHub Pages still has special handling for `.md` files that prevents them from being served as raw static content.

**Evidence**: 
- `.md` files returned 404 even when they existed in the gh-pages branch
- `.mdown` files worked perfectly with identical content
- `.txt` files also worked, confirming it was extension-specific

**Solution**: Changed from `ai-is-now.md` to `ai-is-now.mdown`

### 2. GitHub Pages Base Path Issues
**Discovery**: Fetch URLs must account for the homepage base path in production.

**Problem**: 
- Dev: `http://localhost:3000/content/file.mdown` ✅
- Prod: `https://recalibr-ai.github.io/content/file.mdown` ❌ (missing `/luvsuneja/`)
- Fixed: `https://recalibr-ai.github.io/luvsuneja/content/file.mdown` ✅

**Solution**: Use `${process.env.PUBLIC_URL || ''}/content/${post.slug}.mdown`

### 3. SPA Routing with GitHub Pages
**Discovery**: The 404.html redirect script needs to account for base paths when redirecting.

**Problem**: 
- Wrong: `/?/luvsuneja/blog/ai-is-now` (React Router confused)
- Right: `/luvsuneja/?/blog/ai-is-now` (React Router works)

**Solution**: Set `segmentCount = 1` to preserve `/luvsuneja/` base path

---

## The Solution Chain

### Fix 1: File Extension (.md → .mdown)
**Why Needed**: Jekyll refuses to serve `.md` files as static content
**What It Fixed**: Allowed GitHub Pages to serve the file as raw text
**Code Change**: 
```javascript
// Before
fetch(`/content/${post.slug}.md`)

// After  
fetch(`/content/${post.slug}.mdown`)
```

### Fix 2: Base Path (PUBLIC_URL)
**Why Needed**: Production URLs need the `/luvsuneja/` prefix
**What It Fixed**: Correct file path for production deployment
**Code Change**:
```javascript
// Before
fetch(`/content/${post.slug}.mdown`)

// After
fetch(`${process.env.PUBLIC_URL || ''}/content/${post.slug}.mdown`)
```

### Fix 3: SPA Redirect Script (segmentCount)
**Why Needed**: 404 redirects were creating wrong URLs for React Router
**What It Fixed**: Proper URL format for client-side routing
**Code Change**:
```javascript
// Before
var segmentCount = 0; // Result: /?/luvsuneja/blog/ai-is-now

// After
var segmentCount = 1; // Result: /luvsuneja/?/blog/ai-is-now
```

---

## How The SPA Routing Magic Works

### The Three-Step Dance

#### Step 1: 404.html (The Redirector)
```javascript
// When user refreshes /luvsuneja/blog/ai-is-now
// GitHub Pages: "File not found!" → serves 404.html
var segmentCount = 1; // Keep /luvsuneja/ as base
// Creates: /luvsuneja/?/blog/ai-is-now
l.replace(/* redirect to special URL */);
```

#### Step 2: index.html (The URL Cleaner)  
```javascript
// When React app loads with /luvsuneja/?/blog/ai-is-now
if (l.search[1] === '/' ) {
  // Clean URL: /luvsuneja/?/blog/ai-is-now → /luvsuneja/blog/ai-is-now
  window.history.replaceState(/* clean URL */);
}
```

#### Step 3: App.tsx (React Router)
```javascript
// React Router sees clean URL: /luvsuneja/blog/ai-is-now
// With basename="/luvsuneja", routes match /blog/ai-is-now
<Route path="/blog/:id" element={<BlogPost />} />
// Renders BlogPost with id="ai-is-now"
```

### The Flow Diagram
```
User refreshes: /luvsuneja/blog/ai-is-now
         ↓
GitHub Pages: "404 - File not found"
         ↓  
404.html: Redirect to /luvsuneja/?/blog/ai-is-now
         ↓
index.html: Clean to /luvsuneja/blog/ai-is-now  
         ↓
React Router: Match /blog/:id route
         ↓
BlogPost component renders ✅
```

---

## ReactMarkdown Component Mapping

### The Transformation Magic
**How `# Heading` becomes styled `<h1>`**:

1. **Parser**: ReactMarkdown reads `# AI Isn't the Future` and identifies it as an h1
2. **Mapping**: Looks up the custom h1 component in `markdownComponents`
3. **Rendering**: Uses your styled component instead of default HTML

```javascript
const markdownComponents = {
  h1: (props) => <h1 className="text-3xl lg:text-4xl font-light..." {...props} />,
  h2: (props) => <h2 className="text-2xl lg:text-3xl font-light..." {...props} />,
  p: (props) => <p className="mb-6 text-gray-700 leading-relaxed" {...props} />,
};

// Markdown: # AI Isn't the Future
// Becomes: <h1 className="text-3xl...">AI Isn't the Future</h1>
```

---

## Debugging Methodology Lessons

### 1. Layer by Layer Investigation
- **Don't assume the first theory is correct**
- **Verify each layer independently**: GitHub Pages serving, Jekyll processing, React routing, fetch URLs
- **Use direct testing**: `curl` commands to test file accessibility

### 2. Follow the Data Flow
- **Trace the complete request path**: Browser → GitHub Pages → Jekyll → SPA redirect → React Router
- **Test at each step**: What URL is being requested? What response is returned?

### 3. Question Everything
- **"It should work" isn't enough** - verify assumptions with evidence
- **Compare working vs non-working**: Why does `.mdown` work but `.md` doesn't?
- **Read error messages carefully**: 404 vs blocked vs redirect responses

### 4. Use Multiple Tools
- **Browser Dev Tools**: Network tab, Console errors
- **Command line**: `curl`, `ls`, `git checkout` to verify file states  
- **Direct URL testing**: Bypass the app to test file serving

---

## Key Files Modified

### `public/404.html`
```javascript
var segmentCount = 1; // Account for /luvsuneja/ base path
```

### `src/pages/BlogPost.tsx`  
```javascript
fetch(`${process.env.PUBLIC_URL || ''}/content/${post.slug}.mdown`)
```

### `public/content/`
```
ai-is-now.md → ai-is-now.mdown  // File extension change
```

---

## Final Architecture

### File Structure
```
public/
├── 404.html          # SPA redirect handler
├── index.html         # URL cleaner + React app
├── content/
│   └── ai-is-now.mdown # Blog content (note: .mdown not .md)
└── .nojekyll          # Disable Jekyll processing

src/
├── App.tsx            # React Router with basename
└── pages/
    └── BlogPost.tsx   # Fetches .mdown files with PUBLIC_URL
```

### URL Flow
```
Refresh: /luvsuneja/blog/ai-is-now
      ↓ (404 - GitHub Pages)
404.html: /luvsuneja/?/blog/ai-is-now
      ↓ (SPA redirect)
index.html: /luvsuneja/blog/ai-is-now
      ↓ (URL cleaning)
React Router: Renders BlogPost component
      ↓ (useParams hook)
BlogPost: Fetches /luvsuneja/content/ai-is-now.mdown
      ↓ (ReactMarkdown)
Styled blog post ✅
```

---

## Why This Was Complex

This wasn't a single bug but a **chain of interacting systems**:
1. **GitHub Pages** (static file server)
2. **Jekyll** (markdown processor)  
3. **SPA routing** (client-side navigation)
4. **React Router** (URL matching)
5. **Build tools** (gh-pages npm package)

Each fix revealed the next issue, requiring deep understanding of how these systems interact. The lesson: complex deployments require systematic investigation of each layer.

---

*"The best debugging sessions teach you not just how to fix the problem, but how the entire system works."*