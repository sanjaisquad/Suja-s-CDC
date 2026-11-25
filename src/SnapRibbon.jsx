import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { ExodeUICanvas, useExodeUI } from 'exodeui';

// 10 Authentic Pediatric Clinic Reviews matching reference design
export const PEDIATRIC_REVIEWS = [
  {
    id: 1,
    name: "Priya S.",
    role: "PARENT",
    text: "Thank you for your constant support and care. Our child's therapist mentioned: 'My primary goal is for your child to grow strong.' Mission accomplished!",
    stars: 5,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rajesh K.",
    role: "PARENT",
    text: "This place has been wonderful for my son. The therapists are patient and skilled. I've seen remarkable progress in just 6 months!",
    stars: 5,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Anitha M.",
    role: "PARENT",
    text: "Dr. Jansirani and her team are exceptional. The sensory gym is amazing and my daughter loves coming here. Highly recommend!",
    stars: 5,
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Suresh V.",
    role: "PARENT",
    text: "Best child development center in Chennai! The early intervention program helped my child catch up on milestones. Forever grateful.",
    stars: 5,
    date: "3 months ago"
  },
  {
    id: 5,
    name: "Deepa R.",
    role: "PARENT",
    text: "The personalized attention and sensory integration strategies transformed our child's school readiness and sitting tolerance. Outstanding dedication!",
    stars: 5,
    date: "4 months ago"
  },
  {
    id: 6,
    name: "Kavitha N.",
    role: "PARENT",
    text: "From non-verbal gestures to communicating his needs with confidence, the speech and occupational therapy here has been truly transformative.",
    stars: 5,
    date: "5 months ago"
  },
  {
    id: 7,
    name: "Ganesh B.",
    role: "PARENT",
    text: "The holistic assessment identified our son's exact sensory needs. The progress in fine motor skills and focus within four months is unbelievable.",
    stars: 5,
    date: "5 months ago"
  },
  {
    id: 8,
    name: "Meera T.",
    role: "PARENT",
    text: "Warm, welcoming, and deeply professional environment. The therapists celebrate every small win with us and empower parents with practical home exercises.",
    stars: 5,
    date: "6 months ago"
  },
  {
    id: 9,
    name: "Arun P.",
    role: "PARENT",
    text: "Our 4-year-old was struggling with transitions and emotional regulation. Suja's therapy team gave him the tools to express himself calmly.",
    stars: 5,
    date: "7 months ago"
  },
  {
    id: 10,
    name: "Lakshmi S.",
    role: "PARENT",
    text: "Compassionate guidance, state-of-the-art sensory equipment, and dedicated therapists who treat each child with patience and immense love.",
    stars: 5,
    date: "8 months ago"
  }
];

// Official Google Logo SVG (100% exact vector geometry)
function GoogleOfficialLogo({ width = 74, height = 25 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 272 92"
      width={width}
      height={height}
      aria-label="Google"
      style={{ display: 'block' }}
    >
      <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
      <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
      <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
    </svg>
  );
}

