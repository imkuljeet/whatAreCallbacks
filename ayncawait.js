const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post Two", body: "This is Post Two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        res();
      } else {
        rej("Something Went Wrong");
      }
    }, 2000);
  });
}

async function fun() {
  try {
    await createPost({ title: "Post Three", body: "This is Post three" });
    await createPost({ title: "Post Four", body: "This is Post four" });
    getPosts();
  } catch (error) {
    console.log(error);
  }
}

fun();
