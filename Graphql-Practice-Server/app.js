const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
// mongoose.connect('mongodb+srv://dev:1234@cluster0-jxtpj.mongodb.net/test?retryWrites=true&w=majority',{

//     useNewUrlParser: true,
//     useUnifiedTopology: true

// })
// mongoose.connection.once('open', () => {
//     console.log('conneted to database');
// });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5001, () => {
  console.log("now listening for requests on port 5001");
});
