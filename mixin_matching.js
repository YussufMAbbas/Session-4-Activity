const speedMixin = {
    speed: 50
}
const colorMixin = {
    color: "turquoise"
}
const soundMixin = {
    sound: "chirp"
}

const car = Object.assign({}, speedMixin)
const bird = Object.assign({}, soundMixin)
const lamp = Object.assign({}, colorMixin)

console.log(car, bird, lamp)