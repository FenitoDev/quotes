import quotes from './quotes.json'

export default function(req, res) {
    const authors = quotes.map(({author})=>author)
    
    res.json([...new Set(authors)])
}
