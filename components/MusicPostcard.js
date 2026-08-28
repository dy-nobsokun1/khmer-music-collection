import { useState } from 'react';

const MusicPostcard = ({ entry }) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    position: 'relative',
    padding: '32px 24px',
    backgroundColor: '#F5F1E8',
    border: '2px solid #C1B19C',
    borderRadius: '12px',
    maxWidth: '420px',
    margin: '16px auto',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #F5F1E8 0%, #E8DED7 100%)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: hovered
      ? '0 8px 24px rgba(0, 0, 0, 0.25)'
      : '0 4px 12px rgba(0, 0, 0, 0.15)',
  };

  const headerStyle = {
    fontFamily: "'Courier New', monospace",
    fontSize: '14px',
    color: '#8B7355',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    position: 'relative',
    zIndex: '2',
    borderBottom: '1px dotted #C1B19C',
    paddingBottom: '12px',
  };

  const titleStyle = {
    fontSize: '22px',
    fontWeight: '700',
    color: '#5D4C33',
    margin: '0 0 16px',
    lineHeight: 1.2,
    position: 'relative',
    zIndex: '2',
  };

  const infoGridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    position: 'relative',
    zIndex: '2',
  };

  const infoRowStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  };

  const labelStyle = {
    fontFamily: "'Courier New', monospace",
    fontSize: '11px',
    color: '#7A6A51',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    whiteSpace: 'nowrap',
  };

  const valueStyle = {
    fontSize: '14px',
    color: '#4A3F2E',
    fontWeight: '400',
  };

  const dotStyle = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#8B7355',
    opacity: '0.6',
  };

  const cornerStyle = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    borderTop: '4px solid #C1B19C',
    borderLeft: '4px solid #C1B19C',
    opacity: '0.3',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="article"
      aria-label={'Music entry: ' + entry.title + ' by ' + entry.artist}
    >
      <div style={{...cornerStyle, top: 0, left: 0}} aria-hidden="true" />
      <div style={{...cornerStyle, top: 0, right: 0, borderLeft: 'none', borderRight: '4px solid #C1B19C'}} aria-hidden="true" />
      <div style={{...cornerStyle, bottom: 0, top: 'auto', borderTop: '4px solid #C1B19C', borderLeft: 'none', borderRight: 'none'}} aria-hidden="true" />

      <div style={headerStyle}>Music Card</div>
      <h3 style={titleStyle}>{entry.title}</h3>

      <div style={infoGridStyle}>
        <div style={infoRowStyle}>
          <div style={dotStyle} />
          <span style={labelStyle}>Artist</span>
          <span style={valueStyle}>{entry.artist}</span>
        </div>
        <div style={infoRowStyle}>
          <div style={dotStyle} />
          <span style={labelStyle}>Time</span>
          <span style={valueStyle}>{entry.time}</span>
        </div>
        <div style={infoRowStyle}>
          <div style={dotStyle} />
          <span style={labelStyle}>Genre</span>
          <span style={valueStyle}>{entry.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPostcard;
