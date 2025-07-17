'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Web3Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  // Client-side animation data to prevent hydration mismatch
  const [animationData, setAnimationData] = useState({
    connections: [] as Array<{
      left: number;
      top: number;
      width: number;
      rotation: number;
      delay: number;
    }>,
    dataElements: [] as Array<{
      left: number;
      top: number;
      delay: number;
      duration: number;
      token: string;
    }>
  });

  useEffect(() => {
    setIsClient(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Generate stable random data for client-side animations
    const tokens = ['WEFT', 'XRD', 'LSULP', 'xUSDC', 'CDP', 'YIELD', 'STAKE', 'BORROW', 'LEND'];
    
    setAnimationData({
      connections: Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: Math.random() * 300 + 100,
        rotation: Math.random() * 360,
        delay: Math.random() * 5
      })),
      dataElements: Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 8,
        token: tokens[Math.floor(Math.random() * tokens.length)]
      }))
    });
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Weft Finance specific elements
    const weftNodes: Array<{
      x: number;
      y: number;
      size: number;
      type: 'wefty' | 'cdp' | 'radix' | 'lending' | 'borrowing' | 'staking';
      color: string;
      pulsePhase: number;
      connectionDistance: number;
    }> = [];

    const weftColors = {
      wefty: '#00ff88',     // Weft green for NFT CDPs
      cdp: '#00ff88',     // Weft green for NFT CDPs
      radix: '#0066FF',      // Radix blue 
      lending: '#9945FF',    // Purple for lending
      borrowing: '#ff6b35',  // Orange for borrowing
      staking: '#40E0D0'     // Cyan for staking
    };

    // Create Weft Finance nodes
    const nodeTypes = ['wefty', 'cdp', 'radix', 'lending', 'borrowing', 'staking'] as const;
    for (let i = 0; i < 40; i++) {
      const type = nodeTypes[Math.floor(Math.random() * nodeTypes.length)];
      weftNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: type === 'cdp' || type === 'wefty' ? Math.random() * 8 + 6 : Math.random() * 5 + 3,
        type,
        color: weftColors[type],
        pulsePhase: Math.random() * Math.PI * 2,
        connectionDistance: type === 'radix' ? 150 : 100
      });
    }

    // DeFi flow particles
    const flowParticles: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      speed: number;
      size: number;
      color: string;
      type: 'loan' | 'repay' | 'yield' | 'collateral';
    }> = [];

    // Create flow particles
    for (let i = 0; i < 25; i++) {
      const types = ['loan', 'repay', 'yield', 'collateral'] as const;
      const type = types[Math.floor(Math.random() * types.length)];
      flowParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 1.5,
        size: Math.random() * 3 + 1,
        color: type === 'loan' ? '#0066FF' : 
               type === 'repay' ? '#00ff88' : 
               type === 'yield' ? '#9945FF' : '#40E0D0',
        type
      });
    }

    let animationTime = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationTime += 0.02;

      // Update and draw Weft Finance nodes
      weftNodes.forEach((node, index) => {
        // Pulse animation
        node.pulsePhase += 0.05;
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const currentSize = node.size * pulse;

        // Draw node with glow effect
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, currentSize * 2
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, currentSize * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();

        // Draw node type indicator
        ctx.font = '8px monospace';
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 0.6;
        ctx.textAlign = 'center';
        let label = '';
        switch(node.type) {
          case 'wefty': label = 'WEFTY'; break;
          case 'cdp': label = 'CDP'; break;
          case 'radix': label = 'RDX'; break;
          case 'lending': label = 'LEND'; break;
          case 'borrowing': label = 'BORROW'; break;
          case 'staking': label = 'STAKE'; break;
        }
        ctx.fillText(label, node.x, node.y - currentSize - 5);

        // Draw connections between nodes
        weftNodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < node.connectionDistance) {
              // Different connection types based on node combinations
              const isWeftieConnection = node.type === 'cdp' || otherNode.type === 'cdp' || node.type === 'wefty' || otherNode.type === 'wefty';
              const isRadixConnection = node.type === 'radix' || otherNode.type === 'radix';
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              
              if (isWeftieConnection) {
                ctx.strokeStyle = '#00ff88';
                ctx.lineWidth = 2;
                ctx.globalAlpha = (node.connectionDistance - distance) / node.connectionDistance * 0.6;
              } else if (isRadixConnection) {
                ctx.strokeStyle = '#0066FF';
                ctx.lineWidth = 1.5;
                ctx.globalAlpha = (node.connectionDistance - distance) / node.connectionDistance * 0.4;
              } else {
                ctx.strokeStyle = node.color;
                ctx.lineWidth = 1;
                ctx.globalAlpha = (node.connectionDistance - distance) / node.connectionDistance * 0.3;
              }
              ctx.stroke();
            }
          }
        });
      });

      // Update and draw DeFi flow particles
      flowParticles.forEach((particle) => {
        // Move towards target
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 5) {
          particle.x += (dx / distance) * particle.speed;
          particle.y += (dy / distance) * particle.speed;
        } else {
          // Reached target, find new target
          particle.targetX = Math.random() * canvas.width;
          particle.targetY = Math.random() * canvas.height;
        }

        // Draw particle trail
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();

        // Draw particle type indicator
        ctx.font = '6px monospace';
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.5;
        ctx.textAlign = 'center';
        let symbol = '';
        switch(particle.type) {
          case 'loan': symbol = '₿'; break;
          case 'repay': symbol = '↩'; break;
          case 'yield': symbol = '↗'; break;
          case 'collateral': symbol = '🔒'; break;
        }
        ctx.fillText(symbol, particle.x, particle.y + 2);
      });

      // Draw Radix DLT network visualization
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = '#0066FF';
      ctx.lineWidth = 0.5;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;
      
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + animationTime;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Weft Finance Animated Background */}
      <div className="crypto-bg">
        <div className="crypto-grid"></div>
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Only render client-side animations when ready */}
      {isClient && (
        <>

          {/* Weft Finance Network Visualization */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-green-900/5"></div>
            
            {/* DeFi Protocol Connections */}
            {animationData.connections.map((connection, i) => (
              <div
                key={`connection-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                style={{
                  left: connection.left + '%',
                  top: connection.top + '%',
                  width: connection.width + 'px',
                  transform: `rotate(${connection.rotation}deg)`,
                  animationDelay: connection.delay + 's',
                }}
              />
            ))}

            {/* Pulse Ring Animation */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-96 h-96 border border-cyan-400/10 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 border border-blue-400/10 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute inset-16 border border-green-400/10 rounded-full animate-pulse animation-delay-2000"></div>
            </div>
          </div>

          {/* Weft Finance Data Flow */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
            {animationData.dataElements.map((element, i) => (
              <div
                key={`data-${i}`}
                className="absolute text-green-400 text-xs font-mono animate-float"
                style={{
                  left: element.left + '%',
                  top: element.top + '%',
                  animationDelay: element.delay + 's',
                  animationDuration: element.duration + 's',
                }}
              >
                {element.token}
              </div>
            ))}
          </div>

          {/* Radix DLT Cerberus Consensus Visualization */}
          <div className="fixed bottom-0 right-0 w-64 h-64 pointer-events-none overflow-hidden opacity-10">
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-xl"></div>
            <div className="absolute inset-4 bg-gradient-to-tl from-blue-400/15 to-transparent rounded-full blur-lg"></div>
            <div className="absolute inset-8 bg-gradient-to-tl from-blue-300/10 to-transparent rounded-full blur-md"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400 text-xs font-mono">
              CERBERUS
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Web3Background;
