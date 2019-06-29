# GiphyNow

## Project Description

GiphyNow is a React web app that allows a user to search for gifs using the Giphy API. The user will also be able to 'favorite' gifs for later viewing.<br><br>

## Wireframes

- Homepage
  
  ![Home](/wireframes/Home.png)<br><br>

- Search Results
  
  ![Search](/wireframes/Search.png)<br><br>

- Favorites
  
  ![Favorites](wireframes/Favorite.png)<br><br>

## Anticipated Problems

  There is a possibility of CORS/CORB(Cross-Origin Resource Sharing / Cross-Origin Read Blocking) issues when manipulating the data that is retrieved from the Giphy API
- Click [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors) for more information on CORS errors.
- Click [here](https://chromium.googlesource.com/chromium/src/+/66.0.3359.158/content/browser/loader/cross_origin_read_blocking_explainer.md) for more information about CORB and how it may affect your web applications. <br><br>
  
## Possible Solutions
  In the event of a CORS/CORB issue, I will have to use a proxy server to initiate my HTTP requests, like [cors-anywhere](https://github.com/Rob--W/cors-anywhere/).<br><br>

### MVP

- Find and use external API
- Render data on page
- Use only React for DOM manipulation
- Implement infinite scrolling on home page
- User is able to search for gifs of a specific theme<br><br>

### Post - MVP

- Incorporate memes into the web app
- Create a meme generator
- Allow user to share memes/gifs to social media<br><br>

### Additional Libraries

- [Axios](<http://](https://www.npmjs.com/package/axios)>), for making asychronous HTTP requests
- [Font Awesome](https://www.npmjs.com/package/font-awesome) and [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap), for custom styling and icons
