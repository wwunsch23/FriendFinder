// ===============================================================================
// DATA
// Below data will hold all of the friends.
// ===============================================================================

var friendArray = [
  {
    name: 'Joy Castro',
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
    scores: [
      3,
      2,
      1,
      5,
      2,
      4,
      4,
      3,
      1,
      5
    ]
  },
  {
    name: 'Alvin Morales',
    photo: "https://randomuser.me/api/portraits/men/62.jpg",
    scores: [
      4,
      3,
      1,
      5,
      5,
      4,
      4,
      2,
      1,
      4
    ]
  },
  {
    name: 'Brittany Howard',
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
    scores: [
      3,
      3,
      3,
      2,
      1,
      4,
      4,
      5,
      5,
      4
    ]
  },
  {
    name: 'Roger Lee',
    photo: "https://randomuser.me/api/portraits/men/30.jpg",
    scores: [
      5,
      5,
      5,
      2,
      2,
      3,
      3,
      4,
      1,
      2
    ]
  }
];
  
  // Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
  