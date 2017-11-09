// Gets back an array of elements containing DOM 'selector', then gets the text of each. Runs through a loop to check
// 'text' parameter against each element's text. If the element's text matches the 'text' parameter, we check attribute
// of the element and break the loop.
exports.command = function (selector, text, attr, value) {
    this.elements('css selector', selector, function (links) {
      let success = false;
      this.pause(500);
      for (let i = 0; i < links.value.length; i++) {
        if (success === true)
          break;
        else
          this.elementIdText(links.value[i].ELEMENT, function (result) {
            if (result.value === text) {
              console.log(' ✔ Checking ' + selector + ' attribute ' + attr + 'has value "' + value + '":' + result.value);
              this.assert.attributeContains(links.value[i].ELEMENT, attr, value);
              success = true;
            }
          })
      }
    });
  };