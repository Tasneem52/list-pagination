/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Students list items
const studentList = document.querySelectorAll('.student-item');
const MAX_STUDENTS_PER_PAGE = 10;

/***
  Function to display the list items for a given page number.
***/
const showPage = (list, page) => {
  const startIndex = page * MAX_STUDENTS_PER_PAGE - MAX_STUDENTS_PER_PAGE;
  const endIndex = page * MAX_STUDENTS_PER_PAGE;

  for(let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

/***
  Function to generate, append, and add functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
  const maxPages = Math.ceil(studentList.length / MAX_STUDENTS_PER_PAGE);

  // create pagination section
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'pagination';
  const paginationList = document.createElement('ul');
  paginationContainer.appendChild(paginationList);

  // create list item and add to pagination section for all pages.
  for (let i = 1; i <= maxPages; i++) {
    const listItem = document.createElement('li');

    // Create anchor tag and set href and textContent attribute.
    const anchorLink = document.createElement('a');
    anchorLink.setAttribute('href', '#');
    anchorLink.textContent = i;
    if (i === 1) {
      anchorLink.className = 'active';
    }
    listItem.appendChild(anchorLink);
    paginationList.appendChild(listItem);
  }

  const pageContainer = document.querySelector('.page');
  pageContainer.appendChild(paginationContainer);

  // Add functionality to pagination links.
  const paginationLinks = document.querySelectorAll('.pagination a');
  for (let i = 0; i < paginationLinks.length; i++) {
    paginationLinks[i].addEventListener('click', (event) => {
      // Show the clicked page.
      const pageNumber = event.target.textContent;
      showPage(studentList, pageNumber);
      // Remove 'active' class from all pagination links.
      paginationLinks.forEach((link) => {
        link.className = '';
      })
      // Set classname as 'active' to the clicked pagination link.
      event.target.className = 'active';
    });
  }
}

showPage(studentList, 1);
appendPageLinks(studentList);
