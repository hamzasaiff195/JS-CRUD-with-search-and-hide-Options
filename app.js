// var books = document.querySelectorAll('#book-list li .name');

//* For textContent
// Array.from(books).forEach(function (book) {
//   book.textContent += 'New Book';
// });

//* For innerHTML
// const bookList = document.querySelector('#book-list');
// bookList.innerHTML += '<h1>Hello from the Librarian </h1>';
// bookList.innerHTML += '<p>Hello form Library</p>';

//* To check nodeType, nodeName, hasChildNodes()
// const banner = document.querySelector('#page-banner');
// console.log(`#page-banner node type is ${banner.nodeType}`);
// console.log(`#page-banner node name is ${banner.nodeName}`);
// console.log(`#page-banner has child node: ${banner.hasChildNodes()}`);

//* Clone banner in case of true
// const clonedBannerTrue = banner.cloneNode(true);
// console.log(clonedBannerTrue);

//* Clone banner in case of false
// const clonedBannerFalse = banner.cloneNode(false);
// console.log(clonedBannerFalse);

//* Traversing the DOM -- parentNode , parentElement
// const bookList = document.querySelector('#book-list');
// console.log('The parent node is:', bookList.parentNode);

//* here this first find parentElement of bookList then find parentElement inside it.
// console.log('The parent element is:', bookList.parentElement.parentElement);

//* it returns the line breaks in console , as "\n"
// console.log(bookList.childNodes);

//* to avoid line breaks
// console.log(bookList.children);

//* nextSibling // show text as line break
// const bookList = document.querySelector('#book-list');
// console.log('next sibling is:', bookList.nextSibling);

//* nextElementSibling // to avoid line break
// const bookList = document.querySelector('#book-list');
// console.log('next element sibling is:', bookList.nextElementSibling);

//* previousSibling // show text as line break
// const bookList = document.querySelector('#book-list');
// console.log('previous sibling is:', bookList.previousSibling);

//* previousElementSibling // to avoid line break
// const bookList = document.querySelector('#book-list');
// console.log('previous element sibling is:', bookList.previousElementSibling);
//* previousElementSibling with innerHTML
// bookList.previousElementSibling.querySelector('p').innerHTML +=
//   '<br> To cool for everyone else';

//* Event listeners click()
// const h2 = document.querySelector('#book-list h2');
// h2.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e);
// });

//* delete li items from addEventListener
// var btns = document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });

//* e.preventDefault from addEventListener
// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('navigation to:', e.target.textContent, 'was prevented');
// });

//* setAttribute, removeAttribute, getAttibute, hasAttribute
// var book = document.querySelector('li:last-child .name');

// book.getAttribute('class');
// book.setAttribute('class');
// book.getAttribute('class');
// book.removeAttribute('class');

/** ------------------------------------------------------------------------- */

//* Event Bubbling from target to parent element
document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('#book-list ul');
  const forms = document.forms;

  // delete books
  list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // add books
  const addForm = forms['add-book'];
  addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // hide books
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function (e) {
    if (hideBox.checked) {
      list.style.display = 'none';
    } else {
      list.style.display = 'initial';
    }
  });

  // filter books
  const searchBar = forms['search-books'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(e.target.value) != -1) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });

  // tabbed Content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');

  tabs.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function (panel) {
        if (panel == targetPanel) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    }
  });
});
