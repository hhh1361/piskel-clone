
let str = 'Lorem ipsum sit, amet consectetur dipisicing elit. Ab 99 iste unDe illum asperiores deleniti officia iure, optio iusto hic 9 quos odit numquam est animi incidunt recusandae quas fuga corrupti distinctio, esse doloremque ea, ut sint fugit. Nihil porro fugiat quo dolorum facere at, eaque quia nisi velit nemo eum expedita fugit ratione sapiente facilis, cupiditate commodi aut rem? Lorem similique molestiae quis, eveniet praesentium fugit pariatur nulla repudiandae esse. Ut enim aperiam corrupti neque praesentium, nemo fugiat fugit nulla labore cupiditate temporibus rerum dolorum, quis sunt? Praesentium numquam autem odio lorem, ex eaque unde, perferendis temporibus nemo tempora exercitationem commodi quisquam quos reprehenderit? Nulla facere saepe labore ullam esse repudiandae eveniet ea nostrum 2! Quia lorem enim dolorum ex dignissimos 666 saepe maiores accusantium eveniet temporibus rerum nam iure quasi 5 laudantium beatae quis sint, officiis repellat adipisci placeat nostrum iste id sapiente?'
const reserved = 'Lorem ipsum sit, amet consectetur dipisicing elit. Ab 99 iste unDe illum asperiores deleniti officia iure, optio iusto hic 9 quos odit numquam est animi incidunt recusandae quas fuga corrupti distinctio, esse doloremque ea, ut sint fugit. Nihil porro fugiat quo dolorum facere at, eaque quia nisi velit nemo eum expedita fugit ratione sapiente facilis, cupiditate commodi aut rem? Lorem similique molestiae quis, eveniet praesentium fugit pariatur nulla repudiandae esse. Ut enim aperiam corrupti neque praesentium, nemo fugiat fugit nulla labore cupiditate temporibus rerum dolorum, quis sunt? Praesentium numquam autem odio lorem, ex eaque unde, perferendis temporibus nemo tempora exercitationem commodi quisquam quos reprehenderit? Nulla facere saepe labore ullam esse repudiandae eveniet ea nostrum 2! Quia lorem enim dolorum ex dignissimos 666 saepe maiores accusantium eveniet temporibus rerum nam iure quasi 5 laudantium beatae quis sint, officiis repellat adipisci placeat nostrum iste id sapiente?'
const sec21 = document.getElementById('sec21');


const text = document.createElement('div');
sec21.appendChild(text);
text.innerHTML = str;
text.style.fontSize = '16pt';

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const re = document.createElement('div');
const table = document.createElement('div');

sec21.appendChild(input1);
sec21.appendChild(input2);
sec21.appendChild(re);




input1.style.width = '500px';
input1.style.margin = '15px';
input1.style.fontSize = '36pt';
input2.style.width = '500px';
input2.style.margin = '15px';
input2.style.fontSize = '36pt';
re.style.width = '500px';
re.style.height = '50px';
re.style.lineHeight = '50px';
re.style.backgroundColor = '#4d6dcc';
re.style.color = '#eee'
re.style.fontSize = '36pt';
re.style.margin = '15px auto';
re.style.borderRadius = '10px';
re.style.textAlign = 'center';
re.innerHTML = '/'+input2.value+'/'+input2.value;


input1.addEventListener('keyup', function() {
    str = reserved;
    let regexp = input1.value;
    let gmi = input2.value;
    re.innerHTML = '/'+input1.value+'/'+input2.value;

    let reg = new RegExp(regexp, gmi);
    console.log(str.match(reg));

    //str = str.replace(reg,`<span class="red">${regexp}</span>`)
    //text.innerHTML = str;
})

input2.addEventListener('keyup', function() {
    str = reserved;
    let regexp = input1.value;
    let gmi = input2.value;
    re.innerHTML = '/'+input1.value+'/'+input2.value;

    let reg = new RegExp(regexp, gmi);
    console.log(str.match(reg));

    //str = str.replace(reg,`<span class="red">${regexp}</span>`)
    //text.innerHTML = str;
})




