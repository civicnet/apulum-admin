import React from 'react';
import ReactDOM from 'react-dom';
import { IncidentCard } from '../';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockIncident = {
    title: "",
    description: "",
    type: "OTHER",
    status: "NEW"
  }
  ReactDOM.render(<IncidentCard incident={mockIncident} />, div);
});