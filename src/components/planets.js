import React from 'react'


// BBDD

let prodDB = [
    { id: 1, type: "telescope", prodName: "Telescopio Orion", size: "Big", price: 1000000, dprice: 780000, img: "img/1.jpg", text: "The Orion SkyQuest XT6 Classic Dobsonian Telescope Kit will open up the night sky for you and your entire family to discover. With excellent light grasp, point-and-view ease of use, and an array of super helpful included accessories, the SkyQuest XT6 Classic Dobsonian is truly one of the best beginner telescope values on the market today. We've even included some extra accessories in this kit to further enhance your viewing experience." },
    { id: 2, type: "filter", prodName: "Filtro lunar", size: "Pequeño", price: 56000, dprice: 46000, img: "img/2.jpg", text: "Filtro especial para observacion Lunar" },
    { id: 3, type: "filter", prodName: "Filtro Solar", size: "Pequeño", price: 70000, dprice: 59000, text: "Filtro especial para observacion Solar" }
]


const planets = () => {
  return (
    <div><div class="container text-center">
    <div class="row">
        <div class="col" id="PlanetChooser">
            <br></br>
            <form>
                <button class="btn btn-dark" value="mercury" name="pl1" id="pl1">Mercury</button>
                <button class="btn btn-dark" value="venus" name="pl2" id="pl2">Venus</button>
                <button class="btn btn-dark" value="earth" name="pl3" id="pl3">Earth</button>
                <button class="btn btn-dark" value="mars" name="pl4" id="pl4">Mars</button>
                <button class="btn btn-dark" value="jupiter" name="pl5" id="pl5">Jupiter</button>
                <button class="btn btn-dark" value="saturn" name="pl6" id="pl6">Saturn</button>
                <button class="btn btn-dark" value="uranus" name="pl7" id="pl7">Uranus</button>
                <button class="btn btn-dark" value="neptune" name="pl8" id="pl8">Neptune</button>
            </form>
        </div>
    </div>
</div></div>
  )
}

export default planets
