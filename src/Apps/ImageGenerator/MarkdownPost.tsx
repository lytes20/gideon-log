import { useRef } from 'react';
import html2canvas from 'html2canvas';

function MarkdownPost() {
  const posterRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!posterRef.current) return;

    const canvas = await html2canvas(posterRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });

    const link = document.createElement('a');
    link.download = 'gidemvb-what-is-markdown.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-zinc-400 text-sm tracking-widest uppercase">Markdown Blog Post — LinkedIn Card</h1>

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
            <h2 style={{ color: '#f4f4f5', fontSize: 72, fontWeight: 700, margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              What is <span style={{ color: '#34d399' }}>Markdown?</span>
            </h2>
          </div>

          {/* Middle — inline code snippet as visual anchor */}
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
            <p style={{ color: '#a1a1aa', fontSize: 18, margin: 0, letterSpacing: '0.05em' }}># Shopping List</p>
            <p style={{ color: '#a1a1aa', fontSize: 18, margin: 0 }}>Things I need to shop.</p>
            <p style={{ color: '#a1a1aa', fontSize: 18, margin: 0 }}>- Bananas &nbsp; - Eggs &nbsp; - Milk</p>
            <p style={{ color: '#a1a1aa', fontSize: 18, margin: 0 }}>
              You can also add <span style={{ color: '#a78bfa' }}>**bold**</span>, <span style={{ color: '#38bdf8' }}>*italic*</span>, and{' '}
              <span style={{ color: '#34d399' }}>`inline code`</span>.
            </p>
          </div>

          {/* Bottom — tagline + author */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ color: '#a1a1aa', fontSize: 22, lineHeight: 1.5 }}>
                Plain text. Structured output. Works with Git,
                <br />
                AI agents, and everything in between.
              </span>
            </div>
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

export default MarkdownPost;
