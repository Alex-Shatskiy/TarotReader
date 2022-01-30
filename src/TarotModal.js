const TarotModal = (props) => {
  const { setModal, selectedCard } = props

  const closeModal = (event) => {
    const modal = document.getElementById("myModal")
    if (event.target === modal) {
      setModal(false)
    }
  }

  const fait = (faits) => {
    // random number between 0 and 1
    const random = Math.random()
    console.log(random)
    if (random < 0.5) {
      return faits.meaning_up
    } else {
      return faits.meaning_rev
    }
  }

  return (
    <>
      <div className="modal display-block" id="myModal" onClick={closeModal}>
        <section className="modal-main">
          <div className="modal-content">
            <div className="modal-header">
              <h1>{selectedCard.name}</h1>
              <p>Value: {selectedCard.value} </p>
              <p>Type: {selectedCard.type}</p>
            </div>
            <div className="modal-body">
              <div className="descripton-container">
                <p>Discription:</p>
                <p className="descripton"> {selectedCard.desc}</p>
              </div>
              <div className="faits">
                <p>Fates:</p>
                <p>{fait(selectedCard)}</p>
              </div>
            </div>
            <div className="modal-img">
              <img src={selectedCard.image} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TarotModal
