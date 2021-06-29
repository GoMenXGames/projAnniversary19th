//Values
let games = [{name:"Mortal Kombat 9 KE", link:"https://store.steampowered.com/app/237110/Mortal_Kombat_Komplete_Edition/", rate:[5,9,3,8,5]},{name:"Jackbox Party Pack 6",link:"https://store.steampowered.com/app/1005300/The_Jackbox_Party_Pack_6/", rate:[4,6,8,1,2,9,7]}];
let select_elems = ["Mortal Kombat 9 KE","Jackbox Party Pack 6"];
let accounts = [{login:"administrator", password:"P@ssw0rd"},{login:"kae", password:"cdasqwe1"},{login:"gomenxgames", password:"10Ilya10"}]
let boolauth = false;

//Links
let selectLink = document.querySelector('select');
let loginLink = document.querySelector('input[name="login"]');
let passwordLink = document.querySelector('input[name="password"]');

selectLink.selectedIndex = 0;
selectChange(0);

function rightAccountData(index, login, password) {
  if (login == accounts[index].login) {
    if (password == accounts[index].password) {
      return true;
    }
  }
  else {
    return false;
  }
}

function tryLogin() {
  try {
    accounts.forEach((item, i) => {
      let login = loginLink.value.toString().toLowerCase();
      if (rightAccountData(i, login, passwordLink.value)) {
        boolauth = true;
        throw BreakException;
      }
      else {
        boolauth = false;
      }
    });
  }
  catch (e) {}
  if (boolauth) {alert("Вы успешно авторизовались!");} else {alert("Неверный логин или пароль!");}
  updatePage();
}

function updateSelect() {
  selectLink.innerHTML = "";
  for(let i=0; i < select_elems.length; i++) {
    selectLink.innerHTML += "<option>" + select_elems[i] + "</option>";
  }
}
updateSelect ();

function addgame() {
  let boolAlredyHas = false;
  let name = document.querySelector('input[name="name"]').value.toString();
  let url = document.querySelector('input[name="url"]').value.toString();
  try {
    select_elems.forEach((item, i) => {
      if (item == name) {
        boolAlredyHas = true;
        throw BreakException;
      }
    });
  }
  catch (e) {

  }
  if (boolAlredyHas) {
      alert("Такая игра уже есть в списке!");
  }
  else {
    if (name != "" && url !="") {
      let obj = {name:name, link:url};
      games = games.concat(obj)
      select_elems = select_elems.concat(name);
      updateSelect ();
      selectLink.selectedIndex = select_elems.length-1;
      selectChange(select_elems.length-1);
    }
    else {
      alert("Заполните поля!");
    }
  }
}

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

function selectChange(i) {
  let gameLink = document.querySelector('.game');

  let rate = Math.round(average(games[i].rate));
  gameLink.innerHTML = "<h4>"+select_elems[i]+"<h4>" +"<hr>"+ "<a target=\"_blank\" href=\""+games[i].link+"\">"+"LINK"+"</a>" + "<p class=\"rating\">" + "Средняя оценка:" + rate + "</p>" + "<button onclick=\"vote("+ i +")\">Голосовать за</button>";
}

updatePage();

function updatePage() {
  if (boolauth) {
    document.querySelector('.auth').classList.add("hidden");
    document.querySelector('.clockfield').classList.remove("hidden");
    document.querySelector('.gamechoose').classList.remove("hidden");
  }
  else {
    document.querySelector('.auth').classList.remove("hidden");
    document.querySelector('.clockfield').classList.add("hidden");
    document.querySelector('.gamechoose').classList.add("hidden");
  }
}
