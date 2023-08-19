const posts = [
  { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
  { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }
];

let intervalId = 0;

function getPosts() {
  clearInterval(intervalId);

  intervalId = setInterval(()=>{
  
    let output = '';

    posts.forEach((post, index) => {
      const timeDifference = (new Date().getTime() - post.createdAt) / 1000; // Dividing by 1000 to convert to seconds
      output = output + `<li>${post.title} - last updated ${timeDifference.toFixed(2)} seconds ago</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
  }, 2000);
}

function create4thPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    getPosts(); // Call getPosts to immediately update the list
    callback();
  }, 6000);
}

getPosts();

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// Corrected function name to createPost
create4thPost({ title: 'Post Four', body: 'This is post four' }, getPosts);
