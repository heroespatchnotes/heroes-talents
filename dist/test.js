const HeroesTalents = require('./index.js')

async function test() {
  try {
    const heroes = await HeroesTalents.loadHeroJSONFiles()
    const favoriteHero = heroes.alarak
    console.log(`My favorite hero is ${favoriteHero.name}. He is an ${favoriteHero.role}.`)
  } catch(err) {
    console.log(err)
  }
}

test()
