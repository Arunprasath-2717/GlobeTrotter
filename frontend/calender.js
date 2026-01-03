document.addEventListener('DOMContentLoaded', function() {
  // Trip data
  const trips = [
    {
      id: 'nyc',
      title: 'NYC Getaway',
      start: '2024-01-28',
      color: '#667eea'
    },
    {
      id: 'paris',
      title: 'Mysterious Crab',
      start: '2024-01-15',
      color: '#764ba2'
    },
    {
      id: 'japan',
      title: 'Japan Adventure',
      start: '2024-01-23',
      color: '#10b981'
    }
  ];

  let calendar;
  let currentTripIndex = 0;

  // Initialize FullCalendar
  const calendarEl = document.getElementById('calendar');
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2024-01-01',
    headerToolbar: {
      left: '',
      center: 'title',
      right: 'prev,next today'
    },
    height: '100%',
    dayMaxEvents: 3,
    eventClick: function(info) {
      alert(`Trip: ${info.event.title}\nDate: ${info.event.start}\nConnect your backend API here!`);
    },
    datesSet: function(info) {
      console.log('Calendar changed to:', info.startStr, 'to', info.endStr);
    }
  });
  calendar.render();

  // Load initial trip events
  loadTripEvents(0);

  // Sidebar trip selection
  document.querySelectorAll('.trip-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      document.querySelector('.trip-card.active')?.classList.remove('active');
      card.classList.add('active');
      loadTripEvents(index);
    });
  });

  // Load specific trip events
  function loadTripEvents(index) {
    currentTripIndex = index;
    const trip = trips[index];
    
    calendar.removeAllEvents();
    calendar.addEvent({
      title: trip.title,
      start: trip.start,
      backgroundColor: trip.color,
      borderColor: trip.color
    });
  }

  // Header button handlers
  document.querySelector('.filter-btn').addEventListener('click', () => {
    alert('Filter trips by date/location');
  });

  document.querySelector('.settings-btn').addEventListener('click', () => {
    alert('Calendar settings');
  });

  document.querySelector('.sort-btn').addEventListener('click', () => {
    alert('Sort trips');
  });
});
