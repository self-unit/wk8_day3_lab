use bucket_list;
db.dropDatabase();

db.goals.insertMany([
  {
    location: "Las Vegas",
    action: "Marriage Pact",
    person: "Joan of Arc",
    target_age: "40"
  },
  {
    location: "Budapest",
    action: "Visit",
    person: "",
    target_age: "55"
  },
  {
    location: "Colombia",
    action: "Get arrested",
    person: "",
    target_age: "35"
  },
]);
