import { Routes, Route, Navigate } from 'react-router'

function SchedulePage() {
  return (
    <main className="page">
      <h1 className="schedule-heading">
        <span>Train with Purpose </span>
        <span className="schedule-gradient">Schedule</span>
        <span> with Intention</span>
      </h1>
    </main>
  )
}

export function App() {
  return (
    <Routes>
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="*" element={<Navigate to="/schedule" replace />} />
    </Routes>
  )
}
