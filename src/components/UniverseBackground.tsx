import { useEffect, useRef } from "react";

const UniverseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let particles: Particle[] = [];

    const detectTheme = () => {
      return document.documentElement.classList.contains("dark");
    };

    let isDarkTheme = detectTheme();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.speed = Math.random() * 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinkleOffset = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        this.x -= this.speed;
        if (this.x < 0) {
          this.x = canvas.width;
          this.y = Math.random() * canvas.height;
        }
        this.opacity =
          0.3 + 0.2 * Math.sin(time * this.twinkleSpeed + this.twinkleOffset);
      }

      draw() {
        isDarkTheme = detectTheme();

        if (isDarkTheme) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 1.2})`;
          ctx.fill();

          const gradient = ctx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.size * 4,
          );
          gradient.addColorStop(
            0,
            `rgba(200, 160, 255, ${this.opacity * 0.4})`,
          );
          gradient.addColorStop(
            0.5,
            `rgba(139, 92, 246, ${this.opacity * 0.2})`,
          );
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity * 0.6})`;
          ctx.fill();

          const gradient = ctx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.size * 3,
          );
          gradient.addColorStop(0, `rgba(0, 0, 0, ${this.opacity * 0.2})`);
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
    }

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      decay: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
      }

      draw() {
        isDarkTheme = detectTheme();

        if (isDarkTheme) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 190, 255, ${this.life * 1.2})`;
          ctx.fill();

          const gradient = ctx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.size * 3,
          );
          gradient.addColorStop(0, `rgba(240, 220, 255, ${this.life * 0.8})`);
          gradient.addColorStop(0.7, `rgba(200, 160, 255, ${this.life * 0.4})`);
          gradient.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 0, 0, ${this.life * 0.8})`;
          ctx.fill();
        }
      }
    }

    const createNebula = (
      x: number,
      y: number,
      radius: number,
      color: string,
    ) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const init = () => {
      resizeCanvas();
      stars = Array.from({ length: 200 }, () => new Star());
      particles = [];
    };

    const animate = (time: number) => {
      isDarkTheme = detectTheme();

      if (isDarkTheme) {
        ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        createNebula(
          canvas.width * 0.7,
          canvas.height * 0.3,
          150,
          "rgba(139, 92, 246, 0.03)",
        );
        createNebula(
          canvas.width * 0.3,
          canvas.height * 0.7,
          100,
          "rgba(59, 130, 246, 0.03)",
        );
      } else {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        createNebula(
          canvas.width * 0.7,
          canvas.height * 0.3,
          150,
          "rgba(0, 0, 0, 0.015)",
        );
        createNebula(
          canvas.width * 0.3,
          canvas.height * 0.7,
          100,
          "rgba(0, 0, 0, 0.01)",
        );
      }

      stars.forEach((star) => {
        star.update(time * 0.001);
        star.draw();
      });

      particles = particles.filter((particle) => particle.life > 0);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      if (isDarkTheme) {
        if (Math.random() < 0.3) {
          particles.push(
            new Particle(
              Math.random() * canvas.width,
              Math.random() * canvas.height,
            ),
          );
        }
      } else {
        if (Math.random() < 0.1) {
          particles.push(
            new Particle(
              Math.random() * canvas.width,
              Math.random() * canvas.height,
            ),
          );
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", init);
    init();
    animate(0);

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default UniverseBackground;

