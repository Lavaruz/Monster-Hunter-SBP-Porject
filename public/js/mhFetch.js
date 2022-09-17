const armorMain = document.querySelector('.armors-main')
let gtePagination = 0
let ltPagination = 20


function fetchCall(){
    const pParam = JSON.stringify({
        id: true,
        name:true,
        assets:true,
        defense:true
    })
    const qParam = JSON.stringify({
        id: {
            '$lt': ltPagination,
            '$gt': gtePagination
    
        },
    })
    const url = `https://mhw-db.com/armor?q=${qParam}&p=${pParam}`

    fetch(url)
        .then(response => response.json())
        .then(weapons => {
            weapons.forEach(weapon => {
                const armorLink = document.createElement('a')
                const armor = document.createElement('div')
                const armorInfo = document.createElement('div')
                const armorName = document.createElement('h4')
                const armorDef = document.createElement('p')
                const armorId = document.createElement('p')
                const armorImg = document.createElement('img')
                
                armorLink.href = '/armor/'+weapon.id
                armorName.innerHTML = weapon.name
                armorId.innerHTML = `Id: ${weapon.id}`
                armorDef.innerHTML = `<h4 class="armor-defense">Defense</h4>
                                        base: ${weapon.defense.base}<br>
                                        max: ${weapon.defense.max}`
                armorImg.src = weapon.assets.imageMale
                armorImg.width = 100
                armorImg.alt = weapon.name

                armorInfo.appendChild(armorName)
                armorInfo.appendChild(armorDef)
                armorInfo.appendChild(armorId)
    
                armor.classList.add('armor')
                armorInfo.classList.add('armor-info')
                armor.appendChild(armorInfo)
                armor.appendChild(armorImg)
    
                armorLink.appendChild(armor)
                armorMain.appendChild(armorLink)
            });
        });
}

let option = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

// INTERSECTION OBSERVER

const observer = new IntersectionObserver(handleIntersect, option)
observer.observe(document.querySelector('footer'))

function handleIntersect(entries){
    if(entries[0].isIntersecting){
        fetchCall()
        gtePagination = ltPagination
        ltPagination += 10
    }
}
