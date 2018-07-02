const formatDate = (time) => {
  if (!time) return time = '0s';
  Math.round(time)
  let hours = minutes = seconds = 0;
  let newTime = '';

  hours = Math.floor(time / (60 * 60) );
  time = time % (60 * 60);
  minutes = Math.floor(time / 60 );
  time = time % 60;
  seconds = Math.floor(time);
  newTime = `${hours !== 0 ? `${hours}h` : ''}${hours && minutes ? ' ' : ''}${minutes !== 0 ? `${minutes}m` : ''}${(hours || minutes) && seconds ? ' ' : ''}${seconds !== 0 || (hours === 0 && minutes === 0) ? `${seconds}s` : ''}`
    
  return newTime;
  
}
module.exports = formatDate;