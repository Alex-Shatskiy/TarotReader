import axios from "axios" // or CommonJS require syntax
import { useState, useEffect } from "react"
import MatchedNames from "./MatchCards"
import tarotData from "./tarot-images.json"
import TarotModal from "./TarotModal"

function TartoCards() {
  const [tarot, setTarot] = useState(null)
  const [matchedNames, setMatchedNames] = useState(null)
  const [cleared, setCleared] = useState(true)
  const [modal, setModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(async () => {
    await axios
      .get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10")
      .then((tarotCard) => {
        return setTarot(tarotCard.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [cleared])

  const matchNames = async (tarotCards) => {
    let matchedTarotNames = []
    let index = 0
    tarotData.cards.forEach((tarotCard) => {
      tarotCards.cards.forEach((card) => {
        if (card.name === tarotCard.name) {
          matchedTarotNames.push(card)
          matchedTarotNames[index].image = `/cards/${tarotCard.img}`
          index++
        }
      })
    })
    setCleared(false)
    await setMatchedNames(matchedTarotNames)
  }

  // clear setMatchedNames
  const clearMatchedNames = () => {
    setMatchedNames(null)
    if (cleared) {
      setCleared(false)
    } else {
      setCleared(true)
    }
  }
  const openModal = (card) => {
    setSelectedCard(card)
    setModal(true)
  }

  return (
    <>
      <header className="App-header">
        {matchedNames ? (
          <>
            <div className="title">
              <h4>
                This is your fate, the{" "}
                {matchedNames ? matchedNames.length : null} cards in front of
                you represent your past/present and future
              </h4>
            </div>
            <button className="button5" onClick={() => clearMatchedNames()}>
              Reshuffle
            </button>
          </>
        ) : (
          <>
            <div className="title">
              <h4>Click here to pick your fate!</h4>
            </div>
          </>
        )}
      </header>
      {cleared ? <MatchedNames tarot={tarot} matchNames={matchNames} /> : null}
      {matchedNames ? (
        <div className="container">
          {matchedNames
            ? matchedNames.map((card) => {
                return (
                  <>
                    <div className="container-card">
                      <div
                        className="container-image"
                        onClick={() => openModal(card)}
                      >
                        <img
                          className="tarot-card-photo"
                          src={card.image}
                          alt="tarot"
                        />
                      </div>
                      <div className="container-text">
                        <p>{card.name}</p>
                      </div>
                    </div>
                  </>
                )
              })
            : null}
        </div>
      ) : null}
      {modal ? (
        <TarotModal selectedCard={selectedCard} setModal={setModal} />
      ) : null}
    </>
  )
}

export default TartoCards
