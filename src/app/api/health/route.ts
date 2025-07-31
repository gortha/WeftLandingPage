import { NextResponse } from 'next/server';

// Required for Cloudflare Pages deployment
export const runtime = 'edge';

export async function GET() {
  try {
    const now = new Date();
    const healthData = {
      status: 'healthy',
      timestamp: now.toISOString(),
      runtime: 'edge',
      platform: 'cloudflare-pages',
      version: '0.1.0',
      checks: {
        server: 'ok',
        edge_runtime: 'ok',
        api_endpoint: 'ok',
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
