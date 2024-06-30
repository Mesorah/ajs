var agora = new Date()
var diasem = agora.getDay()

console.log(diasem)

switch(diasem) {
    case 0:
        console.log(`D`)
        break

    case 1:
        console.log(`S`)
        break

    case 2:
        console.log(`T`)
        break

    case 3:
        console.log(`Q`)
        break

    case 4:
        console.log(`QQ`)
        break

    case 5:
        console.log(`SE`)
        break

    case 6:
        console.log(`SA`)
        break

    default:
        console.log(`Dia inválido`)
        break
}