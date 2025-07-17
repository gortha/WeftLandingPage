# GitHub Secrets Setup Script for Vercel Deployment (PowerShell)
# This script helps you set up the required GitHub secrets for Vercel deployment

Write-Host "Setting up GitHub Secrets for Vercel Deployment" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan

# Get current directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$ProjectFile = Join-Path $ScriptDir ".vercel\project.json"

# Check if project.json exists
if (-not (Test-Path $ProjectFile)) {
    Write-Host "Error: .vercel/project.json not found!" -ForegroundColor Red
    Write-Host "Please run 'vercel' first to initialize the project" -ForegroundColor Red
    exit 1
}

# Extract project details
$ProjectData = Get-Content $ProjectFile | ConvertFrom-Json
$VercelProjectId = $ProjectData.projectId
$VercelOrgId = $ProjectData.orgId

Write-Host "Project Details:" -ForegroundColor Yellow
Write-Host "----------------" -ForegroundColor Yellow
Write-Host "Project ID: $VercelProjectId" -ForegroundColor White
Write-Host "Organization ID: $VercelOrgId" -ForegroundColor White
Write-Host ""

Write-Host "Required GitHub Secrets:" -ForegroundColor Yellow
Write-Host "-----------------------" -ForegroundColor Yellow
Write-Host "1. VERCEL_TOKEN - Your Vercel API token" -ForegroundColor White
Write-Host "2. VERCEL_PROJECT_ID - $VercelProjectId" -ForegroundColor White
Write-Host "3. VERCEL_ORG_ID - $VercelOrgId" -ForegroundColor White
Write-Host ""

Write-Host "GitHub CLI Commands:" -ForegroundColor Green
Write-Host "gh secret set VERCEL_TOKEN" -ForegroundColor Cyan
Write-Host "gh secret set VERCEL_PROJECT_ID --body `"$VercelProjectId`"" -ForegroundColor Cyan
Write-Host "gh secret set VERCEL_ORG_ID --body `"$VercelOrgId`"" -ForegroundColor Cyan
Write-Host ""

Write-Host "Manual Setup:" -ForegroundColor Green
Write-Host "1. Go to: https://github.com/gortha/WeftLendingPage/settings/secrets/actions" -ForegroundColor White
Write-Host "2. Click 'New repository secret'" -ForegroundColor White
Write-Host "3. Add the secrets with the values shown above" -ForegroundColor White
Write-Host ""

Write-Host "To create a Vercel token:" -ForegroundColor Yellow
Write-Host "1. Run: vercel token create" -ForegroundColor White
Write-Host "2. Copy the generated token" -ForegroundColor White
Write-Host "3. Use it as the VERCEL_TOKEN secret value" -ForegroundColor White
Write-Host ""

Write-Host "After setting up secrets:" -ForegroundColor Yellow
Write-Host "1. Push your code to GitHub" -ForegroundColor White
Write-Host "2. Check the Actions tab for deployment status" -ForegroundColor White
Write-Host "3. Your app will be deployed to: https://weft-finance-v2.vercel.app" -ForegroundColor White
Write-Host ""

Write-Host "Setup complete! Your GitHub Actions are ready for Vercel deployment." -ForegroundColor Green
