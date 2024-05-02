let num= Math.floor (Math.random()*6+1)
console.log(num)

const botn=document.getElementById("botn")
botn.addEventListener("click",novamente())

function novamente(){

switch (num) {
    case 1:
        document.getElementById("face").src="../face1.png"
        novamente()
        break
    case 2:
        document.getElementById("face").src="../face2.png"
        novamente()
        break
    case 3:
        document.getElementById("face").src="../face3.png"
        novamente()
        break
    case 4:
        document.getElementById("face").src="../face4.png"
        novamente()
        break
    case 5:
        document.getElementById("face").src="../face5.png"
        novamente()
        break
    case 6:
        document.getElementById("face").src="../face6.png"
        novamente()
        break
    default:
        break
}
}