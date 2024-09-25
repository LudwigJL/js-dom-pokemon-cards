const allPokemons = document.querySelector(".cards")

function render(){
    allPokemons.innerHTML = ''

    for(let i = 0; i < data.length; i++){
        const pokemon = data[i]
        const pokemonLi = document.createElement('li')
        pokemonLi.className = 'card'
        pokemonLi.style.listStyle = 'none'
        pokemonLi.addEventListener ('click', () => {
            if(setImg > 0){
                image.src = frontImg
                setImg--
            } else{
                image.src = backImg
                setImg++ }
        })

        pokemonLi.setAttribute('id', pokemon.id)

        let title = document.createElement('h2')
        title.className = 'card--title'
        title.innerHTML = pokemon.name

        var cardImage = Array(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonLi.id}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonLi.id}.png`)

        let image = document.createElement('img')
        let frontImg = cardImage[0]
        let backImg = cardImage[1]
        var setImg = 0

        image.src = cardImage[0]
        image.className = 'card--img'
        image.width = 256       

        //Stats
        const attributes = document.createElement('ul')
        attributes.className = 'card--text'
        attributes.style.listStyle = 'none'

        let healthPoints = document.createElement('li')
        healthPoints.innerHTML = 'HP: ' + pokemon.stats[0].base_stat

        let attack = document.createElement('li')
        attack.innerHTML = 'ATTACK: ' + pokemon.stats[1].base_stat

        let defense = document.createElement('li')
        defense.innerHTML = 'DEFENSE: ' + pokemon.stats[2].base_stat

        let specialAttack = document.createElement('li')
        specialAttack.innerHTML = 'SPECIAL-ATTACK: ' + pokemon.stats[3].base_stat

        let specialDefense = document.createElement('li')
        specialDefense.innerHTML = 'SPECIAL-DEFENSE: ' + pokemon.stats[4].base_stat

        let speed = document.createElement('li')
        speed.innerHTML = 'SPEED: ' + pokemon.stats[5].base_stat

        let appearanceGamesUl = document.createElement('ul')

        
        games = getGames(pokemon)
        for(let i = 0; i < games.length; i++){
            let appearanceGames = document.createElement('li')
            appearanceGames.innerHTML = games[i] + ', '
            appearanceGamesUl.appendChild(appearanceGames)
        }


        attributes.appendChild(healthPoints)
        attributes.appendChild(attack)
        attributes.appendChild(defense)
        attributes.appendChild(specialAttack)
        attributes.appendChild(specialDefense)
        attributes.appendChild(speed)
        attributes.appendChild(appearanceGamesUl)

        pokemonLi.appendChild(title)
        pokemonLi.appendChild(image)
        pokemonLi.appendChild(attributes)

        allPokemons.appendChild(pokemonLi)
    }
}

function getGames(pokemon) {
    const games = []

    for(let i = 0; i < pokemon.game_indices.length; i++){
        games.push(pokemon.game_indices[i].version.name)
    }

    return games
}

function main() {
    render()
}

main()
