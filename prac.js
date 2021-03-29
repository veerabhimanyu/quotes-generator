const array = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela ",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs ",
  "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt ",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.  -Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron ",
  "Life is what happens when you're busy making other plans.-John Lennon ",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa ",
  "When you reach the end of your rope, tie a knot in it and hang on.  -Franklin D. Roosevelt ",
  "Always remember that you are absolutely unique. Just like everyone else.-Margaret Mead ",
  "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson ",
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt ",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn.-Benjamin Franklin ",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller ",
  "It is during our darkest moments that we must focus to see the light.-Aristotle",
  "Whoever is happy will make others happy too. -Anne Frank ",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
  "You will face many defeats in life, but never let yourself be defeated.-Maya Angelou ",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela ",
  "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
  "Never let the fear of striking out keep you from playing the game. -Babe Ruth",
  "Life is either a daring adventure or nothing at all. -Helen Keller ",
  "Many of life's failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison ",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss ",
  "Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill",
  "Success usually comes to those who are too busy to be looking for it.  -Henry David Thoreau",
  "The way to get started is to quit talking and begin doing. -Walt Disney",
  "If you really look closely, most overnight successes took a long time. -Steve Jobs",
  "The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr. ",
  "I find that the harder I work, the more luck I seem to have. -Thomas Jefferson",
];
var color = [
  "#F5C5BA",
  "#BDF5BA",
  "#BAF1F5",
  "#f7cad0",
  "#fae0e4",
  "#d6e2e9",
  "#d6e2e9",
  "#c0fdff",
  "#f3c4fb",
  "#ffcbf2",
  "#d6e2e9",
  "#c0fdff",
  "#f3c4fb",
  "#ffcbf2",
];
const button = document.querySelector(".btn");
const paragraph = document.querySelector(".para");
const cards = document.querySelector(".card");
button.addEventListener("click", quotes);

function quotes() {
  var i = Math.floor(Math.random() * 30 + 1);
  paragraph.innerHTML =
    '<sup> <i class="fa fa-quote-left" aria-hidden="true"></i></sup>' +
    array[i];
  var j = Math.floor(Math.random() * 10 + 1);
  
  document.body.style.backgroundColor = color[j];
}
