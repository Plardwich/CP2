(function() {

    window.addEventListener("load", init);
  
    /**
     * sets up necessary functionality when page loads
     */
    function init() {
        qs("#bang").addEventListener("click", showBang);
    }
  
    /**
     * Shows the big bang gif
     */
    function showBang() {
        document.getElementById("bang").hidden = true;
        let bang = document.createElement("img");
        bang.classList.add("bangGif");
        bang.src = "sources/bang.gif";
        id("astroMain").appendChild(bang);
    }
  
    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} name - element ID.
     * @returns {object} - DOM object associated with id.
     */
    function id(id) {
      return document.getElementById(id);
    }
  
    /**
     * Returns first element matching selector.
     * @param {string} selector - CSS query selector.
     * @returns {object} - DOM object associated selector.
     */
    function qs(selector) {
      return document.querySelector(selector);
    }
  })();