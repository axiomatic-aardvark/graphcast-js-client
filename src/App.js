import React, { useState, useEffect } from 'react';
import { startNode, sendMessageWithInputs } from '@graphops/graphcast-js';

function App() {
  const [node, setNode] = useState(null);
  const [subgraphId, setSubgraphId] = useState('');
  const [newHash, setNewHash] = useState('');

  useEffect(() => {
    const startWakuNode = async () => {
      const wakuNode = await startNode();
      setNode(wakuNode);
    };

    startWakuNode();
  }, []);

  const sendMessage = () => {
    if (node) {
      sendMessageWithInputs(node, subgraphId, newHash);
    } else {
      console.log("Waku node is not started yet.");
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ display: 'inline-block', border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
        <h2>📡 Graphcast</h2>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Subgraph ID"
            value={subgraphId}
            onChange={(e) => setSubgraphId(e.target.value)}
            style={{ padding: '10px', width: '300px', marginRight: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="New Hash"
            value={newHash}
            onChange={(e) => setNewHash(e.target.value)}
            style={{ padding: '10px', width: '300px', marginRight: '10px' }}
          />
        </div>
        <div>
          <button onClick={sendMessage} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', cursor: 'pointer' }}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
