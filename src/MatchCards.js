const MatchedNames = (props) => {
  const { tarot, matchNames } = props

  return (
    <>
      {tarot ? (
        <div className="matchCardsButton">
          <img
            onClick={() => matchNames(tarot)}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F06cb28af-a15c-45d3-b1b6-fcbc1910e0c3%2Fdbwk3sn-1ad1083a-5b15-4f77-af59-66dc07024a73.jpg%2Fv1%2Ffill%2Fw_739%2Ch_1081%2Cq_70%2Cstrp%2Fback_card_yugioh_hd_by_yugiohoricabr_dbwk3sn-pre.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNDk2IiwicGF0aCI6IlwvZlwvMDZjYjI4YWYtYTE1Yy00NWQzLWIxYjYtZmNiYzE5MTBlMGMzXC9kYndrM3NuLTFhZDEwODNhLTViMTUtNGY3Ny1hZjU5LTY2ZGMwNzAyNGE3My5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XJtjNGRr9iMvGwdgQrDXdM-Dvd3XyjoJv6YnObYQzq4&f=1&nofb=1"
            alt="shuffle cards"
          />
        </div>
      ) : null}
    </>
  )
}

export default MatchedNames
