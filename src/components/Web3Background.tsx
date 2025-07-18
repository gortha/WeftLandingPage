'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// Chrome-safe Web3Background component
const Web3Background = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
  }>>([]);

  // Stable initialization without Math.random in render
  const initializeParticles = useCallback((canvas: HTMLCanvasElement) => {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: (i * 47) % canvas.width,
        y: (i * 73) % canvas.height,
        vx: ((i % 3) - 1) * 0.3,
        vy: ((i % 5) - 2) * 0.2,
        alpha: 0.3 + (i % 7) * 0.1
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    setMounted(true);
    
    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isAnimating = true;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particlesRef.current = initializeParticles(canvas);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!isAnimating || !ctx || !canvas) return;

      try {
        ctx.fillStyle = 'rgba(39, 51, 73, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particlesRef.current.forEach(p => {
          if (!p) return;
          
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.fillStyle = `rgba(90, 251, 196, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });

        if (isAnimating) {
          animationRef.current = requestAnimationFrame(animate);
        }
      } catch (error) {
        console.warn('Animation error:', error);
        isAnimating = false;
      }
    };

    animate();

    return () => {
      isAnimating = false;
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [mounted, initializeParticles]);

  // Static fallback for SSR
  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 -z-10" />
    );
  }

  // Static elements to avoid hydration issues
  const staticElements = [
    { left: '10%', top: '20%', delay: 0, duration: 8 },
    { left: '80%', top: '10%', delay: 2, duration: 10 },
    { left: '60%', top: '70%', delay: 4, duration: 12 },
    { left: '20%', top: '80%', delay: 6, duration: 14 },
    { left: '90%', top: '60%', delay: 8, duration: 16 },
    { left: '30%', top: '40%', delay: 10, duration: 18 }
  ];

  return (
    <div className="fixed inset-0 -z-10">
      {/* Static background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `
                linear-gradient(rgba(90,251,196,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(90,251,196,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {staticElements.map((element, i) => (
            <div
              key={`float-${i}`}
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-green-400/10 to-blue-500/10 blur-xl"
              style={{
                left: element.left,
                top: element.top,
                animation: `float ${element.duration}s ease-in-out infinite`,
                animationDelay: `${element.delay}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ 
          mixBlendMode: 'screen',
          opacity: 0.8
        }}
      />
    </div>
  );
};

// Export with displayName for better debugging
Web3Background.displayName = 'Web3Background';

export default Web3Background;
