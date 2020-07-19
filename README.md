# Hero Talents & Abilities

> Talent? Hah. That seems generous.
>
> --Raven Lord

<a href="#heroes" class="btn-heroes">Jump to Heroes</a>

Example:

```javascript
{
  "id": "68",
  "shortName": "malthael",
  "attributeId": "MALT",
  "name": "Malthael",
  "icon": "malthael.png",
  "role": "Assassin",
  "type": "Melee",
  "releaseDate": "2017-06-13",
  "abilities": {
    "Malthael": [
      {
        "name": "Soul Rip",
        "description": "Extract the souls of nearby enemies afflicted by Reaper's Mark, dealing 100 (+4% per level) damage and healing Malthael for 25 (+4% per level) per target hit. Heroic targets heal Malthael for an additional 4% of the Hero's maximum Health.",
        "hotkey": "Q",
        "abilityId": "Malthael|Q1",
        "cooldown": 2,
        "manaCost": 25,
        "icon": "storm_ui_icon_malthael_soulrip.png",
        "type": "basic"
      },
      ...
      {
        "name": "Tormented Souls",
        "description": "Unleash a torrent of souls, continually applying Reaper's Mark to nearby enemies for 4 seconds.",
        "hotkey": "R",
        "abilityId": "Malthael|R1",
        "cooldown": 80,
        "manaCost": 100,
        "icon": "storm_ui_icon_malthael_tormentedsoul.png",
        "type": "heroic"
      },
      ...
      {
        "name": "Reaper's Mark",
        "description": "Basic Attacks cleave in an area in front of Malthael and afflict non-Structure targets with Reaper's Mark for 4 seconds.  Marked enemies are revealed and take damage equal to 1.75% of their maximum Health every 1 second.",
        "trait": true,
        "abilityId": "Malthael|D1",
        "icon": "storm_ui_icon_malthael_reapersmark.png",
        "type": "trait"
      }
    ]
  },
  "talents": {
    "1": [
      {
        "tooltipId": "MalthaelDeathsReach",
        "talentTreeId": "MalthaelDeathsReach",
        "name": "Death's Reach",
        "description": "Increase Wraith Strike's range by 35%.",
        "icon": "storm_ui_icon_malthael_wraithstrike.png",
        "type": "W",
        "sort": 1,
        "abilityId": "Malthael|W1",
        "abilityLinks": [
          "Malthael|W1"
        ]
      },
      {
        "tooltipId": "MalthaelOnAPaleHorse",
        "talentTreeId": "MalthaelOnAPaleHorse",
        "name": "On a Pale Horse",
        "description": "Gain an additional 20% Movement Speed while mounted.",
        "icon": "storm_ui_icon_malthael_onpalehorse.png",
        "type": "Passive",
        "sort": 2,
        "abilityId": "_stormhero|Z1",
        "abilityLinks": [
          "_stormhero|Z1"
        ]
      },
      {
        "tooltipId": "MalthaelFearTheReaper",
        "talentTreeId": "MalthaelFearTheReaper",
        "name": "Fear the Reaper",
        "description": "Activate to increase Movement Speed by 25% and pass through other units for 4 seconds.",
        "icon": "storm_ui_icon_malthael_fearthereaper.png",
        "type": "Active",
        "sort": 3,
        "cooldown": 25,
        "abilityId": "Malthael|Active"
      }
    ],
    "4": [
    ...
    ]
    ...
}
```

### Notes on key/value pairs

* `shortName` is the hero's name with periods, dashes, apostrophes, spaces, and capitalization removed; it is currently used as the name of a hero's JSON file and image
* `manaCost` is a string due to several Heroes (Azmodan, Arthas, etc.) having channeled abilities with per-second mana costs
* `abilityId` can be used to link a talent to its related ability.
    * Talents that create a new ability will have `abilityId` of `HeroName|Active`.  Ex: Fear the Reaper (seen above), Bolt of the Storm
    * Talents granting changes to Basic Attacks or other passive effects will have `abilityId` of `HeroName|Passive`.  Ex: On a Pale Horse (above), Burning Rage, Executioner
* `talentTreeId` is the name of the talent as used in replay files
* `sort` indicates the order of talents on that level/tier
* `icon` is the image name for the talent from game files

