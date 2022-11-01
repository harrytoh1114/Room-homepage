# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- CSS Modules
- [React](https://reactjs.org/) - JS library

### What I learned

Add some amazing hover effect to the navigation. Create a custom hook to retrieve current screen width and height.

To see how you can add code snippets, see below:

```css
.navigation__link:hover::after {
  content: "";
  display: block;
  position: absolute;
  border-bottom: 3px solid;
  line-height: 1.4;
  height: 10px;
  width: 60%;
  left: 50%;
  transform: translateX(-50%);
  animation: 0.2s fadeIn forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 1;
    width: 60%;
  }
}
```
```js
const [size, setSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
});

const getCurrentWidth = () => {
  setSize({ width: window.innerWidth, height: window.innerHeight });
};

useEffect(() => {
  window.addEventListener("resize", getCurrentWidth);

  return () => {
    window.removeEventListener("resize", getCurrentWidth);
  };
}, [size]);

return size;
```
## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/harrytoh1114)
