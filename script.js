let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title}, ${author}, ${pages}, ${read}`        
    }

    //constructor
}
const theDeadZone = new Book('The Dead Zone', 'by Stephen King', '428 pages', 'read')
myLibrary.push(theDeadZone)
const treasureIsland = new Book('The Treasure Island', 'by Robert Louis Stevenson', '283 pages', 'Not read yet')
myLibrary.push(treasureIsland)
const renglonesTorcidos = new Book ('Los Renglones Torcidos de Dios', 'by Torcuato Luca de Tena', '448 pages', 'read')
myLibrary.push(renglonesTorcidos)


function createBook(){
    let booksShelf = document.querySelector('#booksShelf')
            let bookCard = document.createElement('div')
            let newBookDiv = document.createElement('div')
            let authorDiv = document.createElement('div')
            let pagesDiv = document.createElement('div')
            let remove = document.createElement('button')
            bookCard.classList.add('bookCard')
            newBookDiv.classList.add('book')
            authorDiv.classList.add('book')
            pagesDiv.classList.add('book')
            newBookDiv.textContent = `${title.value}`
            authorDiv.textContent = `${author.value}`
            pagesDiv.textContent = `${pages.value}`
            booksShelf.appendChild(bookCard)
            bookCard.appendChild(newBookDiv)
            bookCard.appendChild(authorDiv)
            bookCard.appendChild(pagesDiv)                        
            remove.textContent = 'Remove Book'
            remove.classList.add('remove')
            bookCard.appendChild(remove)
            remove.addEventListener('click', function(e){                
                bookCard.parentElement.removeChild(bookCard)        
             })
            read.checked == true ? bookCard.style.borderColor = 'lightgreen': bookCard.style.borderColor = 'pink'
            let readButton = document.createElement('button')
            readButton.textContent = 'Change Read Status'
            bookCard.appendChild(readButton)
            readButton.addEventListener('click', function(e){                
                bookCard.style.borderColor == 'lightgreen' ? bookCard.style.borderColor = 'pink' : bookCard.style.borderColor = 'lightgreen'        
             })
            
            
           

}
let book


function addBookToLibrary() {

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read')  
    book = new Book(`${title}`, `${author}`, `${pages}`, `${read}`)
    myLibrary.push(book)    
    console.log(book.info())
    createBook();
    
    
  

}


let addBookButton = document.querySelector('#addBookButton')
addBookButton.addEventListener('click', addBookToLibrary)


function showBooks() {
    for(i = 0; i<= myLibrary.length-1; ++i){
            let booksShelf = document.querySelector('#booksShelf')
            let bookCard = document.createElement('div')
            let newBook = document.createElement('div')
            let author = document.createElement('div')
            let pages = document.createElement('div')
            let remove = document.createElement('button')
            bookCard.classList.add('bookCard')
            newBook.classList.add('book')
            author.classList.add('book')
            pages.classList.add('book')
            newBook.textContent = `${myLibrary[i].title}`
            author.textContent = `${myLibrary[i].author}`
            pages.textContent = `${myLibrary[i].pages}`
            booksShelf.appendChild(bookCard)
            bookCard.appendChild(newBook)
            bookCard.appendChild(author)
            bookCard.appendChild(pages)
            remove.textContent = 'Remove Book'
            remove.classList.add('remove')
            bookCard.appendChild(remove)
            remove.addEventListener('click', function(e){                
                bookCard.parentElement.removeChild(bookCard)        
             })
            myLibrary[i].read == 'read' ? bookCard.style.borderColor = 'lightgreen': bookCard.style.borderColor = 'pink'
            let readButton = document.createElement('button')
            readButton.textContent = 'Change Read Status'
            bookCard.appendChild(readButton)
            readButton.addEventListener('click', function(e){                
                bookCard.style.borderColor == 'lightgreen' ? bookCard.style.borderColor = 'pink' : bookCard.style.borderColor = 'lightgreen'        
             })          
        }        
    } 
showBooks();

function openForm(){
    document.querySelector('#form-popup').style.display === 'none' ? document.querySelector('#form-popup').style.display = 'block': document.querySelector('#form-popup').style.display = 'none'
}



