const posts = [{ title: 'Post One', body: 'This is post one' }, { title: 'Post Two', body: 'This is post two' }];

function getPosts() {
  setTimeout(() => {
    let output = '';

    posts.forEach((post, index) => {
      output = output + `<li>${post.title}</li>`; // Added </li> to close the list item
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts) // Moved this outside the createPost function call
  .catch(error => console.error(error)); // Added a catch block to handle potential errors
