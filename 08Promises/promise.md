# Promises

## What is Promise?
#### In JavaScript, a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It provides a more structured and efficient way to handle asynchronous operations compared to using callback functions.

## Promises in action:
#### The Fetch API provides a modern interface for making HTTP requests in JavaScript. It returns a promise that resolves to the response of the request. Promises and async/await syntax allow you to handle asynchromous operations in a more readable manageable way.

## 1. Fetching a List of Users
```js
// Fetch the list of users and log them to the console.
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(users => {
    console.log("List of Users:", users);
})
.catch(error => {
    console.error('Error fetching users:', error);
});

```
## 2. Fetching the First User's Posts
```js
// Fetch the list of users
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(users => {
    // Get the first user
    const firstUser = users[0];
    console.log("First User:", firstUser);
    // Fetch posts of the first user
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
})
.then(response => response.json())
.then(posts => {
    console.log("First User's Posts:", posts);
})
.catch(error => {
    console.error('Error: ', error);
});
```
## 3. Fetching the Last Post and Its Comments
```js
// Fetch the list of users
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(users => {
    const firstUser = users[0];
    console.log('First User:', firstUser);
    // Fetch posts of the first user
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
})
.then(response => response.json())
.then(posts => {
    console.log("First User's Post: ", posts);
    // Get the last post
    const lastPost = posts[posts.length -1];
    console.log("Last Post:", lastPost);
    // Fetch comments of the last post
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${lastPost.id}`);
})
.then(response => response.json())
.then(comments => {
    console.log("Comments on last Post:", comments);
})
.catch(error =>{
    console.error("Error:", error);
});
```
## 4. Filtering Data
```js
// function to filter posts by a keyword in the title
function filterPostsByKeyword(posts,keyword) {
    return posts.filter(post =>post.title.includes(keyword));
}

// usage example 
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    const keyword = 'eum';
    const filteredPosts = filterPostsByKeyword(posts,keyword);
    console.log(`Posts containing ${keyword}`, filteredPosts);
})
.catch(error =>{
    console.error('Error: ', error);
});
```
## 5. Sorting Data 
```js
// Function to sort comments by name
function sortCommentsByName(comments) {
    return comments.sort((a,b) => a.name.localeCompare(b.name))
}

// Usage example 
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(response => response.json())
.then(comments => {
    const sortedComments = sortCommentsByName(comments);
    console.log("Comments sorted by name: ", sortedComments);
})
.catch(error => {
    console.error('Error', error);
})
```
## 6. Using Async/Await Syntax
#### Now, let's rewrite the previous examples using `async/await` syntax for cleaner and more readable code.

## 6.1 Fetching the first User's Posts Using Async/Await

```js
// Async function to fetch the first user's posts
async function fetchFirstUsersPosts() {
    try {
        // Fetch the list of users
        const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await usersResponse.json();
        const firstUser = users[0];
        console.log("First User:", firstUser);

        // Fetch posts of the first user
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
        const posts = await postsResponse.json();
        console.log("First User's Posts: ", posts);

    } catch (error) {
        console.error('Error:', error);
    }
}
// call the async function
fetchFirstUsersPosts();
```
### Explanation
- Combines filtering and sorting functions with async/await syntax.
- Error handling is done using a `try...catch` block. 

## Additional Notes
- **Async/Await vs Promises**: `async/await` is syntactic sugar over promises and can make asynchronous code more readable.
- **Error Handling**: When using `async/await`, use` try...catch` blocks to handle errors.
- **Modular Code**: Writing separate functions for filtering and sorting promotes code reusability and cleanliness.
- **API Limitations**: When working with APIs, be mindful of rate limits and handles errors gracefully.

