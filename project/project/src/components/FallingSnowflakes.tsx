import React, { useEffect, useState } from 'react';
import { Snowflake } from 'lucide-react';

interface SnowflakeData {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  fadeOut: boolean;
}

const FallingSnowflakes: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<SnowflakeData[]>([]);

  useEffect(() => {
    // Initialize snowflakes
    const initialSnowflakes: SnowflakeData[] = [];
    for (let i = 0; i < 15; i++) {
      initialSnowflakes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * -50 - 10, // Start above the screen (-60 to -10)
        size: Math.random() * 12 + 8, // 8-20px
        speed: Math.random() * 2 + 1, // 1-3 speed
        opacity: Math.random() * 0.4 + 0.2, // 0.2-0.6 opacity
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2, // -1 to 1
        fadeOut: false
      });
    }
    setSnowflakes(initialSnowflakes);

    // Animation loop
    const animateSnowflakes = () => {
      setSnowflakes(prev => 
        prev.map(snowflake => {
          let newY = snowflake.y + snowflake.speed;
          let newX = snowflake.x + Math.sin(newY * 0.01) * 0.5; // Gentle side-to-side drift
          let newRotation = snowflake.rotation + snowflake.rotationSpeed;
          let newOpacity = snowflake.opacity;
          let newFadeOut = snowflake.fadeOut;

          // Start fading out when approaching bottom
          if (newY > 85 && !newFadeOut) {
            newFadeOut = true;
          }

          // Fade out effect
          if (newFadeOut) {
            newOpacity = Math.max(0, newOpacity - 0.05);
          }

          // Reset snowflake when it disappears or goes off screen
          if (newY > 100 || newOpacity <= 0) {
            newY = Math.random() * -30 - 20; // Start well above screen (-50 to -20)
            newX = Math.random() * 100;
            newOpacity = Math.random() * 0.4 + 0.2;
            newFadeOut = false;
          }

          // Keep snowflakes within horizontal bounds
          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;

          return {
            ...snowflake,
            x: newX,
            y: newY,
            rotation: newRotation,
            opacity: newOpacity,
            fadeOut: newFadeOut
          };
        })
      );
    };

    const interval = setInterval(animateSnowflakes, 50); // 20 FPS
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {snowflakes.map(snowflake => (
        <Snowflake
          key={snowflake.id}
          className="absolute text-sky-300 transition-all duration-75 ease-linear"
          style={{
            left: `${snowflake.x}%`,
            top: `${snowflake.y}%`,
            fontSize: `${snowflake.size}px`,
            opacity: snowflake.opacity,
            transform: `rotate(${snowflake.rotation}deg)`,
            filter: 'drop-shadow(0 0 2px rgba(135, 206, 235, 0.3))'
          }}
        />
      ))}
    </div>
  );
};

export default FallingSnowflakes;