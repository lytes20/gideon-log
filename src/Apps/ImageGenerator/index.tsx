import { useRef } from 'react';
import html2canvas from 'html2canvas';

function ImageGenerator() {
  const posterRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    console.log('I get called');
    if (!posterRef.current) return;

    const canvas = await html2canvas(posterRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });

    const link = document.createElement('a');
    link.download = 'gidemvb-dev-announcement.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-zinc-400 text-sm tracking-widest uppercase">LinkedIn Announcement Poster</h1>

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

          {/* Top section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ color: '#71717a', fontSize: 24, letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>
              New domain, who dis
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 8 }}>
              <span style={{ position: 'relative', display: 'inline-block', color: '#52525b', fontSize: 48 }}>
                gideonb.dev
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: '80%',
                    height: 3,
                    backgroundColor: '#ef4444',
                    opacity: 0.6,
                    transform: 'translateY(-80%)',
                  }}
                />
              </span>
              <span style={{ color: '#71717a', fontSize: 36 }}>→</span>
              <span style={{ color: '#34d399', fontSize: 60, fontWeight: 700, letterSpacing: '-0.02em' }}>gidemvb.dev</span>
            </div>
          </div>

          {/* Middle message */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ color: '#e4e4e7', fontSize: 40, fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
              Same person. <span style={{ color: '#71717a' }}>New address.</span>
            </p>
            <p style={{ color: '#a1a1aa', fontSize: 24, lineHeight: 1.6, margin: 0 }}>
              I've moved my blog and portfolio to a new domain.
              <br />
              Update your bookmarks if you've got any.
            </p>
          </div>

          {/* Bottom — name + domain */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: '#e4e4e7', fontSize: 30, fontWeight: 600 }}>Gideon Bamuleseyo</span>
              <span style={{ color: '#52525b', fontSize: 20 }}>Software Engineer</span>
            </div>
            <span style={{ color: '#3f3f46', fontSize: 20, letterSpacing: '0.15em' }}>gidemvb.dev</span>
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

      <p className="text-zinc-600 text-xs">Downloads as PNG at 1200×628 — LinkedIn recommended size</p>
    </div>
  );
}

export default ImageGenerator;
