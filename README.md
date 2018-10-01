# weather-app

https://weaderapp.herokuapp.com

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### My thought process when creating the solution

 - First I have to create a project structure, install modules, create json file, etc. So I will use VueCLI-3 for this.
 - Next step I have to set my project structure, add components, find and download assets.
 - Then I will create design for my app, so I will check my Pinterest to find some inspiration. But I got inspired with iOS's appstore cards.
 - Now I can start creating website with HTML5 and CSS.
 - I got some problems with responsibility and adaptivity. I could fix it by using the "rem".
 - I have to check my website on high resolution wide screen. But I don't have a such monitor. I need to buy iMac.
 -  This is my first time working with Geolocation API. And I got a problem with promise. Did fix it.
 - Set my store with Vuex.
 - Got a problem with code structure in store.js. Guys from stackowerflow helped me.
 - I use two ajax requests in my project. One for requests by coordinates. Another for requests by city name. I have to reduce to one. Maybe I will use GoogleMaps API to do it.
 - Finished my TodayWidget. It was easy.
 - Finished my ForecastWidget. It wasn't so easy. Solved the issue with Vue.js's filters property.
 - Almost Done. Checking ESlint, looking for errors. Wrote couple comments. 
 - I have to deploy my app. Choosing between Node.js and Golang. I chose Golang. Golang is easy. Don't need node_modules and frameworks like express.
 - Deployed. Working fine in Chrome. Geolocation API is not working with Safari. Will google it.
 - Fixed minor UI issues. Deployed again.

### Tradeoffs

 - Used two ajax requests. It is possible to use one. I have couple solutions.
 - Thinking about issue with multiple cities with same names. 
 - Improve UI. I need some ideas.
 - Used img tag with SVG. Was bad Idea. Will improve it with SVG sprites.
 - Sometimes getting a geolocation takes more time. Perhaps it depends on device. 

### Todos (with more time)

 - Add tests
 - Add dropdown menu with cities data for input.
 - Add animations and transitions.
 - Make favicon.
 - Add an ability to pin cities.
 - Use SVG sprites.
 - Fix issue with Safari.
 - Create PWA or native app with NativeScript.
