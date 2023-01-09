# Shop Design Template

### [Demo Website](https://demo.wolffe.dev/shopdesign/)
 ##### Here you can open a live demo of the website



## Description 

This shop design was fully created in HTML and CSS and includes a bit of JavaScript for the toggle button function. There is no backend, no single product page, no account system, and no shopping cart. Despite this, an unlimited number of product cards can be added without requiring any major changes to the code.

The navigation is accessible through a navigation bar that adapts well to any device. The entire website is responsive and available on any device, and looks good on any device size.

I put a lot of effort into creating this design to make sure it looks good and is user-friendly. We hope you will enjoy using it and that it helps you in designing your own online shop. Please note that the design is under the Apache License 2.0 and it is important to adhere to these license terms.

### License 

The Apache License 2.0 is a free software license that allows software to be used, modified, and distributed for any purpose. It is a permissive license that has few restrictions on the use and distribution of software.

Some of the key points of the Apache License 2.0 are:

* You may use the licensed material for any purpose, including commercial purposes.
* You may modify the licensed material and create derivative works from it.
* You must retain all copyright notices and other intellectual property notices in the licensed material.
* You may distribute the licensed material without restrictions.
* If you distribute the licensed material, you must include a copy of the Apache License 2.0.
* You must retain any disclaimers that are included in the Apache License 2.0.

Please note that this is just a brief summary of the key points of the Apache License 2.0. It is recommended to carefully read the full license to ensure you meet all requirements.

I look forward to hearing from you and am always open to feedback and suggestions for improvement. All information on how to contact me can be found further down.


## Download

1. Go to the GitHub page of the repository you want to download.
2. Click on the green *Code* button and then select *Download ZIP* from the dropdown menu.
3. Extract the downloaded ZIP file to a location of your choice on your computer.
4. Open Visual Studio Code.
5. Click on *File* in the top menu and then select *Open Folder...*
6. Navigate to the location where you extracted the ZIP file and select the folder.
7. The shop design template should now be open in Visual Studio Code.

You can then run the code and view the website by using the `open in browser` extension. You can find more useful extensions further down.

## Add new products

object should have the properties **image**, **name**, **description**, and **price**. Make sure that each new product object is within the curly braces of the list ([ ]) and separated by commas from the other products.

Here is an example of how you might add a new product:


#### Single product entry
```javascript
 {
    "image": "image_url",
    "name": "Product Name",
    "description": "Product Description",
    "price": 99.99
  }
];
```

#### How it looks in the array
```javascript
let products = [
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579309720440863/shoe_1.png",
    "name": "Air Force 1 Mid",
    "description": "white / green / black",
    "price": 159.95
  },
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579310152470698/shoe_2.png",
    "name": "Air Force 1 Mid",
    "description": "white / gray / orange",
    "price": 149.99
  },
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579310886469642/shoe_3.png",
    "name": "Air Force 1 Mid",
    "description": "white / blue / green",
    "price": 129.99
  },
  {
    "image": "https://cdn.discordapp.com/attachments/1058781414184734760/1060579311364608000/shoe_4.png",
    "name": "Air Force 1 Mid",
    "description": "white / red",
    "price": 129.99
  },
  {
    "image": "image_url",
    "name": "Product Name",
    "description": "Product Description",
    "price": 99.99
  }
];
```

## Extensions 

Here are some recommendations for Visual Studio Code extensions that could help you with HTML and CSS projects:

### Useful extensions recommendation

* `Open in Browser`: This extension allows you to open your HTML files directly in a browser without having to save them first. This can be especially useful if you want to quickly preview your work.

* `Live Server`: This extension creates a local server that allows you to open and test your HTML and CSS files directly in a browser. You can then make changes in real-time and see how they affect the appearance of your page.

* `Prettier Code Formatter`: This extension automatically formats your code to make it more readable and organized. You can set how you want your code to be formatted, and the extension takes care of the rest. This can be especially useful if you are working with other developers and want to use a consistent formatting scheme.

### Optical extensions

* `Horizon Theme`: This theme gives your Visual Studio Code editor a modern and clean look. It offers many options for customizing colors and fonts and is easy to read.

* `Material Icon Theme`: This extension adds Material Design icons to your files and folders to help you navigate better. The icons are color-coded and look good.


## Changes

* `06.01.2023` - The website now has a footer which contains important links and information. In addition, a live demo website is now available where interested parties can see the website's functionality in action. This demo website provides a great opportunity to test the website and see how it can be used in everyday life. 

* `05.01.2023` - I have created a programmatic representation of all products using JavaScript and HTML. To do this, I first created a list of products stored in JSON format. Then, I created a function that creates an HTML element for each product and returns the element. Finally, I used a loop to go through all the products and call the function to create the HTML element for each one.



## Future planned changes

* Next, I will change the footer to a dymanic design with js.
* I will upload this project as react / ts app soon, with single product page and private routing features. (atomic design included)

Currently, no more changes are planed. However, users are able to submit ideas and suggestions for new systems or changes to existing systems. We welcome all feedback and will take it into consideration for future updates.


## Contact

* Discord: `Cmd Wolffe | Official#3636` - [View my Discord Profile](https://discord.com/users/884114936622637136)
* Twitter: `@CmdWolffe` - [Send me a Tweet](https://twitter.com/CmdWolffe)
* Mail: `contact@wolffe.dev` - [Send me an email](mailto:contact@wolffe.dev)
* Website: `wolffe.dev` - [View my website](https://wolffe.dev)
* Links: [Here you can fine more about me](https://wolffe.dev/links)




