const addBtn = document.getElementById("add_btn")

addBtn.addEventListener("click", addChapter)
let parentList = document.getElementById("parentList")

function addChapter(e) {
  if (parentList.children[0].className == "emptyMsg") {
    parentList.children[0].remove()
  }
  // console.log(e)
  let currentBtn = e.currentTarget
  currentInput = currentBtn.previousElementSibling
  // console.log(currentInput.value)
  let currentInputValue = currentInput.value

  let newLi = document.createElement("li")
  // newLi.classList.add("list-group-item")
  // newLi.textContent = currentInput.value
  newLi.className = "list-group-item d-flex justify-content-between"
  newLi.innerHTML = `<h4 class="flex-grow-1">${currentInputValue}</h4>
  <button class="btn btn-warning mx-2" onclick="editChapter(this)">Edit</button>
  <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`
  parentList.append(newLi)
}

function removeChapter(currElement) {
  currElement.parentElement.remove()

  let parentList = document.getElementById("parentList")
  if (parentList.children.length <= 0) {
    let newEmptyMsg = document.createElement("h3")

    //? Some Modification requires
    newEmptyMsg.classList.add("emptyMsg")
    newEmptyMsg.textContent = "Nothing is here"
    /*  */
    //! Here Above👆 ...
    parentList.appendChild(newEmptyMsg)
  }
}

function editChapter(currElement) {
  if (currElement.textContent == "Done") {
    currElement.textContent = "Edit"
    let currChapterName = currElement.previousElementSibling.value
    let currHeading = document.createElement("h3")
    currHeading.className = "flex-grow-1"
    currHeading.textContent = currChapterName
    currElement.parentElement.replaceChild(
      currHeading,
      currElement.previousElementSibling
    )
  } else {
    currElement.textContent = "Done"
    let currChapterName = currElement.previousElementSibling.textContent
    let currentInput = document.createElement("input")
    currentInput.type = "text"
    currentInput.placeholder = "Chapter Name"
    currentInput.className = "form-control"
    currentInput.value = currChapterName

    currElement.parentElement.replaceChild(
      currentInput,
      currElement.previousElementSibling
    )
  }
}
