import React from 'react';

const NextMatchComponent = () => {
  <h1>Prochain Match</h1>;
  if (this.state.mode === 'view') {
    return (
      <div>
        <p>Text: {this.state.text}</p>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Text: {this.state.text}</p>
        <input onChange={this.handleChange} value={this.state.inputText} />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
};
