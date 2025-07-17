#!/bin/bash

# GitHub Secrets Setup Script for Vercel Deployment
# This script helps you set up the required GitHub secrets for Vercel deployment

echo "🔧 Setting up GitHub Secrets for Vercel Deployment"
echo "=================================================="

# Get current directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_FILE="$SCRIPT_DIR/.vercel/project.json"

# Check if project.json exists
if [ ! -f "$PROJECT_FILE" ]; then
    echo "❌ Error: .vercel/project.json not found!"
    echo "Please run 'vercel' first to initialize the project"
    exit 1
fi

# Extract project details
VERCEL_PROJECT_ID=$(jq -r '.projectId' "$PROJECT_FILE")
VERCEL_ORG_ID=$(jq -r '.orgId' "$PROJECT_FILE")

echo "📋 Project Details:"
echo "-------------------"
echo "Project ID: $VERCEL_PROJECT_ID"
echo "Organization ID: $VERCEL_ORG_ID"
echo ""

echo "🎯 Required GitHub Secrets:"
echo "---------------------------"
echo "1. VERCEL_TOKEN - Your Vercel API token"
echo "2. VERCEL_PROJECT_ID - $VERCEL_PROJECT_ID"
echo "3. VERCEL_ORG_ID - $VERCEL_ORG_ID"
echo ""

echo "⚡ Quick Setup Commands:"
echo "------------------------"
echo "Run these commands to set up your GitHub secrets:"
echo ""

# GitHub CLI commands
echo "# Using GitHub CLI (gh):"
echo "gh secret set VERCEL_TOKEN"
echo "gh secret set VERCEL_PROJECT_ID --body \"$VERCEL_PROJECT_ID\""
echo "gh secret set VERCEL_ORG_ID --body \"$VERCEL_ORG_ID\""
echo ""

# Manual setup instructions
echo "# Manual setup via GitHub UI:"
echo "1. Go to: https://github.com/gortha/WeftLendingPage/settings/secrets/actions"
echo "2. Click 'New repository secret'"
echo "3. Add the following secrets:"
echo ""
echo "   Name: VERCEL_TOKEN"
echo "   Value: [Get from 'vercel token create']"
echo ""
echo "   Name: VERCEL_PROJECT_ID"
echo "   Value: $VERCEL_PROJECT_ID"
echo ""
echo "   Name: VERCEL_ORG_ID"
echo "   Value: $VERCEL_ORG_ID"
echo ""

echo "🔑 To create a Vercel token:"
echo "----------------------------"
echo "1. Run: vercel token create"
echo "2. Copy the generated token"
echo "3. Use it as the VERCEL_TOKEN secret value"
echo ""

echo "🚀 After setting up secrets:"
echo "----------------------------"
echo "1. Push your code to GitHub"
echo "2. Check the Actions tab for deployment status"
echo "3. Your app will be deployed to: https://weft-finance-v2.vercel.app"
echo ""

echo "✅ Setup complete! Your GitHub Actions are ready for Vercel deployment."