### Game data

* **heroes/** and **images/** contain curated versions of the game data and icons, prepared by [heroes-convert](https://github.com/tattersoftware/heroes-convert)
* Unprocessed versions of the parsed game data is hosted at [heroes-data](https://github.com/HeroesToolChest/heroes-data)
* Uncompressed versions of the icons are hosted at [heroes-images](https://github.com/HeroesToolChest/heroes-images)
* Game data extractions for both of the repos above are acquired using koliva8245's [HeroesDataParser](https://github.com/HeroesToolChest/HeroesDataParser)

See the [Contributing docs](CONTRIBUTING.md) for more information on our process.

### Projects using heroes-talents

* [HeroesPatchNotes.com](https://heroespatchnotes.com)
* [HeroesInfoBot](https://www.reddit.com/r/heroesofthestorm/comments/6zwyfw/heroesinfobot_abilities_talent_tiers_cooldowns/) on reddit's [/r/heroesofthestorm](https://www.reddit.com/r/heroesofthestorm/)
* [HotsApi](http://hotsapi.net/docs)
* [Hots-Info-Bot](https://discordbots.org/bot/407735948667912214) discord chatbot

### Want to use this in your Node.js project?

`npm install --save git+https://git@github.com/heroespatchnotes/heroes-talents.git`

**heroes-talents** includes basic support for loading hero data into your project. See
[dist/test.js](dist/test.js) for an example, or [dist/index.js](dist/index.js) for the source.

```javascript
const HeroesTalents = require('heroes-talents')

async function test() {
  try {
    const heroes = await HeroesTalents.loadHeroJSONFiles()
    const favoriteHero = heroes.alarak
    console.log(`My favorite hero is ${favoriteHero.name}. He is an ${favoriteHero.role}.`)
  } catch(err) {
    console.log(err)
  }
}
```

## Heroes

<a class="img-wrap" href="hero/abathur.json">
  <img class="img-rounded" src="images/heroes/abathur.png" />
  <span>Abathur</span>
</a>
<a class="img-wrap" href="hero/alarak.json">
  <img class="img-rounded" src="images/heroes/alarak.png" />
  <span>Alarak</span>
</a>
<a class="img-wrap" href="hero/alexstrasza.json">
  <img class="img-rounded" src="images/heroes/alexstrasza.png" />
  <span>Alexstrasza</span>
</a>
<a class="img-wrap" href="hero/ana.json">
  <img class="img-rounded" src="images/heroes/ana.png" />
  <span>Ana</span>
</a>
<a class="img-wrap" href="hero/anduin.json">
  <img class="img-rounded" src="images/heroes/anduin.png" />
  <span>Anduin</span>
</a>
<a class="img-wrap" href="hero/anubarak.json">
  <img class="img-rounded" src="images/heroes/anubarak.png" />
  <span>Anub'arak</span>
</a>
<a class="img-wrap" href="hero/artanis.json">
  <img class="img-rounded" src="images/heroes/artanis.png" />
  <span>Artanis</span>
</a>
<a class="img-wrap" href="hero/arthas.json">
  <img class="img-rounded" src="images/heroes/arthas.png" />
  <span>Arthas</span>
</a>
<a class="img-wrap" href="hero/auriel.json">
  <img class="img-rounded" src="images/heroes/auriel.png" />
  <span>Auriel</span>
</a>
<a class="img-wrap" href="hero/azmodan.json">
  <img class="img-rounded" src="images/heroes/azmodan.png" />
  <span>Azmodan</span>
</a>
<a class="img-wrap" href="hero/blaze.json">
  <img class="img-rounded" src="images/heroes/blaze.png" />
  <span>Blaze</span>
</a>
<a class="img-wrap" href="hero/brightwing.json">
  <img class="img-rounded" src="images/heroes/brightwing.png" />
  <span>Brightwing</span>
</a>
<a class="img-wrap" href="hero/thebutcher.json">
  <img class="img-rounded" src="images/heroes/thebutcher.png" />
  <span>The Butcher</span>
</a>
<a class="img-wrap" href="hero/cassia.json">
  <img class="img-rounded" src="images/heroes/cassia.png" />
  <span>Cassia</span>
</a>
<a class="img-wrap" href="hero/chen.json">
  <img class="img-rounded" src="images/heroes/chen.png" />
  <span>Chen</span>
</a>
<a class="img-wrap" href="hero/chogall.json">
  <img class="img-rounded" src="images/heroes/chogall.png" />
  <span>Cho</span>
</a>
<a class="img-wrap" href="hero/chromie.json">
  <img class="img-rounded" src="images/heroes/chromie.png" />
  <span>Chromie</span>
</a>
<a class="img-wrap" href="hero/deathwing.json">
  <img class="img-rounded" src="images/heroes/deathwing.png" />
  <span>Deathwing</span>
</a>
<a class="img-wrap" href="hero/deckard.json">
  <img class="img-rounded" src="images/heroes/deckard.png" />
  <span>Deckard</span>
</a>
<a class="img-wrap" href="hero/dehaka.json">
  <img class="img-rounded" src="images/heroes/dehaka.png" />
  <span>Dehaka</span>
</a>
<a class="img-wrap" href="hero/diablo.json">
  <img class="img-rounded" src="images/heroes/diablo.png" />
  <span>Diablo</span>
</a>
<a class="img-wrap" href="hero/dva.json">
  <img class="img-rounded" src="images/heroes/dva.png" />
  <span>D.Va</span>
</a>
<a class="img-wrap" href="hero/etc.json">
  <img class="img-rounded" src="images/heroes/etc.png" />
  <span>E.T.C.</span>
</a>
<a class="img-wrap" href="hero/falstad.json">
  <img class="img-rounded" src="images/heroes/falstad.png" />
  <span>Falstad</span>
</a>
<a class="img-wrap" href="hero/fenix.json">
  <img class="img-rounded" src="images/heroes/fenix.png" />
  <span>Fenix</span>
</a>
<a class="img-wrap" href="hero/gall.json">
  <img class="img-rounded" src="images/heroes/gall.png" />
  <span>Gall</span>
</a>
<a class="img-wrap" href="hero/garrosh.json">
  <img class="img-rounded" src="images/heroes/garrosh.png" />
  <span>Garrosh</span>
</a>
<a class="img-wrap" href="hero/gazlowe.json">
  <img class="img-rounded" src="images/heroes/gazlowe.png" />
  <span>Gazlowe</span>
</a>
<a class="img-wrap" href="hero/genji.json">
  <img class="img-rounded" src="images/heroes/genji.png" />
  <span>Genji</span>
</a>
<a class="img-wrap" href="hero/greymane.json">
  <img class="img-rounded" src="images/heroes/greymane.png" />
  <span>Greymane</span>
</a>
<a class="img-wrap" href="hero/guldan.json">
  <img class="img-rounded" src="images/heroes/guldan.png" />
  <span>Gul'dan</span>
</a>
<a class="img-wrap" href="hero/hanzo.json">
  <img class="img-rounded" src="images/heroes/hanzo.png" />
  <span>Hanzo</span>
</a>
<a class="img-wrap" href="hero/illidan.json">
  <img class="img-rounded" src="images/heroes/illidan.png" />
  <span>Illidan</span>
</a>
<a class="img-wrap" href="hero/imperius.json">
  <img class="img-rounded" src="images/heroes/imperius.png" />
  <span>Imperius</span>
</a>
<a class="img-wrap" href="hero/jaina.json">
  <img class="img-rounded" src="images/heroes/jaina.png" />
  <span>Jaina</span>
</a>
<a class="img-wrap" href="hero/johanna.json">
  <img class="img-rounded" src="images/heroes/johanna.png" />
  <span>Johanna</span>
</a>
<a class="img-wrap" href="hero/junkrat.json">
  <img class="img-rounded" src="images/heroes/junkrat.png" />
  <span>Junkrat</span>
</a>
<a class="img-wrap" href="hero/kaelthas.json">
  <img class="img-rounded" src="images/heroes/kaelthas.png" />
  <span>Kael'thas</span>
</a>
<a class="img-wrap" href="hero/kelthuzad.json">
  <img class="img-rounded" src="images/heroes/kelthuzad.png" />
  <span>Kel'Thuzad</span>
</a>
<a class="img-wrap" href="hero/kerrigan.json">
  <img class="img-rounded" src="images/heroes/kerrigan.png" />
  <span>Kerrigan</span>
</a>
<a class="img-wrap" href="hero/kharazim.json">
  <img class="img-rounded" src="images/heroes/kharazim.png" />
  <span>Kharazim</span>
</a>
<a class="img-wrap" href="hero/leoric.json">
  <img class="img-rounded" src="images/heroes/leoric.png" />
  <span>Leoric</span>
</a>
<a class="img-wrap" href="hero/lili.json">
  <img class="img-rounded" src="images/heroes/lili.png" />
  <span>Li Li</span>
</a>
<a class="img-wrap" href="hero/liming.json">
  <img class="img-rounded" src="images/heroes/liming.png" />
  <span>Li-Ming</span>
</a>
<a class="img-wrap" href="hero/lostvikings.json">
  <img class="img-rounded" src="images/heroes/lostvikings.png" />
  <span>The Lost Vikings</span>
</a>
<a class="img-wrap" href="hero/ltmorales.json">
  <img class="img-rounded" src="images/heroes/ltmorales.png" />
  <span>Lt. Morales</span>
</a>
<a class="img-wrap" href="hero/lucio.json">
  <img class="img-rounded" src="images/heroes/lucio.png" />
  <span>Lúcio</span>
</a>
<a class="img-wrap" href="hero/lunara.json">
  <img class="img-rounded" src="images/heroes/lunara.png" />
  <span>Lunara</span>
</a>
<a class="img-wrap" href="hero/maiev.json">
  <img class="img-rounded" src="images/heroes/maiev.png" />
  <span>Maiev</span>
</a>
<a class="img-wrap" href="hero/malfurion.json">
  <img class="img-rounded" src="images/heroes/malfurion.png" />
  <span>Malfurion</span>
</a>
<a class="img-wrap" href="hero/malganis.json">
  <img class="img-rounded" src="images/heroes/malganis.png" />
  <span>Mal'Ganis</span>
</a>
<a class="img-wrap" href="hero/malthael.json">
  <img class="img-rounded" src="images/heroes/malthael.png" />
  <span>Malthael</span>
</a>
<a class="img-wrap" href="hero/medivh.json">
  <img class="img-rounded" src="images/heroes/medivh.png" />
  <span>Medivh</span>
</a>
<a class="img-wrap" href="hero/mei.json">
  <img class="img-rounded" src="images/heroes/mei.png" />
  <span>Mei</span>
</a>
<a class="img-wrap" href="hero/mephisto.json">
  <img class="img-rounded" src="images/heroes/mephisto.png" />
  <span>Mephisto</span>
</a>
<a class="img-wrap" href="hero/muradin.json">
  <img class="img-rounded" src="images/heroes/muradin.png" />
  <span>Muradin</span>
</a>
<a class="img-wrap" href="hero/murky.json">
  <img class="img-rounded" src="images/heroes/murky.png" />
  <span>Murky</span>
</a>
<a class="img-wrap" href="hero/nazeebo.json">
  <img class="img-rounded" src="images/heroes/nazeebo.png" />
  <span>Nazeebo</span>
</a>
<a class="img-wrap" href="hero/nova.json">
  <img class="img-rounded" src="images/heroes/nova.png" />
  <span>Nova</span>
</a>
<a class="img-wrap" href="hero/orphea.json">
  <img class="img-rounded" src="images/heroes/orphea.png" />
  <span>Orphea</span>
</a>
<a class="img-wrap" href="hero/probius.json">
  <img class="img-rounded" src="images/heroes/probius.png" />
  <span>Probius</span>
</a>
<a class="img-wrap" href="hero/qhira.json">
  <img class="img-rounded" src="images/heroes/qhira.png" />
  <span>Qhira</span>
</a>
<a class="img-wrap" href="hero/ragnaros.json">
  <img class="img-rounded" src="images/heroes/ragnaros.png" />
  <span>Ragnaros</span>
</a>
<a class="img-wrap" href="hero/raynor.json">
  <img class="img-rounded" src="images/heroes/raynor.png" />
  <span>Raynor</span>
</a>
<a class="img-wrap" href="hero/rehgar.json">
  <img class="img-rounded" src="images/heroes/rehgar.png" />
  <span>Rehgar</span>
</a>
<a class="img-wrap" href="hero/rexxar.json">
  <img class="img-rounded" src="images/heroes/rexxar.png" />
  <span>Rexxar</span>
</a>
<a class="img-wrap" href="hero/samuro.json">
  <img class="img-rounded" src="images/heroes/samuro.png" />
  <span>Samuro</span>
</a>
<a class="img-wrap" href="hero/sgthammer.json">
  <img class="img-rounded" src="images/heroes/sgthammer.png" />
  <span>Sgt. Hammer</span>
</a>
<a class="img-wrap" href="hero/sonya.json">
  <img class="img-rounded" src="images/heroes/sonya.png" />
  <span>Sonya</span>
</a>
<a class="img-wrap" href="hero/stitches.json">
  <img class="img-rounded" src="images/heroes/stitches.png" />
  <span>Stitches</span>
</a>
<a class="img-wrap" href="hero/stukov.json">
  <img class="img-rounded" src="images/heroes/stukov.png" />
  <span>Stukov</span>
</a>
<a class="img-wrap" href="hero/sylvanas.json">
  <img class="img-rounded" src="images/heroes/sylvanas.png" />
  <span>Sylvanas</span>
</a>
<a class="img-wrap" href="hero/tassadar.json">
  <img class="img-rounded" src="images/heroes/tassadar.png" />
  <span>Tassadar</span>
</a>
<a class="img-wrap" href="hero/thrall.json">
  <img class="img-rounded" src="images/heroes/thrall.png" />
  <span>Thrall</span>
</a>
<a class="img-wrap" href="hero/tracer.json">
  <img class="img-rounded" src="images/heroes/tracer.png" />
  <span>Tracer</span>
</a>
<a class="img-wrap" href="hero/tychus.json">
  <img class="img-rounded" src="images/heroes/tychus.png" />
  <span>Tychus</span>
</a>
<a class="img-wrap" href="hero/tyrael.json">
  <img class="img-rounded" src="images/heroes/tyrael.png" />
  <span>Tyrael</span>
</a>
<a class="img-wrap" href="hero/tyrande.json">
  <img class="img-rounded" src="images/heroes/tyrande.png" />
  <span>Tyrande</span>
</a>
<a class="img-wrap" href="hero/uther.json">
  <img class="img-rounded" src="images/heroes/uther.png" />
  <span>Uther</span>
</a>
<a class="img-wrap" href="hero/valeera.json">
  <img class="img-rounded" src="images/heroes/valeera.png" />
  <span>Valeera</span>
</a>
<a class="img-wrap" href="hero/valla.json">
  <img class="img-rounded" src="images/heroes/valla.png" />
  <span>Valla</span>
</a>
<a class="img-wrap" href="hero/varian.json">
  <img class="img-rounded" src="images/heroes/varian.png" />
  <span>Varian</span>
</a>
<a class="img-wrap" href="hero/whitemane.json">
  <img class="img-rounded" src="images/heroes/whitemane.png" />
  <span>Whitemane</span>
</a>
<a class="img-wrap" href="hero/xul.json">
  <img class="img-rounded" src="images/heroes/xul.png" />
  <span>Xul</span>
</a>
<a class="img-wrap" href="hero/yrel.json">
  <img class="img-rounded" src="images/heroes/yrel.png" />
  <span>Yrel</span>
</a>
<a class="img-wrap" href="hero/zagara.json">
  <img class="img-rounded" src="images/heroes/zagara.png" />
  <span>Zagara</span>
</a>
<a class="img-wrap" href="hero/zarya.json">
  <img class="img-rounded" src="images/heroes/zarya.png" />
  <span>Zarya</span>
</a>
<a class="img-wrap" href="hero/zeratul.json">
  <img class="img-rounded" src="images/heroes/zeratul.png" />
  <span>Zeratul</span>
</a>
<a class="img-wrap" href="hero/zuljin.json">
  <img class="img-rounded" src="images/heroes/zuljin.png" />
  <span>Zul'jin</span>
</a>
