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
        "name": "Death's Reach",
        "description": "Increase Wraith Strike's range by 35%.",
        "abilityId": "Malthael|W1"
      },
      {
        "name": "Fear the Reaper",
        "description": "Activate to increase Movement Speed by 25% and pass through other units for 4 seconds.",
        "abilityId": "Malthael|Active",
        "cooldown": 25
      },
      {
        "name": "On a Pale Horse",
        "description": "Gain an additional 20% Movement Speed while mounted.",
        "abilityId": "Malthael|Passive"
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

### Resources

* Damage and scaling numbers from dizzyMongoose's [Scaling Stats Google sheet](https://docs.google.com/spreadsheets/d/1QTStBbvf9o5RuJBeM0X1rHrQxd3PCOT4y4li3Mwu9jY/pubhtml#)

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
<a class="img-wrap" href="hero/butcher.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/butcher.png" />
  <span>The Butcher</span>
</a>
<a class="img-wrap" href="hero/cassia.json">
  <img class="img-rounded" src="https://heroespatchnotes.com/images/hero/cassia.png" />
  <span>Cassia</span>
</a>