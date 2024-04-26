# NOTE - This deployment is currently not working due to the API being utilized having been taken offline. As a result no beers will show. ETA as to when I will fix this problem is unknown.

# Punk API Beer Sorter

## About this application

### Description

This application was developed to utilise the Punk API, in order to display and enable filtering through an assortment of beers from the popular Brewdog brand. Through this app, you can search through the beers by name, a high ABV level, if it was first brewed pre-2010 and a low ph level. These afford a multitude of options to find your favourite beer, and even offers additional information such as food pairings, ingredients and even some brewing tips.

### How does it work?

The main driving force behind this app is a dynamic api call which utilises state variables to determine which beers to pull down from the API. Essentially, when you input a search term in the search bar, select a filter element or click to go to the next page, the api will be appended with the values stored in the state variables, if they are needed, and then fetches the data as defined by the new url.

### Pitfalls

This strategy, while in theory meant less code, does mean more api calls which may cause a the app to run slower than anticipated. Additionally the acidic sorting is wonky, and doesn't compile the beers which fit that criteria (ph less than 4) into one page. Ultimately this was a trade off as the less code personally felt better in the moment. However I intend to alliviate this issue at a later date by pulling all the beers down from the api initially, placing them into an array and working from there.

## How to use this application

### Usage

So how do you actually use this beer sorter? It's simple. Upon loading the page will be populated with the first 25 beers pulled from the API. From here you can either sort through the beers using the provided filters on the left/top (depending on device screen width), or scroll through the pages using the page buttons, located on the right/bottom of the page (again dependent on screem width).

To search by name, type the name you're looking for in the search bar and the beers will filter any name matches. To filter by all, high abv, classic or high acidity, click on the relevant radio button in the search menu. And to change the page number, click on the right/down arrow to increment it upwards, and the opposite arrows to go the other way. If the page number doesn't change, you've reached the end of the data and there are no more elements beyond that point.

### Additional features

Each beer card will show you an image of the beer (should it have one, otherwise it utilises a placeholder), a description and an [expand] button to show the full description, should it be too long to fit onto the card initially. This full description also features a [Back] button, to return to the inital card state.

Furthermore, you can click on the beer name itself, highlighted in blue, to be taken to a new page populated with even more information about the selected beer. This will include the previous information, as well as a slogan, ingredients list, food pairing ideas and even brewing tips. Finally there is also '<-Back to Beers' button to, well return to the beers page.

### Errors

You may come across a page which looks similar to the following:

![Error Page One](/public/error-page-1.PNG)

Or maybe this:

![Error Page One](/public/error-page-2.PNG)

If you do, then don't panic. These are just error handlers which informs you the app couldn't find what you were looking for. Simply press the home button, or in the latters case the up/down page button arrows, to return to normaility.
