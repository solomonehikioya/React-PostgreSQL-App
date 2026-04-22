import React, { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("Connecting to FastAPI...");

  useEffect(() => {
    fetch('http://localhost:8000/tasks')
      .then(res => {
        if(!res.ok) throw new Error("Backend Error");
        return res.json();
      })
      .then(data => {
        setTasks(data);
        setStatus("Connected to PostgreSQL");
      })
      .catch(err => {
        console.error(err);
        setStatus("Error: Cannot reach Backend");
      });
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#1a1a2e', 
      color: '#e94560', 
      minHeight: '100vh', 
      padding: '40px',
      fontFamily: 'Arial, sans-serif' 
    }}>
      <header style={{ borderBottom: '2px solid #0f3460', marginBottom: '20px' }}>
        <h1>🚀 PostgreSQL Data Explorer</h1>
        <p style={{ color: '#16213e', backgroundColor: '#0f3460', display: 'inline-block', padding: '5px 15px', borderRadius: '5px' }}>
          Status: {status}
        </p>
      </header>

      <div style={{ display: 'grid', gap: '15px' }}>
        {tasks.length > 0 ? tasks.map(task => (
          <div key={task.id} style={{ 
            backgroundColor: '#16213e', 
            padding: '20px', 
            borderRadius: '10px',
            borderLeft: '5px solid #e94560',
            marginBottom: '15px'
          }}>
            <strong style={{ color: '#fff' }}>Task ID: {task.id}</strong>
            <p style={{ margin: '5px 0' }}>Description: {task.title}</p>
            
            {/* ADD THIS SECTION BELOW */}
            <div style={{ marginTop: '10px', backgroundColor: '#0f3460', borderRadius: '5px' }}>
              <div style={{ 
                width: `${task.progress}%`, 
                backgroundColor: '#e94560', 
                color: 'white', 
                padding: '2px 10px', 
                fontSize: '12px',
                borderRadius: '5px',
                textAlign: 'right'
              }}>
                {task.progress}% Complete
            </div>
          </div>

       </div>
      )) : <p>No data found.</p>}
      </div>
    </div>
  );
}

export default App;