export default async function gif(status) {
  const status_gif = document.querySelector('img');
  console.log(status);
  if (status === 'Clouds') {
    status_gif.src = ('https://media.giphy.com/media/xUOwGoNa2uX6M170d2/giphy.gif');
  } else if (status === 'Clear') {
    status_gif.src = ('https://media.giphy.com/media/izijkWI2KBt0k/giphy.gif');
  } else if (status === 'Drizzle') {
    status_gif.src = ('https://media.giphy.com/media/R761lRtHcXuRQgF1Pf/giphy.gif');
  } else if (status === 'Rain') {
    status_gif.src = ('https://media.giphy.com/media/xUOwGoNa2uX6M170d2/giphy.gif');
  } else if (status === 'Snow') {
    status_gif.src = ('https://media.giphy.com/media/tIHktzgRi8yjIplFVI/giphy.gif');
  }
}