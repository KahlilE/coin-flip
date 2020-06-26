let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random())
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if( this.state === 0){
            return "Heads"
        } else {
            return "Tails"
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if( this.state === 0){
            image.src = "assets/coin01.jpg"
        } else {
            image.src = "assets/1960-d-memorial-r.jpeg"
        }
        
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
}






function display20Flips(){
    for(counter = 0; counter < 20; counter += 1){
        coin.flip()
        let stringElement = document.createElement('p')
        stringElement.append(coin.toString())
        document.body.append(stringElement)
        

    }
    return 
}


function display20Images(){
    for(counter = 0; counter < 20; counter += 1){
        coin.flip()
        document.body.append(coin.toHTML())
        
    }
    return
}


// Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)

// Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).

// Your HTML file should have nothing in the body except for your script tag. Instead of hard-coding HTML elements, create them dynamically with Javascript and append them to your HTML using document.createElement and ParentNode.append