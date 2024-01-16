const messages = [["Keep your face always toward the sunshine—and shadows will fall behind you. —Walt Whitman"], ["Extraordinary things are always hiding in places people never think to look. —Jodi Picoul"],["Setting goals is the first step in turning the invisible into the visible. —Tony Robbins"],["You can have it all. Just not all at once.” —Oprah Winfrey"], ["I’ve missed more than 9000 shots in my career I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. —Michael Jordan"], ["Say something positive, and you’ll see something positive. —Jim Thompson"], ["All you need is the plan, the road map, and the courage to press on to your destination. —Earl Nightingale"], ["Train your mind to see the good in every situation. —Unknown"],["Only in the darkness can you see the stars. —Martin Luther King, Jr."]];


const generateRandomMessage = () => {
    document.querySelector("#message").innerHTML = messages[Math.floor(Math.random() * messages.length)];

}

document.querySelector("button").addEventListener("click", generateRandomMessage)