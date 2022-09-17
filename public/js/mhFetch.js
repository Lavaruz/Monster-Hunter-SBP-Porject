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
                const armor = document.createElement('div')
                const armorName = document.createElement('p')
                const armorImg = document.createElement('img')
    
                armorName.innerHTML = weapon.name
                armorImg.src = weapon.assets.imageMale
    
                armor.classList.add('armor')
                armor.appendChild(armorImg)
                armor.appendChild(armorName)
    
                armorMain.appendChild(armor)
            });
        });
}
fetchCall()

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
        console.log('footer detected');
        gtePagination = ltPagination
        ltPagination += 10
        fetchCall()
    }
}
