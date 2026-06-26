export default function BackgroundLayer({ opacity = 0.35 }) {
  return (
    <div
      className="fixed inset-0 -z-30 pointer-events-none overflow-hidden"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #172B36 0%, #0F3A47 50%, #172B36 100%)' }} />
      <div
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full blur-3xl animate-fade-in"
        style={{ background: 'radial-gradient(circle, rgba(255, 200, 1, 0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -right-20 bottom-10 h-96 w-96 rounded-full blur-3xl animate-fade-in"
        style={{ background: 'radial-gradient(circle, rgba(255, 153, 50, 0.10) 0%, transparent 72%)' }}
      />
    </div>
  );
}
