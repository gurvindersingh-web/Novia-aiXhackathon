import IntroNavbar from './layout/IntroNavbar';
import Lightfall from './skyfall';

export default function IntroPage({ onEnter, isExiting }) {
  const handleStart = () => {
    onEnter?.('#hero');
  };

  return (
    <div
      className={`intro-page fixed inset-0 z-[100] flex flex-col overflow-hidden ${isExiting ? 'intro-exiting' : ''}`}
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <IntroNavbar onEnter={onEnter} />

      <div className="absolute inset-0 z-0" style={{ opacity: 0.45 }} aria-hidden="true">
        <Lightfall
          colors={['#FFC801', '#FF9932', '#114C5A']}
          backgroundColor="#172B36"
          speed={0.7}
          density={0.75}
          mouseInteraction
        />
      </div>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight animate-fade-in-up"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text)',
            }}
          >
            Your data knows
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--gradient-primary)' }}
            >
              what happens next.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-xl leading-relaxed animate-fade-in-up"
            style={{
              color: 'var(--color-muted)',
              animationDelay: '80ms',
            }}
          >
            Novia AI turns fragmented pipelines into a single intelligence layer —
            so your team moves from reactive reporting to predictive action.
          </p>

          <button
            onClick={handleStart}
            className="btn-primary animate-fade-in-up"
            style={{ animationDelay: '160ms' }}
          >
            Start
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
