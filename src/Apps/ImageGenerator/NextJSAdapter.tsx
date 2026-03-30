import { useRef } from 'react';
import html2canvas from 'html2canvas';

function NextJSAdapter() {
  const posterRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!posterRef.current) return;

    const canvas = await html2canvas(posterRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });

    const link = document.createElement('a');
    link.download = 'gidemvb-nextjs-adapter.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-zinc-400 text-sm tracking-widest uppercase">Next.js Adapter API — LinkedIn Card</h1>

      {/* Poster — 1200×628 rendered at half size for preview */}
      <div style={{ width: 600, height: 314, transformOrigin: 'top center' }} className="shadow-2xl rounded-lg overflow-hidden">
        <div
          ref={posterRef}
          style={{
            width: 1200,
            height: 628,
            transform: 'scale(0.5)',
            transformOrigin: 'top left',
            backgroundColor: '#18181b',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 80,
            fontFamily: 'monospace',
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(to right, #8b5cf6, #38bdf8, #34d399)',
            }}
          />

          {/* Top section — label + title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ color: '#a1a1aa', fontSize: 22, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>New article</p>
            <h2 style={{ color: '#f4f4f5', fontSize: 60, fontWeight: 700, margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Next.js <span style={{ color: '#34d399' }}>Adapter API</span>
            </h2>
          </div>

          {/* Middle — terminal block showing the deploy-anywhere story */}
          <div
            style={{
              backgroundColor: '#09090b',
              border: '1px solid #27272a',
              borderRadius: 12,
              padding: '28px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <p style={{ color: '#a1a1aa', fontSize: 18, margin: 0 }}>
              <span style={{ color: '#71717a' }}>$</span> next build
            </p>
            <p style={{ color: '#a1a1aa', fontSize: 18, margin: 0 }}>
              <span style={{ color: '#34d399' }}>✓</span> Build complete
            </p>
            <p style={{ color: '#3f3f46', fontSize: 18, margin: 0 }}>─────────────────────</p>
            <p style={{ color: '#a1a1aa', fontSize: 18, margin: 0 }}>Deploy to:</p>
            <p style={{ color: '#a1a1aa', fontSize: 18, margin: 0 }}>
              &nbsp;&nbsp;<span style={{ color: '#34d399' }}>→</span> AWS &nbsp;&nbsp;
              <span style={{ color: '#34d399' }}>→</span> Cloudflare &nbsp;&nbsp;
              <span style={{ color: '#34d399' }}>→</span> Netlify &nbsp;&nbsp;
              <span style={{ color: '#34d399' }}>→</span> Vercel <span style={{ color: '#52525b' }}>(same API)</span>
            </p>
          </div>

          {/* Bottom — tagline + domain */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <span style={{ color: '#a1a1aa', fontSize: 24, lineHeight: 1.5 }}>
              Less lock-in. More flexibility.
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
              <span style={{ color: '#e4e4e7', fontSize: 26, fontWeight: 600 }}>gidemvb.dev</span>
              <span style={{ color: '#3f3f46', fontSize: 18, letterSpacing: '0.1em' }}>gidemvb.dev</span>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 1,
              backgroundColor: '#27272a',
            }}
          />
        </div>
      </div>

      <button
        onClick={handleGenerate}
        className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm tracking-wide rounded transition-colors cursor-pointer"
      >
        Generate Image
      </button>

      <p className="text-zinc-600 text-xs">Downloads as PNG at 1200x628 — LinkedIn recommended size</p>
    </div>
  );
}

export default NextJSAdapter;
