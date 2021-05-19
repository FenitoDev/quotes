
import quotes from './quotes.json'

export default function(req, res) {
    const filteredQuotes = req.body ? quotes.filter(({author})=>author===req.body) : quotes
    const randIndex = Math.floor(Math.random() * filteredQuotes.length)
    res.json(filteredQuotes[randIndex])
}

