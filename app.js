const menu=[{
  id:1,
  title:"Magii",
  category:"breakfast",
  price: 14,
  img: "photos/food1.jpg",
  desc:"definitely not a 2 minute fast food",
},
{
  id:2,
  title:"idly",
  category:"food",
  price:20,
  img:"photos/food2.jpg",
  desc:"meduwada is me ",
},
{
  id:3,
  title:"pizza",
  category:"fastfood",
  price:200,
  img:"photos/food3.jpg",
  desc:"la cheese de peperonni",
},
{ id:4,
  title:"kela bread",
  category:"breakfast",
  price:99,
  img:"photos/food4.jpg",
  desc:"bread kela cherry",

},
{
  id:5,
  title:"thai chow",
  category:"lunch",
  price:100,
  img:"photos/food5.jpg",
  desc:"lahsun combo ",
},
{
  id:6,
  title:"mitai",
  category:"sugar",
  price:20,
  img:"photos/food6.jpg",
  desc:"sugar in my blood, milk in my bones ",
}];

const sectionCenter=document.querySelector(".section-center");

const btns=document.querySelectorAll(".btn-items");


window.addEventListener("DOMContentLoaded",function(){
  displayMenuItems(menu);
})

  function displayMenuItems(menu){
  let displayMenu=menu.map(function(item){
    

    return `
      <div class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="info">
          <h4>soan-papdi</h4>
          <h4 class="price">${item.price} Rs</h4>
        </div>
        <p id="desc">${item.desc}</p>
      </div>
      `;
  });

  displayMenu=displayMenu.join("")
  sectionCenter.innerHTML=displayMenu;
}

btns.forEach(function (btn){
  btn.addEventListener("click",function(e){
    const data=e.currentTarget.dataset.id;

    const menuCategory =menu.filter(function (menu){
      //console.log(menu.category);

      if(menu.category===data){
        return menu;
      }
    });
    console.log(menuCategory);

    if(data.category==='All items'){
      displayMenuItems(menu.item);
    }else{
      displayMenuItems(menuCategory);
    }
  })

})