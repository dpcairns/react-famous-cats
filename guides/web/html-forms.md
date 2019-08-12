# HTML Forms

Forms are an interesting place in HTML. They are one of the few elements that truly require other languages to support them. Other HTML elements can stand alone, but a form without JavaScript won't get very far. All the same, HTML is a good place to start.

# `<form>`: the element
This element is basically a container for holding all the bits and pieces that we need to keep together. Besides acting as a container to hold all the other elements, the `<form>` element also uses attributes to describe the behavior the form should provide. 

Because forms are a point of user interaction, it is important to use the correct elements here. You want to make it as easy as possible for your users to input information. Using the correct elements will add additional hooks to your code that assistive technologies (like screen readers) can take advantage of. 

***NOTE:** While you can normally nest most HTML elements, you should NEVER nest a form inside of another form. This causes unpredictable behavior.*

Take a look at this guide from MDN on [Your First HTML Form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form). Also read over this article from A List Apart on [Sensible Forms](https://alistapart.com/article/sensibleforms) for more information on how to make forms more user friendly.


# Basic Parts of a Form

Now we have our `<form>` element set up to hold all the bits, but what do we actually put into a form? At it's most basic level, forms hold inputs, labels, and buttons. Inputs provide users with a way to enter information, labels help users to know what information to provide, and buttons are used to navigate and submit the information. 

## Getting Input from the User

### The `<input>` element

This element can be used in a multitude of ways to create points of interaction with the user. You assign an input a `type` attribute to create different form widgets.

#### `<input type="text">`
If you leave off a type, it will default to text. For clarity, I always recommend including the type even if you are just using text. A text input gives you a space for a single-line of text, where the line-breaks are automatically removed from the input value.

HTML5 introduced several new versions of the basic text field to help with validation for various types of input that would use a simple text field. This includes `email`, `tel`, `url`, and more. 

Take a look at the input types that are provided for you and make sure you are always selecting the more relevant type for the information you are seeking. You can find a list of all values for the type attribute [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)

#### `<input type="radio">`
The radio input type is great when you have a limited number of predefined options and want the user to only be able to select one. This is often used for getting a user's gender or age range, or for asking a yes/no question. 

#### `<input type="checkbox">`
Similar to the radio input type, the checkbox input type is great for when you have a limited number of predefined options you want the user to select from, but are okay with them selecting multiple options. 

### `<textarea>`
This form widget allows you to give the user a space to enter a sizeable amount of free-form text, for example a comment.

## Submitting a Form

### `<input type="button">` VS `<button>`?
Just use `<button>`. If you find yourself having to support a really old browser (ie7-) you may need to use the other, but in general let's go with `<button>`. 

Take a look at this article from Landon Schropp on [HTML5 Buttons](https://davidwalsh.name/html5-buttons) for more info on `<input type="button">` vs `<button>` vs `<a>` and when to use each.
