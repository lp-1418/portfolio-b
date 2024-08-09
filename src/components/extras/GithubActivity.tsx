import React, { useEffect, useRef } from 'react';
import GitHubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar-responsive.css';

const GithubActivity = ({ username }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, username, {
        responsive: true,
        tooltips: false,
        global_stats: false,
        summary_text: true,
      });
    }
  }, [username]);

  return (
    <div>
      <h2>GitHub Activity</h2>
      <div ref={calendarRef} className="calendar"></div>
    </div>
  );
};

export default GithubActivity;

