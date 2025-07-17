#!/bin/bash

# GitHub Actions Vercel Deployment Diagnostic Script

echo "🔍 Vercel Deployment Diagnostic"
echo "================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in a Node.js project directory"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check Vercel authentication
echo "🔐 Checking Vercel authentication..."
if vercel whoami &> /dev/null; then
    echo "✅ Vercel authentication: OK"
    VERCEL_USER=$(vercel whoami)
    echo "   Logged in as: $VERCEL_USER"
else
    echo "❌ Vercel authentication: FAILED"
    echo "   Please run: vercel login"
    exit 1
fi

# Check if project is linked
echo "📁 Checking project linking..."
if [ -f ".vercel/project.json" ]; then
    echo "✅ Project linking: OK"
    PROJECT_ID=$(cat .vercel/project.json | grep '"projectId"' | cut -d'"' -f4)
    ORG_ID=$(cat .vercel/project.json | grep '"orgId"' | cut -d'"' -f4)
    echo "   Project ID: $PROJECT_ID"
    echo "   Org ID: $ORG_ID"
else
    echo "❌ Project linking: FAILED"
    echo "   Please run: vercel link"
    exit 1
fi

# Test deployment commands
echo "🚀 Testing deployment commands..."

# Test pull command
echo "   Testing vercel pull..."
if vercel pull --yes --environment=production --token=$VERCEL_TOKEN 2>/dev/null; then
    echo "✅ vercel pull: OK"
else
    echo "❌ vercel pull: FAILED"
    echo "   This usually indicates VERCEL_TOKEN is not set or invalid"
    echo "   Please check your GitHub secrets configuration"
fi

# Test build command
echo "   Testing vercel build..."
if vercel build --prod --token=$VERCEL_TOKEN 2>/dev/null; then
    echo "✅ vercel build: OK"
else
    echo "❌ vercel build: FAILED"
    echo "   Check your project configuration and dependencies"
fi

echo ""
echo "📋 Summary:"
echo "----------"
echo "Required GitHub Secrets:"
echo "  VERCEL_TOKEN: $([[ -n "$VERCEL_TOKEN" ]] && echo "✅ Set" || echo "❌ Not set")"
echo "  VERCEL_PROJECT_ID: $PROJECT_ID"
echo "  VERCEL_ORG_ID: $ORG_ID"
echo ""
echo "Setup commands:"
echo "  gh secret set VERCEL_TOKEN"
echo "  gh secret set VERCEL_PROJECT_ID --body \"$PROJECT_ID\""
echo "  gh secret set VERCEL_ORG_ID --body \"$ORG_ID\""
echo ""
echo "For more help, see: VERCEL_SETUP.md"
