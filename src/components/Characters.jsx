/* eslint-disable react/prop-types */

const Characters = ({characters}) => {
  return (
    <>
      <div className="characters__container--cards">
        {
          characters.results.map(character => ( 
            <div key={character.id} className="character__container--card">
              <div className="character__container--info">
                <p>{character.name}</p>
                <p>{character.species}</p>
              </div>
              <div className="character__container--image">
                <img src={character.image} alt={character.name}/>
              </div>
            </div>
          )
          )
        }
      </div>
    </>
  )
}

export default Characters