// 5 Stars Component
function GoogleStars({ size = 18 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width={size} height={size} fill="#FBBC04" style={{ display: 'block' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * SnapRibbon Infinite Conveyor Belt Review Carousel
 * 
 * Rules:
 * - Total 10 authentic reviews.
 * - Continuous infinite loop conveyor belt.
 * - Black timeline progress bar indicating the lifetime of each review.
 * - HOVER PAUSE (Desktop only): ONLY when cursor is placed directly on top of the review card container, the timeline pauses.
 *   When the cursor moves outside, it resumes immediately.
 * - MOBILE VIEW:
 *   - Helper text ONLY on mobile: "Swipe to explore • Tap card to pause" (or "Paused • Tap card to resume").
 *   - NO text below the bar on Desktop.
 *   - Tapping active card toggles pause / resume cleanly without getting stuck in hover emulation.
 *   - Peeking cards on left/right for clear swipe affordance.
 * - Exact official Google SVG branding.
 */
export function SnapRibbon({
  src = '/snap-ribbon.bexode',
  reviews = PEDIATRIC_REVIEWS,
  springStiffness = 170,
  springDamping = 22,
  dragToScroll = true,
  autoPlay = true,
  reviewDurationMs = 4200,
  onRowChange
}) {
  const {
    setEngine,
    engine,
    setInputStringArray,
    updateInput,
    fireTrigger
  } = useExodeUI();

  const N = reviews.length;
  // Clone 3 sets for continuous infinite conveyor belt
  const CLONED_ITEMS = [...reviews, ...reviews, ...reviews];

  // Start in the middle clone set at index N + 1 (Rajesh K.)
  const [virtualIndex, setVirtualIndex] = useState(N + 1);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0% to 100%

  const containerRef = useRef(null);
  const dragStartX = useRef(0);
  const lastDragX = useRef(0);
  const lastDragTime = useRef(0);
  const dragVelocity = useRef(0);
  const touchDistanceRef = useRef(0);

  const startTimeRef = useRef(Date.now());
  const elapsedOffsetRef = useRef(0);
  const animFrameRef = useRef(null);

  // Normal review index (0 to N - 1)
  const actualIndex = ((virtualIndex % N) + N) % N;

  // Responsive device checks
  const isMobile = containerWidth < 640;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;

  // Measure container width for responsive positioning
  useEffect(() => {
    function measure() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
    };
  }, []);

  // Configure ExodeUI engine inputs
  useEffect(() => {
    if (!engine) return;

    try {
      const titles = reviews.map(r => r.name);
      setInputStringArray('Snapping Ribbon Titles', titles);

      const subtitles = reviews.map(r => r.role);
      setInputStringArray('Snapping Ribbon Subtitles', subtitles);

      const details = reviews.map(r => r.text);
      setInputStringArray('Snapping Ribbon Details', details);

      const meta = reviews.map(() => '5.0 ★');
      setInputStringArray('Snapping Ribbon Meta', meta);

      updateInput('Snapping Ribbon · Selected row', actualIndex);
      updateInput('Snapping Ribbon · Spring stiffness', springStiffness);
      updateInput('Snapping Ribbon · Spring damping', springDamping);
      updateInput('Snapping Ribbon · Drag to scroll', dragToScroll);
      updateInput('Snapping Ribbon · Autoplay', autoPlay);
    } catch (err) {
      console.warn('[SnapRibbon] ExodeUI input setup error:', err);
    }
  }, [engine, reviews, springStiffness, springDamping, dragToScroll, autoPlay, actualIndex]);

  // Handle virtual index wrap-around for seamless infinite conveyor belt
  useEffect(() => {
    if (virtualIndex >= 2 * N) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setVirtualIndex(prev => prev - N);
      }, 550);
      return () => clearTimeout(timer);
    } else if (virtualIndex < N) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setVirtualIndex(prev => prev + N);
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [virtualIndex, N]);

  // Re-enable animation after wrap-around normalization
  useEffect(() => {
    if (!isAnimating) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isAnimating]);

  // Notify parent on row change
  useEffect(() => {
    if (onRowChange) onRowChange(actualIndex);
    try {
      if (engine) {
        updateInput('Snapping Ribbon · Selected row', actualIndex);
      }
    } catch (e) {}
  }, [actualIndex, onRowChange, engine, updateInput]);

  // Reset timer
  const resetTimer = useCallback(() => {
    startTimeRef.current = Date.now();
    elapsedOffsetRef.current = 0;
    setProgress(0);
  }, []);

  // Continuous auto-advancing conveyor belt timer loop
  // On desktop: pauses when hovered, paused, or dragging
  // On mobile: ignores isHovered so simulated touch hover never blocks resuming!
  useEffect(() => {
    const activeHover = !isMobile && isHovered;
    const shouldPause = !autoPlay || isPaused || activeHover || isDragging;

    if (shouldPause) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    // Resume from where it paused
    startTimeRef.current = Date.now() - elapsedOffsetRef.current;

    const tick = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      elapsedOffsetRef.current = elapsed;

      const p = Math.min(100, (elapsed / reviewDurationMs) * 100);
      setProgress(p);

      if (elapsed >= reviewDurationMs) {
        // Timeline reached 100% -> Advance to next review and restart timeline
        startTimeRef.current = Date.now();
        elapsedOffsetRef.current = 0;
        setProgress(0);
        setIsAnimating(true);
        setVirtualIndex(prev => prev + 1);

        try {
          if (engine) fireTrigger('Snapping Ribbon · Next row');
        } catch (e) {}
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [autoPlay, isPaused, isHovered, isDragging, isMobile, reviewDurationMs, engine, fireTrigger]);

  // Drag-to-Scroll & Touch Handlers
  const handlePointerDown = (e) => {
    if (!dragToScroll) return;
    setIsDragging(true);
    setIsAnimating(false);
    touchDistanceRef.current = 0;

    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    dragStartX.current = clientX;
    lastDragX.current = clientX;
    lastDragTime.current = Date.now();
    dragVelocity.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const deltaX = clientX - dragStartX.current;
    touchDistanceRef.current = Math.abs(deltaX);

    const now = Date.now();
    const dt = now - lastDragTime.current;
    if (dt > 0) {
      dragVelocity.current = (clientX - lastDragX.current) / dt;
    }
    lastDragX.current = clientX;
    lastDragTime.current = now;
    setDragOffset(deltaX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsAnimating(true);

    const threshold = isMobile ? 35 : 65;
    const velocityThreshold = isMobile ? 0.22 : 0.35;

    let deltaSteps = 0;
    if (dragOffset < -threshold || dragVelocity.current < -velocityThreshold) {
      deltaSteps = 1;
    } else if (dragOffset > threshold || dragVelocity.current > velocityThreshold) {
      deltaSteps = -1;
    }

    setDragOffset(0);

    if (deltaSteps !== 0) {
      resetTimer();
      setVirtualIndex(prev => prev + deltaSteps);
    }
  };

  // Dimensions for conveyor belt layout (optimized for Mobile & Desktop)
  // On mobile: 78% container width leaves ~11% on both left and right for peeking adjacent cards!
  const cardWidth = isMobile
    ? Math.min(310, Math.max(265, Math.round(containerWidth * 0.78)))
    : (isTablet ? 315 : 330);
  const cardGap = isMobile ? 16 : 26;
  const cardHeight = isMobile ? '390px' : '430px';
  const cardStep = cardWidth + cardGap;
  const centerX = (containerWidth / 2) - (cardWidth / 2);
  const trackTranslateX = centerX - (virtualIndex * cardStep) + dragOffset;

  return (
    <div
      ref={containerRef}
      className="snap-ribbon-carousel-root"
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
        padding: isMobile ? '1rem 0 2rem 0' : '1.5rem 0 2.5rem 0',
        position: 'relative',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Background offscreen ExodeUI engine instance */}
      <div style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <ExodeUICanvas
          src={src}
          onReady={setEngine}
          autoPlay={autoPlay}
          onInputUpdate={(inputs) => {
            if (inputs && inputs['Snapping Ribbon · Selected row'] !== undefined) {
              const row = Math.round(inputs['Snapping Ribbon · Selected row']);
              if (row >= 0 && row < N && row !== actualIndex) {
                setVirtualIndex(N + row);
                resetTimer();
              }
            }
          }}
        />
      </div>

      {/* Infinite Loop Conveyor Belt Track Container */}
      <div
        className="snap-ribbon-touch-area"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        style={{
          width: '100%',
          overflow: 'visible',
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'pan-y',
          padding: isMobile ? '16px 0 24px 0' : '24px 0 32px 0'
        }}
      >
        <div
          className="snap-ribbon-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            transform: `translate3d(${trackTranslateX}px, 0, 0)`,
            transition: isAnimating && !isDragging
              ? 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
              : 'none',
            willChange: 'transform'
          }}
        >
          {CLONED_ITEMS.map((review, i) => {
            const isActive = i === virtualIndex;
            const distance = Math.abs(i - virtualIndex);

            // Elevated center card per reference design
            const translateY = isActive ? (isMobile ? -10 : -14) : 0;
            const scale = isActive
              ? (isMobile ? 1.02 : 1.03)
              : Math.max(0.92, 0.96 - distance * 0.02);
            const opacity = isActive
              ? 1
              : Math.max(0.72, 0.9 - distance * 0.07);
            const boxShadow = isActive
              ? (isMobile
                  ? '0 16px 36px -8px rgba(0, 0, 0, 0.12), 0 6px 16px -4px rgba(0, 0, 0, 0.04)'
                  : '0 24px 50px -10px rgba(0, 0, 0, 0.12), 0 10px 22px -6px rgba(0, 0, 0, 0.04)')
              : '0 8px 24px rgba(0, 0, 0, 0.035)';

            return (
              <div
                key={`${review.id}-${i}`}
                // Pause ONLY when cursor is placed on top of this review container (desktop only)
                onMouseEnter={(e) => {
                  if (!isMobile && e.nativeEvent?.pointerType !== 'touch') {
                    setIsHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile) {
                    setIsHovered(false);
                  }
                }}
                onClick={() => {
                  if (touchDistanceRef.current > 10) return; // Ignore drag/swipe clicks
                  if (isActive) {
                    // Clicking or tapping the active center pop-up card toggles pause / resume
                    setIsHovered(false); // Clear simulated hover on touch devices
                    setIsPaused(prev => !prev);
                  } else {
                    // Clicking any side card centers it, unpauses, and restarts timeline
                    setIsAnimating(true);
                    setVirtualIndex(i);
                    setIsHovered(false);
                    setIsPaused(false);
                    resetTimer();
                  }
                }}
                className="snap-ribbon-card"
                title={
                  isActive
                    ? (isPaused ? "Paused • Click to resume auto-scroll" : "Hover or click to pause")
                    : "Click to view review"
                }
                style={{
                  flexShrink: 0,
                  width: `${cardWidth}px`,
                  height: cardHeight,
                  marginRight: `${cardGap}px`,
                  backgroundColor: '#FFFFFF',
                  borderRadius: isMobile ? '32px' : '40px',
                  padding: isMobile ? '1.85rem 1.45rem 1.45rem 1.45rem' : '2.5rem 2.15rem 2.15rem 2.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: boxShadow,
                  transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                  opacity: opacity,
                  transition: isAnimating && !isDragging
                    ? 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease'
                    : 'none',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                  border: isActive && (isPaused || (!isMobile && isHovered))
                    ? '1.5px solid rgba(17, 24, 39, 0.2)'
                    : '1px solid rgba(0, 0, 0, 0.03)',
                  zIndex: isActive ? 10 : 5 - Math.min(4, distance),
                  position: 'relative'
                }}
              >
                {/* Header: Official Google Logo + 5 Stars */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: isMobile ? '1.4rem' : '2rem'
                    }}
                  >
                    <GoogleOfficialLogo
                      width={isMobile ? 64 : 74}
                      height={isMobile ? 22 : 25}
                    />
                    <GoogleStars size={isMobile ? 16 : 18} />
                  </div>

                  {/* Body: Quoted Review Text */}
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                      fontSize: isMobile ? '0.96rem' : '1.04rem',
                      lineHeight: isMobile ? 1.55 : 1.65,
                      color: '#4B5563',
                      margin: 0,
                      fontWeight: 400,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    "{review.text}"
                  </p>
                </div>

                {/* Footer: Author Name & Subtitle Role */}
                <div style={{ marginTop: isMobile ? '1.25rem' : '2rem' }}>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                      fontSize: isMobile ? '1.05rem' : '1.15rem',
                      fontWeight: 700,
                      color: '#111827',
                      lineHeight: 1.3,
                      marginBottom: '3px'
                    }}
                  >
                    {review.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                      fontSize: isMobile ? '0.72rem' : '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#9CA3AF'
                    }}
                  >
                    {review.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Loading Time Life of a Review - Black Progress Bar */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: isMobile ? '0.75rem' : '1.25rem'
        }}
      >
        <div
          title={(isPaused || (!isMobile && isHovered)) ? "Timeline Paused" : `Review ${actualIndex + 1} of ${N}`}
          style={{
            width: isMobile ? '130px' : '160px',
            height: '3.5px',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Black Fill Bar indicating current review life */}
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#111827', // Black color
              borderRadius: '999px',
              opacity: (isPaused || (!isMobile && isHovered)) ? 0.6 : 1,
              transition: isDragging || progress === 0 ? 'none' : 'width 0.05s linear'
            }}
          />
        </div>

        {/* Status text: ONLY displayed on mobile view, completely hidden on desktop */}
        {isMobile && (
          <div
            style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#9CA3AF',
              marginTop: '6px',
              textAlign: 'center'
            }}
          >
            <span>{isPaused ? 'Paused • Tap card to resume' : 'Swipe to explore • Tap card to pause'}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Window global initializer
window.initSnapRibbonComponent = function(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const root = ReactDOM.createRoot(container);
  root.render(<SnapRibbon {...options} />);
};
