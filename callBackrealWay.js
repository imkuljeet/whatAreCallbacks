const posts = [
  { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
  { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }
];

function getPosts(){
  setTimeout(()=>{
    let str = "";
    for(let i=0;i<posts.length;i++){
      str = str +`<li>${posts[i].title}</li>`
    }
    document.body.innerHTML = str;
  },1000);
}

getPosts();

function createPost(post,callback){
  setTimeout(()=>{
    posts.push({...post,createdAt: new Date().getTime()})
  callback();
  },2000);
}

function create4thPost(post,callback){
  setTimeout(()=>{
    posts.push({...post,createdAt: new Date().getTime()})
  callback();
  },6000);
}

createPost({ title: 'Post Three', body: 'This is post three', createdAt: new Date().getTime() },getPosts);
create4thPost({ title: 'Post Four', body: 'This is post four', createdAt: new Date().getTime() },getPosts);