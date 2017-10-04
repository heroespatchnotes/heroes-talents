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
  "name": "Malthael",
  "role": "Assassin",
  "type": "Melee",
  "releaseDate": "2017-06-13",
  "abilities": {
    "Malthael": [
      {
        "name": "Soul Rip",
        "description": "Extract the souls of nearby enemies afflicted by Reaper's Mark, dealing 100 (+4% per level) damage and healing Malthael for 44 per target hit. Heroic targets heal Malthael for an additional 3% of the Hero's maximum Health.",
        "hotkey": "Q",
        "abilityId": "Malthael|Q1",
        "cooldown": 2,
        "manaCost": "20"
      },
      ...
      {
        "name": "Tormented Souls",
        "description": "Gain 10 Armor and unleash a torrent of souls, continually applying Reaper's Mark to nearby enemies for 4 seconds.",
        "hotkey": "R",
        "abilityId": "Malthael|R1",
        "cooldown": 100,
        "manaCost": "100"
      },
      ...
      {
        "name": "Reaper's Mark",
        "description": "Basic Attacks afflict non-Structure targets with Reaper's Mark for 4 seconds.  Marked enemies are revealed and take damage equal to 2.25% of their maximum Health every 1 second.",
        "trait": true,
        "abilityId": "Malthael|D1"
      }
    ]
  },
  "talents": {
    "1": [
      {
        "tooltipId": "MalthaelDeathsReach",
        "name": "Death's Reach",
        "description": "Increase Wraith Strike's range by 35%.",
        "icon": "storm_ui_icon_malthael_wraithstrike.png",
        "sort": 1,
        "abilityId": "Malthael|W1"
      },
      {
        "tooltipId": "MalthaelOnAPaleHorse",
        "name": "On a Pale Horse",
        "description": "Gain an additional 20% Movement Speed while mounted.",
        "icon": "storm_ui_icon_malthael_onpalehorse.png",
        "sort": 2,
        "abilityId": "Malthael|Passive"
      },
      {
        "tooltipId": "MalthaelFearTheReaper",
        "name": "Fear the Reaper",
        "description": "Activate to increase Movement Speed by 25% and pass through other units for 4 seconds.",
        "icon": "storm_ui_icon_malthael_fearthereaper.png",
        "sort": 3,
        "abilityId": "Malthael|Active",
        "cooldown": 25
      }
    ],
    "4": [
    ...
    ]
    ...
}
```

### Notes on key/value pairs

* `shortName` is the hero's name with periods, dashes, apostrophes, spaces, and capitalization removed; it is currently used as the name of a hero's JSON file
* `manaCost` is a string due to several Heroes (Azmodan, Arthas, etc.) having channeled abilities with per-second mana costs
* `abilityId` can be used to link a talent to its related ability.
    * Talents that create a new ability will have `abilityId` of `HeroName|Active`.  Ex: Fear the Reaper (seen above), Bolt of the Storm
    * Talents granting changes to Basic Attacks or other passive effects will have `abilityId` of `HeroName|Passive`.  Ex: On a Pale Horse (above), Burning Rage, Executioner
* `sort` indicates the order of talents on that level/tier
* `icon` is the image name for the talent from game files

### Resources

* Several values are pulled directly from game files using an altered version of [heroesinfo from HotsData](https://github.com/hotsdata/heroesinfo)
* Most damage and scaling numbers are from dizzyMongoose's [Scaling Stats Google sheet](https://docs.google.com/spreadsheets/d/1QTStBbvf9o5RuJBeM0X1rHrQxd3PCOT4y4li3Mwu9jY/pubhtml#)

### Projects using heroes-talents

* [HeroesPatchNotes.com](https://heroespatchnotes.com)

## Heroes

<a class="img-wrap" href="hero/abathur.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/abathur.png" />
  <span>Abathur</span>
</a>
<a class="img-wrap" href="hero/alarak.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/alarak.png" />
  <span>Alarak</span>
</a>
<a class="img-wrap" href="hero/ana.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/ana.png" />
  <span>Ana</span>
</a>
<a class="img-wrap" href="hero/anubarak.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/anubarak.png" />
  <span>Anub'arak</span>
</a>
<a class="img-wrap" href="hero/artanis.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/artanis.png" />
  <span>Artanis</span>
</a>
<a class="img-wrap" href="hero/arthas.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/arthas.png" />
  <span>Arthas</span>
</a>
<a class="img-wrap" href="hero/auriel.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/auriel.png" />
  <span>Auriel</span>
</a>
<a class="img-wrap" href="hero/azmodan.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/azmodan.png" />
  <span>Azmodan</span>
</a>
<a class="img-wrap" href="hero/brightwing.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/brightwing.png" />
  <span>Brightwing</span>
</a>
<a class="img-wrap" href="hero/thebutcher.json">
  <img class="img-rounded" src="images/heroes/butcher.png" />
  <span>The Butcher</span>
</a>
<a class="img-wrap" href="hero/cassia.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/cassia.png" />
  <span>Cassia</span>
</a>
<a class="img-wrap" href="hero/chen.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/chen.png" />
  <span>Chen</span>
</a>
<a class="img-wrap" href="hero/cho.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/cho.png" />
  <span>Cho</span>
</a>
<a class="img-wrap" href="hero/chromie.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/chromie.png" />
  <span>Chromie</span>
</a>
<a class="img-wrap" href="hero/dehaka.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/dehaka.png" />
  <span>Dehaka</span>
</a>
<a class="img-wrap" href="hero/diablo.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/diablo.png" />
  <span>Diablo</span>
</a>
<a class="img-wrap" href="hero/dva.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/dva.png" />
  <span>D.Va</span>
</a>
<a class="img-wrap" href="hero/etc.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/etc.png" />
  <span>E.T.C.</span>
</a>
<a class="img-wrap" href="hero/falstad.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/falstad.png" />
  <span>Falstad</span>
</a>
<a class="img-wrap" href="hero/gall.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/gall.png" />
  <span>Gall</span>
</a>
<a class="img-wrap" href="hero/garrosh.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/garrosh.png" />
  <span>Garrosh</span>
</a>
<a class="img-wrap" href="hero/gazlowe.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/gazlowe.png" />
  <span>Gazlowe</span>
</a>
<a class="img-wrap" href="hero/genji.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/genji.png" />
  <span>Genji</span>
</a>
<a class="img-wrap" href="hero/greymane.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/greymane.png" />
  <span>Greymane</span>
</a>
<a class="img-wrap" href="hero/guldan.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/guldan.png" />
  <span>Gul'dan</span>
</a>
<a class="img-wrap" href="hero/illidan.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/illidan.png" />
  <span>Illidan</span>
</a>
<a class="img-wrap" href="hero/jaina.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/jaina.png" />
  <span>Jaina</span>
</a>
<a class="img-wrap" href="hero/johanna.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/johanna.png" />
  <span>Johanna</span>
</a>
<a class="img-wrap" href="hero/kaelthas.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/kaelthas.png" />
  <span>Kael'thas</span>
</a>
<a class="img-wrap" href="hero/kelthuzad.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/kelthuzad.png" />
  <span>Kel'Thuzad</span>
</a>
<a class="img-wrap" href="hero/kerrigan.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/kerrigan.png" />
  <span>Kerrigan</span>
</a>
<a class="img-wrap" href="hero/kharazim.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/kharazim.png" />
  <span>Kharazim</span>
</a>
<a class="img-wrap" href="hero/leoric.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/leoric.png" />
  <span>Leoric</span>
</a>
<a class="img-wrap" href="hero/lili.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/lili.png" />
  <span>Li Li</span>
</a>
<a class="img-wrap" href="hero/liming.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/liming.png" />
  <span>Li-Ming</span>
</a>
<a class="img-wrap" href="hero/thelostvikings.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/thelostvikings.png" />
  <span>The Lost Vikings</span>
</a>
<a class="img-wrap" href="hero/ltmorales.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/ltmorales.png" />
  <span>Lt. Morales</span>
</a>
<a class="img-wrap" href="hero/lucio.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/lucio.png" />
  <span>Lucio</span>
</a>
<a class="img-wrap" href="hero/lunara.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/lunara.png" />
  <span>Lunara</span>
</a>
<a class="img-wrap" href="hero/malfurion.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/malfurion.png" />
  <span>Malfurion</span>
</a>
<a class="img-wrap" href="hero/malthael.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/malthael.png" />
  <span>Malthael</span>
</a>
<a class="img-wrap" href="hero/medivh.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/medivh.png" />
  <span>Medivh</span>
</a>
<a class="img-wrap" href="hero/muradin.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/muradin.png" />
  <span>Muradin</span>
</a>
<a class="img-wrap" href="hero/murky.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/murky.png" />
  <span>Murky</span>
</a>
<a class="img-wrap" href="hero/nazeebo.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/nazeebo.png" />
  <span>Nazeebo</span>
</a>
<a class="img-wrap" href="hero/nova.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/nova.png" />
  <span>Nova</span>
</a>
<a class="img-wrap" href="hero/probius.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/probius.png" />
  <span>Probius</span>
</a>
<a class="img-wrap" href="hero/ragnaros.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/ragnaros.png" />
  <span>Ragnaros</span>
</a>
<a class="img-wrap" href="hero/raynor.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/raynor.png" />
  <span>Raynor</span>
</a>
<a class="img-wrap" href="hero/rehgar.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/rehgar.png" />
  <span>Rehgar</span>
</a>
<a class="img-wrap" href="hero/rexxar.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/rexxar.png" />
  <span>Rexxar</span>
</a>
<a class="img-wrap" href="hero/samuro.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/samuro.png" />
  <span>Samuro</span>
</a>
<a class="img-wrap" href="hero/sgthammer.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/sgthammer.png" />
  <span>Sgt. Hammer</span>
</a>
<a class="img-wrap" href="hero/sonya.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/sonya.png" />
  <span>Sonya</span>
</a>
<a class="img-wrap" href="hero/stitches.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/stitches.png" />
  <span>Stitches</span>
</a>
<a class="img-wrap" href="hero/stukov.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/stukov.png" />
  <span>Stukov</span>
</a>
<a class="img-wrap" href="hero/sylvanas.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/sylvanas.png" />
  <span>Sylvanas</span>
</a>
<a class="img-wrap" href="hero/tassadar.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/tassadar.png" />
  <span>Tassadar</span>
</a>
<a class="img-wrap" href="hero/thrall.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/thrall.png" />
  <span>Thrall</span>
</a>
<a class="img-wrap" href="hero/tracer.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/tracer.png" />
  <span>Tracer</span>
</a>
<a class="img-wrap" href="hero/tychus.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/tychus.png" />
  <span>Tychus</span>
</a>
<a class="img-wrap" href="hero/tyrael.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/tyrael.png" />
  <span>Tyrael</span>
</a>
<a class="img-wrap" href="hero/tyrande.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/tyrande.png" />
  <span>Tyrande</span>
</a>
<a class="img-wrap" href="hero/uther.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/uther.png" />
  <span>Uther</span>
</a>
<a class="img-wrap" href="hero/valeera.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/valeera.png" />
  <span>Valeera</span>
</a>
<a class="img-wrap" href="hero/valla.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/valla.png" />
  <span>Valla</span>
</a>
<a class="img-wrap" href="hero/varian.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/varian.png" />
  <span>Varian</span>
</a>
<a class="img-wrap" href="hero/xul.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/xul.png" />
  <span>Xul</span>
</a>
<a class="img-wrap" href="hero/zagara.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/zagara.png" />
  <span>Zagara</span>
</a>
<a class="img-wrap" href="hero/zarya.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/zarya.png" />
  <span>Zarya</span>
</a>
<a class="img-wrap" href="hero/zeratul.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/zeratul.png" />
  <span>Zeratul</span>
</a>
