const quotes = [
  { quote: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { quote: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "The mind is everything. What you think you become.", author: "Buddha" },
  { quote: "An unexamined life is not worth living.", author: "Socrates" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" }
];

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return res.status(200).json(quotes[randomIndex]);
}
