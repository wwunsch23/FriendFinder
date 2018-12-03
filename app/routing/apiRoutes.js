// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");

function absMatch (arr1, arr2) {
    return arr2.map(function (el, i) {
        return Math.abs(parseInt(el) - parseInt(arr1[i]));
    });
}

function findMatch (userData) {
    let matchIndex=0;
    let matchTotal=100;

    for (let i=0; i < friendData.length; i++) {
        let friendTotal = absMatch(userData, friendData[i].scores).reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0);
        //console.log("friendTotal: "+friendTotal, "matchTotal: "+matchTotal);
        if (friendTotal < matchTotal) {
            matchTotal = friendTotal;
            matchIndex = i;
        }
    }
    console.log(friendData[matchIndex].name, friendData[matchIndex].photo);
    return matchIndex;
};


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    //console.log(req.body.scores);
    const friendMatchIndex = findMatch(req.body.scores);    
    friendData.push(req.body);
    res.json(friendData[friendMatchIndex]);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     friendData.length = [];

//     res.json({ ok: true });
//   });
};
