# Workshop Plan

## 1. Introduction to the DOM (10 minutes)

- What is the DOM?
- How browsers represent HTML as a tree structure.
- Importance of manipulating the DOM in web development.

## 2. Selecting Elements (15 minutes)

- Methods: `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`.
- Differences and best use cases for each method.

## 3. Modifying Elements (20 minutes)

- Changing content: `innerHTML` vs `textContent`.
- Modifying attributes: `setAttribute`, `getAttribute`, `removeAttribute`.
- Adding/removing classes with `classList`.

## 4. Creating and Removing Elements (20 minutes)

- Creating elements with `createElement`.
- Appending elements with `appendChild` and `append`.
- Removing elements with `remove` and `removeChild`.

## 5. Event Handling (30 minutes)

- Adding event listeners: `addEventListener`.
- Common events: `click`, `mouseover`, `keyup`, `submit`.
- Event delegation for dynamically created elements.

## Practice Project: Interactive To-Do List

### Features to Implement:

#### Input and Add Task:

- A text input field to type tasks.
- A button to add the task to a list displayed on the page.

#### Mark as Completed:

- Clicking a task strikes it through (add a class for styling).

#### Remove Task:

- Each task has a "delete" button to remove it from the list.

#### Dynamic Feedback:

- Show the count of total tasks and completed tasks.

### Stretch Goals (Optional):

- Add local storage to save tasks between page reloads.
- Allow editing tasks by clicking on them.
