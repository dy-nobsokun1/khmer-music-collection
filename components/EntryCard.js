const EntryCard = ({ entry }) => {
  const cardStyle = {
    marginTop: 24,
    padding: 24,
    backgroundColor: '#1C222C',
    border: '1px solid #2E3644',
    borderRadius: 10,
  };

  const labelStyle = {
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
    color: '#97A1B3',
    margin: '8px 0 0',
  };

  const valueStyle = {
    fontSize: 16,
    margin: '6px 0 0',
  };

  return (
    <div style={cardStyle}>
      <p style={{ ...labelStyle, margin: 0, color: '#2EE6A8' }}>TITLE</p>
      <h3 style={{ fontSize: 22, margin: '6px 0 0', fontWeight: 700 }}>{entry.title}</h3>

      <p style={{ ...labelStyle, marginTop: 16 }}>ARTIST</p>
      <p style={valueStyle}>{entry.artist}</p>

      <p style={{ ...labelStyle, marginTop: 16 }}>PLACE</p>
      <p style={valueStyle}>{entry.place}</p>

      <p style={{ ...labelStyle, marginTop: 16 }}>CONTRIBUTED BY</p>
      <p style={valueStyle}>{entry.contributor}</p>

      <p style={{ ...labelStyle, marginTop: 16 }}>DESCRIPTION</p>
      <p style={{ ...valueStyle, color: '#97A1B3', lineHeight: 1.6 }}>{entry.description}</p>
    </div>
  );
};

export default EntryCard;