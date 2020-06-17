const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/plumbumApp"
);

const entrySeed = [
  {
    title: "Chapter 1 - Fall of the King",
    entryBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Quam nulla porttitor massa id neque aliquam vestibulum. Cursus risus at ultrices mi tempus imperdiet nulla. Arcu dictum varius duis at consectetur lorem. Viverra mauris in aliquam sem. Suspendisse in est ante in nibh mauris cursus. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. In hac habitasse platea dictumst quisque. Ipsum dolor sit amet consectetur adipiscing elit. Libero enim sed faucibus turpis in eu mi. Amet facilisis magna etiam tempor orci eu lobortis elementum. Pellentesque pulvinar pellentesque habitant morbi tristique. Gravida quis blandit turpis cursus in hac habitasse platea. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Adipiscing at in tellus integer feugiat scelerisque. Sit amet risus nullam eget felis eget nunc lobortis mattis. Diam sit amet nisl suscipit adipiscing bibendum. Et netus et malesuada fames. Dui sapien eget mi proin sed libero. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Ut tristique et egestas quis ipsum. Posuere sollicitudin aliquam ultrices sagittis. Dui faucibus in ornare quam viverra orci sagittis. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Interdum velit euismod in pellentesque massa placerat. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Vitae purus faucibus ornare suspendisse sed nisi lacus. A pellentesque sit amet porttitor eget dolor morbi. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Adipiscing elit pellentesque habitant morbi tristique. In iaculis nunc sed augue lacus. Ac odio tempor orci dapibus ultrices in iaculis nunc. Neque ornare aenean euismod elementum nisi quis eleifend quam. Massa enim nec dui nunc mattis. Risus nullam eget felis eget nunc. Suspendisse faucibus interdum posuere lorem ipsum. Nec dui nunc mattis enim ut tellus elementum. Interdum velit laoreet id donec ultrices. Pharetra pharetra massa massa ultricies mi quis. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Velit aliquet sagittis id consectetur purus. Et netus et malesuada fames ac turpis. Consequat ac felis donec et odio pellentesque diam. Bibendum est ultricies integer quis auctor elit sed. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ultrices tincidunt arcu non sodales neque. Et malesuada fames ac turpis. Massa tincidunt dui ut ornare lectus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Faucibus et molestie ac feugiat. Lacus luctus accumsan tortor posuere ac. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Arcu bibendum at varius vel pharetra vel turpis. Ut consequat semper viverra nam libero justo. Condimentum lacinia quis vel eros. Elit pellentesque habitant morbi tristique senectus et. Elementum sagittis vitae et leo duis ut diam quam. Enim eu turpis egestas pretium aenean pharetra magna ac. Mi sit amet mauris commodo. Gravida dictum fusce ut placerat. Vitae tempus quam pellentesque nec nam. Eget est lorem ipsum dolor sit amet consectetur. Commodo ullamcorper a lacus vestibulum sed arcu non. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Massa sed elementum tempus egestas sed sed risus pretium. Vitae tortor condimentum lacinia quis vel eros donec ac. At varius vel pharetra vel turpis nunc eget lorem. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Integer quis auctor elit sed vulputate mi sit. Velit scelerisque in dictum non consectetur. Pulvinar mattis nunc sed blandit. In nibh mauris cursus mattis molestie a. Arcu non odio euismod lacinia. Euismod quis viverra nibh cras pulvinar mattis. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Gravida quis blandit turpis cursus in hac habitasse. At quis risus sed vulputate odio ut. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Non nisi est sit amet facilisis magna etiam tempor orci. Arcu dui vivamus arcu felis bibendum ut. Enim ut sem viverra aliquet eget sit amet. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Mi sit amet mauris commodo. Urna molestie at elementum eu facilisis sed odio morbi quis. Diam maecenas sed enim ut sem. Consectetur a erat nam at lectus urna duis convallis convallis. Ut lectus arcu bibendum at varius vel. Maecenas accumsan lacus vel facilisis volutpat. A iaculis at erat pellentesque adipiscing commodo elit. Dignissim convallis aenean et tortor at. Duis tristique sollicitudin nibh sit amet commodo nulla. Egestas sed sed risus pretium quam vulputate dignissim.",
    date: new Date(Date.now()),
  },
  {
    title: "Chapter 2 - Chaos Rising",
    entryBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus. Ac tincidunt vitae semper quis. Felis bibendum ut tristique et. Id ornare arcu odio ut sem. Orci ac auctor augue mauris augue neque gravida in fermentum. Fames ac turpis egestas maecenas pharetra convallis posuere. Neque volutpat ac tincidunt vitae semper quis lectus. Scelerisque in dictum non consectetur a. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Vitae elementum curabitur vitae nunc. Sollicitudin tempor id eu nisl nunc. Et malesuada fames ac turpis egestas integer eget aliquet. Auctor neque vitae tempus quam pellentesque. Semper risus in hendrerit gravida rutrum quisque non tellus. Elementum pulvinar etiam non quam. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Justo laoreet sit amet cursus sit amet dictum. Amet nisl suscipit adipiscing bibendum. Et malesuada fames ac turpis egestas. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Tortor condimentum lacinia quis vel eros donec ac. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Urna cursus eget nunc scelerisque viverra mauris. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Nullam vehicula ipsum a arcu. A scelerisque purus semper eget. Sit amet tellus cras adipiscing. Donec ac odio tempor orci. Dictum varius duis at consectetur lorem donec massa sapien.",
    date: new Date(Date.now()),
  },
];

const userSeed = [
  {
    email: "testUser@testuser.test",
    password: "potato",
    image: "",
  },
];

// Data will be loaded into Database via Mongoose:

db.Entry.remove({})
  .then(() => db.Entry.collection.insertMany(entrySeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
