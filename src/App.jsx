import {gql, useQuery} from '@apollo/client'
import Characters from './components/characters'
import { useState } from 'react'

const CharactersQuery = gql`
  query Character($page: Int){
    characters(page: $page){
      info{
        next
        prev
      }
      results{
        id
        name
        species
        image
      }
    }
  } 
`

const App = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const { data, error, loading } = useQuery(CharactersQuery, {variables: {page: pageNumber}})
  
  const prevPage = () => {
    setPageNumber(data.characters.info.prev)
  }
  const nextPage = () => {
    setPageNumber(data.characters.info.next)
  }
  
  if(error) return <span style='color: red'>{error}</span>

  return (
    <>
      <div>
        {
          loading 
          ? <div className='charging'><div className='loader'></div></div>
          : 
          <>
            <div className="principal__container--title">
              <h1>Rick and Morty Characters</h1>
            </div>
            <div className="principal__container--buttons">
              <button onClick={prevPage}>Preview</button>
              <button onClick={nextPage}>Next</button>
            </div>
            <Characters characters={data.characters}/>
          </>
        }
      </div>
    </>
  )
}

export default App
