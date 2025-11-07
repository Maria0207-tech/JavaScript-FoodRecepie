let food = document.querySelector('.food');
let recepie;
let searchbtn = document.querySelector('#searchbtn');


let indian = document.querySelector('#indian');
let canadian = document.querySelector('#canadian');
let american = document.querySelector('#american');
let thai = document.querySelector('#thai');
let british = document.querySelector('#british');
let russain = document.querySelector('#russain');


const fetchdata = async (area) => {

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await api.json();

    return data.meals;
}





let showData = async (area) => {

    recepie = await fetchdata(area);
    food.innerHTML = recepie.map(meal => `

    <div classs= "outerDiv" style="text-align:center;">
        <div class="innerDiv"  style="padding:10px;"> 
        <img src="${meal.strMealThumb}" class="image" >
        
        </div>
        <h5>${meal.strMeal}</h5>

    </div>

    
    
    `).join('');

}



showData('Indian');
indian.addEventListener('click', () => {

    showData('Indian');

});

canadian.addEventListener('click', () => {
    showData('Canadian');
});

american.addEventListener('click', () => {
    showData('American');
});
thai.addEventListener('click', () => {
    showData('Thai');
}
);
british.addEventListener('click', () => {
    showData('British');
}
);
russain.addEventListener('click', () => {
    showData('Russian');
}
);

const fetchdatabyname = async (name) => {
  const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const data = await api.json();
  return data.meals;
}

const showDatabyname = async (name) => {
  recepie = await fetchdatabyname(name);
  if (!recepie) {
    food.innerHTML = "<p>No recipe found!</p>";
    return;
  }
  food.innerHTML = recepie.map(meal => `
    <div classs= "outerDiv" style="text-align:center;">
        <div class="innerDiv"  style="padding:10px;"> 
        <img src="${meal.strMealThumb}" class="image" > 
        </div>
        <h5>${meal.strMeal}</h5>
    </div>
  `).join('');
}

searchbtn.addEventListener('click', () => {
  let name = document.querySelector('#searchinput').value.trim();
  showDatabyname(name);
});
