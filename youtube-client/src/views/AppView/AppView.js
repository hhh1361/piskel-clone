const form = document.createElement('form');
const text = document.createElement('input');
text.type = 'text';
text.value = 'искать котиков';
text.id = 'text';
const find = document.createElement('div');
find.className = 'find';

let searchValue = 234;

document.body.appendChild(form);
form.appendChild(text);
form.appendChild(find);
const array = '';

async function startSearch() {
  searchValue = document.getElementById('text').value;
  // global.console.log(searchValue);
  const api = 'AIzaSyCwluF20j-KaztPsBwnJnbpWQjLeW5fmws';
  // const requestURL = `https://www.googleapis.com/youtube/v3/search?key=${api}&type=video&part=snippet&maxResults=15&q=${searchValue}`;
  // const request = new XMLHttpRequest();
  // request.open('GET', requestURL);
  // request.responseType = 'json';
  // request.send();

  const foo = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${api}&type=video&part=snippet&maxResults=15&q=${searchValue}`);
  const bar = await foo.json();

  goo(bar);
  console.log(123, bar);
  // setTimeout(() => {
  //   searchValue = request.response;
  //   global.console.log(searchValue);
  //   array = searchValue.items;
  //   global.console.log(array);
  // }, 300);
}

function foo() {
  // sdgfsdfg
}

find.addEventListener('click', startSearch);
