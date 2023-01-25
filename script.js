let quote = document.querySelector("P");
const button = document.querySelector("button"),
  author = document.getElementById("author");

const quotes = [
  {
    quote:
      "“We cannot solve problems with the kind of thinking we employed when we came up with them.”",
    author: "— Albert Einstein",
  },
  {
    quote:
      "“Learn as if you will live forever, live like you will die tomorrow.”",
    author: "— Albert Einstein",
  },
  {
    quote:
      "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”",
    author: "— Mahatma Gandhi",
  },
  {
    quote:
      "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”",
    author: "— Eleanor Roosevelt",
  },
  {
    quote:
      "When you change your thoughts, remember to also change your world.”",
    author: "— Norman Vincent Peale",
  },
  {
    quote:
      "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest”",
    author: "— Walter Anderson",
  },
  {
    quote:
      "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”",
    author: "— Diane McLaren",
  },
  {
    quote:
      "“Success is not final; failure is not fatal: It is the courage to continue that counts.”",
    author: " —  Winston S. Churchill",
  },
  {
    quote:
      "“It is better to fail in originality than to succeed in imitation.”",
    author: "— Herman Melville",
  },

  {
    quote:
      "“The road to success and the road to failure are almost exactly the same.”",
    author: "— Colin R. Davis",
  },
  {
    quote:
      "“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”",
    author: "— Dale Carnegie",
  },
  {
    quote:
      "“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.”",
    author: "— Mister Rogers",
  },
  {
    quote:
      "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”",
    author: "— Vernon Sanders Law",
  },
  {
    quote:
      "“To know how much there is to know is the beginning of learning to live.”",
    author: "— Dorothy West",
  },
  {
    quote:
      "“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.”",
    author: "— Steve Jobs",
  },
  {
    quote:
      "“Some women choose to follow men, and some choose to follow their dreams. If you’re wondering which way to go, remember that your career will never wake up and tell you that it doesn’t love you anymore.”",
    author: "— Dorothy West",
  },
  {
    quote:
      "“If you want something said, ask a man; if you want something done, ask a woman.”",
    author: "— Margaret Thatcher",
  },

  {
    quote: "“Success usually comes to those who are too busy looking for it.”",
    author: "— Henry David Thoreau",
  },
];

function randomQuotes() {
  const newQuote = Math.floor(Math.random() * quotes.length);
  quote.style.color = `#${randomColor()}`;
  quote.innerHTML = quotes[newQuote].quote;
  author.style.color = "white";
  author.innerHTML = quotes[newQuote].author;
}

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

button.addEventListener("click", randomQuotes);
console.log(randomQuotes());

console.log(button);
console.log(randomColor());
