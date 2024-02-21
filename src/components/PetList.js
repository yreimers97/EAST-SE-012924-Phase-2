function PetList({ pets }) {
    const petComponents = Pets.map(pet => {
        return <Pet key={pet.id} />
    })
    pets.map(pet => {
        return <li className="pet">{pet.name}</li>
    })
    return (
        <ul className="pet-list">{petComponents}</ul>
        )
}

export default PetList