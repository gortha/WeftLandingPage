import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Use a more stable timestamp approach
    const now = new Date();
    const healthData = {
      status: 'healthy',
      timestamp: now.toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
      },
      checks: {
        server: 'ok',
        database: 'ok', // Add actual database check if needed
        external_apis: 'ok', // Add actual external API checks if needed
      }
    };

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    const now = new Date();
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: now.toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    );
  }
}
