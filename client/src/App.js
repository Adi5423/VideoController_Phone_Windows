import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const s = io('http://192.168.1.3:4000');
    setSocket(s);
    return () => s.disconnect();
  }, []);

  const send = cmd => socket && socket.emit('remote-command', cmd);

  const btnStyle = {
    flex: '1 1 0',
    minWidth: 80,
    minHeight: 80,
    maxWidth: 180,
    maxHeight: 180,
    margin: 16,
    cursor: 'pointer',
    border: '2px solid #333',
    borderRadius: 16,
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
  };

  const triangleStyle = {
    display: 'inline-block',
    fontSize: 'clamp(1.2rem, 5vw, 2.5rem)',
    lineHeight: 1,
  };

  const fBoxStyle = {
    width: 225,
    height: 100,
    marginTop: 8,
    marginBottom: 0,
    marginLeft: .5,
    marginRight: 250,
    border: '2px solid #333',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.2s',
    transform: 'rotate(90deg)',
  };

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#888',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: 0, padding: 0, boxSizing: 'border-box',
    }}>
      <div style={{
        transform: 'translate(55px, -40px) scale(1.3) rotate(0deg)', // 👈 master control here
        transition: 'transform 0.3s',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 220,
        }}>
          {/* Backward */}
          <button
            style={{
              ...btnStyle,
              transform: 'rotate(-90deg)',
              position: 'relative',
            }}
            onClick={() => send('BACKWARD')}
            aria-label="Backward"
          >
            <span style={triangleStyle}>&#9654;&#9654;</span>
          </button>

          {/* Play */}
          <button
            style={{
              ...btnStyle,
              transform: 'rotate(90deg)',
              marginTop: 110,
              marginBottom: 0,
              position: 'relative',
            }}
            onClick={() => send('PLAY_PAUSE')}
            aria-label="Play/Pause"
          >
            <span style={triangleStyle}>&#9654;</span>
          </button>

          {/* F Box */}
          <div
            style={{
              ...fBoxStyle,
              left:-35,
              bottom:95,
              position: 'relative',
            }}
            onClick={() => send('FULLSCREEN')}
            aria-label="Fullscreen"
          >
            F
          </div>

          {/* Forward */}
          <button
            style={{
              ...btnStyle,
              transform: 'rotate(90deg)',
              marginTop: 0,
              position: 'relative',
            }}
            onClick={() => send('FORWARD')}
            aria-label="Forward"
          >
            <span style={triangleStyle}>&#9654;&#9654;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
