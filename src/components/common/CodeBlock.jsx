import React from 'react';

function CodeBlock({ codeString }) {
  return (
    <div style={styles.container}>
      <div style={styles.code}>{codeString}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'inline-grid',
    backgroundColor: 'rgb(25, 48, 61)',
    minWidth: '100%',
    borderRadius: '4px',
    padding: '24px',
  },
  code: {
    color: 'rgb(19, 229, 192)',
    overflowX: 'auto',
    whiteSpace: 'pre',
    fontSize: '16px',
    fontFamily: '"IBM Plex Mono", monospace',
  },
};

export default CodeBlock;
