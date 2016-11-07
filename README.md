This software serves as an example to the uses of the MyParcel delivery end-points. This is a example checkout for webshops.

## Installation notes

The added coffeescript need to be compiled to javasrcipt in order to run the checkout.

### Examples

There are 2 example avaliable.

[Normal version](https://myparcelnl.github.io/checkout/)
[iFrame version](https://myparcelnl.github.io/checkout/iframe-example.html)

### Requirements

- [Nodejs](https://nodejs.org/en/)
- [Coffeescript compiler](https://www.npmjs.com/package/coffee-script)

### Compilation

Make sure that nodejs and the coffeesrcipt compiler are installed. To compile the coffeescript to javascript run the following command

```bash
coffee myparcel.coffee
```

OR with a map for debugging

```bash
coffee -m myaprcel.coffee
```

For more information visit the [coffeescript page](http://coffeescript.org/)

## Usage

Make sure all included javascript libaries are loaded before the `myparcel.js` is loaded. Make sure the `webcomponents.min.js` is loaded before all else.

To configure the checkout the following object need to be set:

```javascript
window.mypa.settings = {
	number: '100', // String - Required
	street: 'Street name', // String - Required
	postal_code: '1111AA', // String - Required
	price: {
		morning: '&#8364; 12,00', // String - Make sure too add the currency in proper format
		default: '&#8364; 12,00', // String
		night: '&#8364; 12,00', // String
		pickup: '&#8364; 12,00', // String
		pickup_express: '&#8364; 12,00', // String
		signed: '&#8364; 12,00', // String
		only_recipient: '&#8364; 12,00', // String
		combi_options: '&#8364; 12,00', // String
	}, 
	base_url: 'http://api.myparcel.nl/delivery_options', // Required
	text:
	{
		signed: 'Text show instead of default text', 
		only_recipient: 'Text show instead of default text'
	}
}
```

To initialize the checkout the myparcel object should be constructed

```js
myparcel = new Myparcel()
```

This configuration can be chagned after the checkout has loaded. The config need to be reloaded after is has changed. This can be done using the `updatePage` function.

Not all fields are required for the checkout to function.

For the `signed` and `only_recipient` option if disabled is given as string the option wont shown.

### Troubleshooting

Webcomponents might not be compatible with all other libraries (I.E some versions of prototype.js). A simple way around this issue is to run the checkout on a seperate page and load the html on a iframe. This creates the same effect as the shadow DOM does.
