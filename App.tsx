import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#242424', 
      color: '#ffffff', 
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Nick McMillan</h1>
        <p style={{ fontSize: '1.2rem', color: '#cccccc', maxWidth: '600px', margin: '0 auto' }}>
          I'm a front-end developer who wants to help make the internet a more creative, accessible, and better place.
        </p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Work</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            justifyItems: 'center'
          }}>
            {/* Smiling Mind */}
            <div style={{
              width: '250px',
              height: '300px',
              backgroundColor: '#f5f5f5',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              color: '#000',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              SMILING MIND
            </div>

            {/* MASS Studio */}
            <div style={{
              width: '250px',
              height: '300px',
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              color: '#fff',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              MASS
            </div>

            {/* Soccer Tool */}
            <div style={{
              width: '250px',
              height: '300px',
              backgroundColor: '#7dd3c0',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              color: '#000',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              SOCCER TOOL
            </div>

            {/* Fenton */}
            <div style={{
              width: '250px',
              height: '300px',
              backgroundColor: '#f4e04d',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              color: '#000',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              FENTON
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Experiments</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem', 
              padding: '1.5rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255, 107, 53, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                🏎️
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>GT Sport, 2021</h3>
                <p style={{ margin: 0, color: '#cccccc', fontSize: '0.95rem' }}>
                  An in-browser recreation of a scene from the game Gran Turismo Sport. Great for learning Blender.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem', 
              padding: '1.5rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(78, 205, 196, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                🧶
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Yarnghetti, 2019</h3>
                <p style={{ margin: 0, color: '#cccccc', fontSize: '0.95rem' }}>
                  A 3D physics recreation of Sil-o-haw Robb's endless rope nightmare.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem', 
              padding: '1.5rem 0'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(69, 183, 209, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                💎
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Emerald Hill Zone, 2014</h3>
                <p style={{ margin: 0, color: '#cccccc', fontSize: '0.95rem' }}>
                  A recreation of the level from the classic game Sonic the Hedgehog 2.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;