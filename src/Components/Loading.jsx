import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Spinner animation="grow" />
    </div>
  );
}
