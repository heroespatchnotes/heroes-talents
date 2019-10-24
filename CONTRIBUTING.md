# Contributing

**heroes-talents** is a collaborative effort by developers who love Blizzard's **Heroes of the Storm**.
We are always glad to have help, so if you see something wrong or have a request please
do not hesitate to open an Issue.

## Pull Requests

Pull Requests are welcome, but most hero data is generated (see below) so
one-off changes will be overwritten and most of the time need to be fixed elsewhere.

If you are submitting a Pull Request for new patch data please check first that the diffs
show only the changed hero content and not formatting, order, or property changes. Pull
Requests for patches should include the full patch reference (X.XX.X.XXXXX) so a new
release can be generated and tagged appropriately.

## Tools

Hero data is extracted, parsed, and filtered using a few different tools. Anyone can use
these same tools to submit new patch data.

### [heroes-data](https://github.com/HeroesToolChest/heroes-data)

**heroes-data** is another repo in the HeroesToolChest containing pre-parsed data for each
patch from **HeroesDataParser**. This is the source of choice for pre-formatted game data.
If **heroes-data** is behind you may help provide updated patch data by following the
process outlined on their [Contributing page](https://github.com/HeroesToolChest/heroes-data/blob/master/CONTRIBUTING.md).

### [heroes-images](https://github.com/HeroesToolChest/heroes-images)

**heroes-images** is the companion repo to **heroes-data** but contains only image files
from the most recent patch.

### [heroes-convert](https://github.com/tattersoftware/heroes-convert)

**heroes-convert** is a set of classes and scripts that manipulates the parsed data from
**heroes-data** into the specific subset and format used for **heroes-talents**. If there
are hero data inconsistencies then most likely they should be addressed in that repo.
See the **heroes-convert** [Readme](https://github.com/tattersoftware/heroes-convert/blob/develop/README.md)
for details and usage.

### [HeroesDataParser](https://github.com/HeroesToolChest/HeroesDataParser)

**koliva8245** has written an awesome tool for extracting game data directly from an
installation of Heroes of the Storm. Most of the time this tool is not needed to update
**heroes-talents** because the data will be posted to **heroes-data** already, but if for
some reason you want to go back to the source of it all this is the tool.

## Process

*This is an example of creating a Pull Request for a new patch. Actual values may vary.*

```
# You get an email from GitHub that Blizzard's heroprotocol repo just updated
# Your app uses heroes-talents for its game data, so you decide to update it with the new patch info

# Fork the latest version of heroes-talents by visiting the URL and clicking "fork"
# https://github.com/heroespatchnotes/heroes-talents

# Clone the latest version of the repos
# Note: if you already have a clone you can use `git pull` in the directory
git clone https://github.com/HeroesToolChest/heroes-data.git
git clone https://github.com/HeroesToolChest/heroes-images.git
git clone https://github.com/tattersoftware/heroes-convert.git

git clone https://github.com/[YourUsername]/heroes-talents.git

# Convert the game data
./heroes-convert/src/heroes-convert ./heroes-data/heroesdata/2.48.2.76781/data/herodata_76781_localized.json ./heroesdata/2.48.2.76781/gamestrings/gamestrings_76781_enus.json

# Copy the new game data into your heroes-talents clone
cp hero/* heroes-talents/hero/

# You might want to check out what changed...
cd heroes-talents
git diff HEAD
cd ..

# Convert the ability and talent images
./heroes-convert/src/heroes-images ./heroes-images/abilitytalents

# Copy the new icons into your heroes-talents clone
cp talents/* heroes-talents/images/talents/

# Add, commit, and push the changes to your heroes-talents fork
cd heroes-talents
git add .
git commit -m "Update gamedata for patch 2.48.2.76781"
git push

# Back to the website, GitHub should have detected your update and prompt you to submit a Pull Request
# https://github.com/heroespatchnotes/heroes-talents
```
