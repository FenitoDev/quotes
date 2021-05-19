import React, {Component,useEffect, useState} from 'react';
import Button from './components/Button';
import styles from '../styles/quotes.module.css'
import useSWR, {mutate} from 'swr'

function Quotes() {
    
    const [authorState,setAuthorState] = useState('')
    const fetcher = async (url,author) => {
        console.log(author,url)
        const res = await fetch(url,{body:author,method:'POST'})
        const data = await res.json()
        return data
    }
    useEffect(() => {
        mutate(['/api/quotes',authorState])
    }, [authorState])
    const {data:{text,author}={},error} = useSWR(['/api/quotes',authorState],fetcher)
    const {data:authorList=[],err} = useSWR('/api/quotes/authorsquote',fetcher)
    /* useEffect(() => {
        fetch('https://type.fit/api/quotes').then((q=>q.json()))
        .then((data) => {
            const randIndex = Math.floor(Math.random() * data.length)
            setQuote(data[randIndex].text);
            setAuthor(data[randIndex].author);
        }           
        )
        return () => {            
        }
    }, []) */
    
    const nextQuoteButton = () => {
        mutate(['/api/quotes',authorState])
    }
        const handleChange = (e) => {
            setAuthorState(e.target.value)
        }
    return (
        <div className={styles.App} id="quote-box">
            <select value={authorState} onChange={handleChange}>
                {authorList.map((author)=>{
                    return (
                        <option key={author} value={author}>{author}</option>
                    )
                })}
            </select>
            <div className={styles.box}>
            <div className={styles.quote}>{text}</div>
            <div className={styles.author}>-{author}</div>
            <Button buttonName="Next Quote" clickHandler={nextQuoteButton}/>
            </div>
        </div>

    );
}

export default Quotes;