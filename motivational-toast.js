(() => {
  const toast = document.querySelector('#motivationToast');
  if (!toast) return;

  const quotes = [
    "Success starts with showing up.",
    "Small progress is still progress.",
    "Every task completed is a step closer to your goal.",
    "Stay patient and trust your journey.",
    "Great things take time and consistency.",
    "Your attitude determines your direction.",
    "Focus on progress, not perfection.",
    "Challenges are opportunities in disguise.",
    "Keep going, even when it's difficult.",
    "Hard work always plants seeds for success.",
    "Believe in your ability to succeed.",
    "One positive thought can change your day.",
    "Effort today creates opportunities tomorrow.",
    "You are stronger than your obstacles.",
    "Every day is a chance to improve.",
    "Consistency beats motivation.",
    "The best investment is in yourself.",
    "Success is built one day at a time.",
    "Learn, adapt, and keep moving forward.",
    "Your future is created by what you do today.",
    "Stay focused on your goals.",
    "Good things happen to those who persist.",
    "Every problem has a solution.",
    "A positive mindset creates positive results.",
    "Success favors those who prepare.",
    "Keep your eyes on the possibilities.",
    "Growth comes from stepping outside your comfort zone.",
    "Difficult roads often lead to beautiful destinations.",
    "Turn setbacks into comebacks.",
    "Progress begins when excuses end.",
    "Excellence is a habit, not an act.",
    "Work hard in silence and let success speak.",
    "You can achieve more than you think.",
    "Every accomplishment starts with a decision.",
    "Stay committed to your vision.",
    "Better days are ahead.",
    "Positive actions bring positive outcomes.",
    "Be proud of how far you've come.",
    "Keep learning and keep growing.",
    "Success is earned, not given.",
    "Make today count.",
    "Your effort matters.",
    "The journey is as important as the destination.",
    "Keep your standards high.",
    "Persistence creates possibilities.",
    "Challenges help you discover your strength.",
    "Success begins with self-belief.",
    "Stay hopeful and keep working.",
    "Focus on solutions, not problems.",
    "Every expert was once a beginner.",
    "Be the reason your team stays motivated.",
    "A strong mindset is your greatest asset.",
    "Good work never goes unnoticed.",
    "Turn pressure into motivation.",
    "Keep moving forward at your own pace.",
    "Your dedication will pay off.",
    "Success follows consistent effort.",
    "Stay grateful and stay driven.",
    "Work with purpose.",
    "Every day is an opportunity to excel.",
    "Your potential is limitless.",
    "Positive energy creates positive results.",
    "Don't stop until you're proud.",
    "Determination makes the impossible possible.",
    "Keep showing up for your dreams.",
    "Hard work opens doors.",
    "Focus on what you can control.",
    "Success loves preparation.",
    "Great achievements begin with small steps.",
    "Be better than yesterday.",
    "Stay calm, focused, and determined.",
    "Every challenge teaches a valuable lesson.",
    "You are capable of amazing things.",
    "Let your work reflect your ambition.",
    "Keep pushing your limits.",
    "Success belongs to those who persevere.",
    "Every effort counts.",
    "Opportunities come to those who seek them.",
    "Believe in the process.",
    "Strong work habits create lasting success.",
    "Keep your goals bigger than your fears.",
    "Positive thinking fuels progress.",
    "Work hard and stay humble.",
    "Every day is a fresh start.",
    "There is always a reason to keep going.",
    "Success is a journey, not a destination.",
    "Be patient with your progress.",
    "Turn your vision into reality.",
    "Stay dedicated to your growth.",
    "Consistent effort leads to extraordinary results.",
    "Never underestimate the power of persistence.",
    "Your hard work is building your future.",
    "Keep your focus on the big picture.",
    "Great results come from daily discipline.",
    "Stay positive through every challenge.",
    "Progress happens one step at a time.",
    "Believe, act, and achieve.",
    "Your best work is still ahead of you.",
    "Keep going. You're closer than you think.",
    "Today is another opportunity to succeed."
  ];

  let previousIndex = -1;
  let rotationTimer;

  function showNextQuote() {
    let nextIndex = Math.floor(Math.random() * quotes.length);
    if (quotes.length > 1 && nextIndex === previousIndex) {
      nextIndex = (nextIndex + 1) % quotes.length;
    }
    previousIndex = nextIndex;
    toast.textContent = quotes[nextIndex];
  }

  window.showMotivationalQuote = () => {
    window.clearInterval(rotationTimer);
    showNextQuote();
    toast.hidden = false;
    toast.classList.add('is-visible');
    rotationTimer = window.setInterval(showNextQuote, 10000);
  };
})();