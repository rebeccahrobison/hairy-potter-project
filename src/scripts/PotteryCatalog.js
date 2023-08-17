let potteryArray = []

export const toSellOrNotToSell = (piece) => {
    
    if (piece.cracked === false && piece.weight >= 6) {
        piece.price = 40
        potteryArray.push(piece)
        return piece
    } else if (piece.cracked === false && piece.weight < 6) {
        piece.price = 20
        potteryArray.push(piece)
        return piece
    } else {
        return piece
    }
}

export const usePottery = () => {
    return potteryArray.map(potteryArray => ({...potteryArray}))
}