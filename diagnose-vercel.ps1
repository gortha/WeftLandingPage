# GitHub Actions Vercel Deployment Diagnostic Script (PowerShell)

Write-Host "[DIAGNOSTIC] Vercel Deployment Diagnostic" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "[ERROR] Not in a Node.js project directory" -ForegroundColor Red
    exit 1
}

# Check if Vercel CLI is installed
Write-Host "[CHECK] Checking Vercel CLI installation..." -ForegroundColor Yellow
try {
    $null = vercel --version
    Write-Host "[OK] Vercel CLI: OK" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Vercel CLI not found. Installing..." -ForegroundColor Red
    npm install -g vercel
}

# Check Vercel authentication
Write-Host "[AUTH] Checking Vercel authentication..." -ForegroundColor Yellow
try {
    $VercelUser = vercel whoami 2>$null
    if ($VercelUser) {
        Write-Host "[OK] Vercel authentication: OK" -ForegroundColor Green
        Write-Host "   Logged in as: $VercelUser" -ForegroundColor White
    } else {
        throw "Not authenticated"
    }
} catch {
    Write-Host "[ERROR] Vercel authentication: FAILED" -ForegroundColor Red
    Write-Host "   Please run: vercel login" -ForegroundColor Yellow
    exit 1
}

# Check if project is linked
Write-Host "[PROJECT] Checking project linking..." -ForegroundColor Yellow
$ProjectFile = ".vercel\project.json"
if (Test-Path $ProjectFile) {
    Write-Host "[OK] Project linking: OK" -ForegroundColor Green
    $ProjectData = Get-Content $ProjectFile | ConvertFrom-Json
    $ProjectId = $ProjectData.projectId
    $OrgId = $ProjectData.orgId
    Write-Host "   Project ID: $ProjectId" -ForegroundColor White
    Write-Host "   Org ID: $OrgId" -ForegroundColor White
} else {
    Write-Host "[ERROR] Project linking: FAILED" -ForegroundColor Red
    Write-Host "   Please run: vercel link" -ForegroundColor Yellow
    exit 1
}

# Test deployment commands
Write-Host "[DEPLOY] Testing deployment commands..." -ForegroundColor Yellow

# Test pull command
Write-Host "   Testing vercel pull..." -ForegroundColor White
try {
    $null = vercel pull --yes --environment=production --token=$env:VERCEL_TOKEN 2>$null
    Write-Host "[OK] vercel pull: OK" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] vercel pull: FAILED" -ForegroundColor Red
    Write-Host "   This usually indicates VERCEL_TOKEN is not set or invalid" -ForegroundColor Yellow
    Write-Host "   Please check your GitHub secrets configuration" -ForegroundColor Yellow
}

# Test build command
Write-Host "   Testing vercel build..." -ForegroundColor White
try {
    $null = vercel build --prod --token=$env:VERCEL_TOKEN 2>$null
    Write-Host "[OK] vercel build: OK" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] vercel build: FAILED" -ForegroundColor Red
    Write-Host "   Check your project configuration and dependencies" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "[SUMMARY] Summary:" -ForegroundColor Cyan
Write-Host "----------" -ForegroundColor Cyan
Write-Host "Required GitHub Secrets:" -ForegroundColor Yellow
$tokenStatus = if ($env:VERCEL_TOKEN) { "[SET] Set" } else { "[NOT SET] Not set" }
Write-Host "  VERCEL_TOKEN: $tokenStatus" -ForegroundColor White
Write-Host "  VERCEL_PROJECT_ID: $ProjectId" -ForegroundColor White
Write-Host "  VERCEL_ORG_ID: $OrgId" -ForegroundColor White
Write-Host ""
Write-Host "Setup commands:" -ForegroundColor Yellow
Write-Host "  gh secret set VERCEL_TOKEN" -ForegroundColor Cyan
Write-Host "  gh secret set VERCEL_PROJECT_ID --body `"$ProjectId`"" -ForegroundColor Cyan
Write-Host "  gh secret set VERCEL_ORG_ID --body `"$OrgId`"" -ForegroundColor Cyan
Write-Host ""
Write-Host "For more help, see: VERCEL_SETUP.md" -ForegroundColor Green
