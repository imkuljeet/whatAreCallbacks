const posts = [{title: 'Post One', body: 'This is post one',createdAt: new Date().getTime()},{title: 'Post Two', body: 'This is post two',createdAt: new Date().getTime()}];

function getPosts() {
  setTimeout(() => {
    let output ='';

    posts.forEach((post,index) => {
      output = output + `<li>${post.title} - last updated ${newDate().getTime - post.createdAt}`;
    });
    document.body.innerHTML = output;
  },1000);
}

function createPost(post , callback) {
  setTimeout(() => {
    posts.push({...post,createdAt:newDate().getTime()});
    callback();
  },2000);
}

createPost({title: 'Post Three', body: 'This is post three'},getPosts);
create4thPost({title: 'Post Four', body: 'This is post four'},getPosts);

