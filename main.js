document.getElementById('hit').onclick= function(){
    alert(1);
    let value=document.getElementById('search').value;
    const ul = document.getElementById('runners'),
        url = 'https://www.googleapis.com/books/v1/volumes?q='+value;
    ul.textContent = '';

    const createNode = (element) => { return document.createElement(element); }
    const append = (parent, el) => { return parent.appendChild(el); }

    fetch(url)
        .then((response) => { return response.json(); })
        .then( data => {
            let runners = data.items;
            return runners.map( runner => {
                let li = createNode('li'),
                    img = createNode('img'),
                    span = createNode('span');
                img.src = runner.volumeInfo.imageLinks.smallThumbnail;
                span.innerHTML = `${runner.volumeInfo.title} ${runner.volumeInfo.title}`;
                append(li, img);
                append(li, span);
                append(ul, li);
            });
        })
        .catch( error => { console.log(error); })
}