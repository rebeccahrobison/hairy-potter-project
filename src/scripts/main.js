// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 5)
let platter = makePottery("platter", 2, 1)
let vase = makePottery("vase", 4, 6)
let pot = makePottery("pot", 6, 4)
let cup = makePottery("cup", 1, 4)

// console.log(mug)
// console.log(platter)
// console.log(vase)
// console.log(pot)
// console.log(cup)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2200)
let firedPlatter = firePottery(platter, 1900)
let firedVase = firePottery(vase, 2300)
let firedPot = firePottery(pot, 2100)
let firedCup = firePottery(cup, 2000)

// console.log(firedMug)
// console.log(firedPlatter)
// console.log(firedVase)
// console.log(firedPot)
// console.log(firedCup)

// Determine which ones should be sold, and their price
console.log(toSellOrNotToSell(firedMug))
toSellOrNotToSell(firedPlatter)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedPot)
toSellOrNotToSell(firedCup)

// Invoke the component function that renders the HTML list




