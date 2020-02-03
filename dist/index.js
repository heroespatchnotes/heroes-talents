const util = require('util')
const fs = require('fs')
const path = require('path')
const exec = util.promisify(require('child_process').exec)
const writeFileAsync = util.promisify(fs.writeFile)
const readdirAsync = util.promisify(fs.readdir)
const readFileAsync = util.promisify(fs.readFile)
const copyFileAsync = util.promisify(fs.copyFile)

const heroesDirectory = path.resolve(__dirname, '../hero')

class HeroesTalents {
  static loadHeroJSONFiles() {
    return new Promise(async (resolve, reject)=>{
      try {
        let toReturn = {}
        const dirs = await readdirAsync(heroesDirectory)
        for (let i = 0; i < dirs.length; i++) {
          const dirPath = `${heroesDirectory}/${dirs[i]}`
          let jsonFile = await readFileAsync(dirPath)
          jsonFile = JSON.parse(jsonFile)
          toReturn[jsonFile.name] = jsonFile
        }
        resolve(toReturn)
      } catch(err) {
        console.log(err)
        reject(err)
      }
    })
  }
}

module.exports = HeroesTalents
