console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const post = document.createElement("article");
post.classList.add("post");

const content = document.createElement("p");
content.classList.add("post__content");
content.textContent =
  "Wo bleiben unsere Piraten? 🏴‍☠️⚓️🪝 #piraten #meer #abenteuer";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@CaptainJack";

const likeButtonNew = document.createElement("button");
likeButtonNew.classList.add("post__button");
likeButtonNew.textContent = "Like ❤️";

likeButtonNew.addEventListener("click", handleLikeButtonClick);

post.appendChild(content);
post.appendChild(footer);

footer.appendChild(username);
footer.appendChild(likeButtonNew);

document.body.appendChild(post);
