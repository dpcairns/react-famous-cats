LAB 05: Search and Page Pokedex with React Router
===

## Goal

In a new repo, rebuild your pokedex app using `react-router-dom` (`npm i react-router-dom`). You'll have a `List` page and a `Detail` page. You'll also have an `App.js` that hooks the components together using `Switch`, `Router`, and `Route`. You'll link to other parts of the app using the `react-router-dom` `Link` component. You'll also add an `About` page with details about the pokedex (lorem ipsum is fine, but make it styled).

## Points Break Down

Looking For | Points (10)
:--|--:
Styled List Page Component that fetches characters by name on search (each Character has a `react router` `Link` to its Detail page) | 3
Styled Detail Page Component that uses `this.props.match.params.whatever` to make fetch on `componentDidMount` | 4
Styled Search component that uses a callback to manage input state | 2
About Me page | 1
More Searches (by status, age, etc, using radio button options to select category) | +2 per search (3 extra max searches)
Make the list page fetch respond to url (input injects term into url, and url injects term into input) | +1
Paging component | +2