const gif = async (status) => {
  const statusGif = document.querySelector('img');
  if (status === 'Clouds') {
    statusGif.src = ('https://media.giphy.com/media/xUOwGoNa2uX6M170d2/giphy.gif');
  } else if (status === 'Clear' || status === 'Haze') {
    statusGif.src = ('https://media.giphy.com/media/izijkWI2KBt0k/giphy.gif');
  } else if (status === 'Drizzle') {
    statusGif.src = ('https://media.giphy.com/media/R761lRtHcXuRQgF1Pf/giphy.gif');
  } else if (status === 'Rain') {
    statusGif.src = ('https://media.giphy.com/media/xUOwGoNa2uX6M170d2/giphy.gif');
  } else if (status === 'Snow') {
    statusGif.src = ('https://media.giphy.com/media/tIHktzgRi8yjIplFVI/giphy.gif');
  }
};
export default gif;