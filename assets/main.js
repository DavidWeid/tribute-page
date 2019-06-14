console.log("online");
const YT_API_KEY = "AIzaSyDyCC_F0psdc0S0fjDC_5qp6xYPsfp99wY";

const URL =
  "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDyCC_F0psdc0S0fjDC_5qp6xYPsfp99wY&part=snippet,player";

const troyeChannel =
  "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part=contentDetails&forUsername=Troye+Sivan";

// $.ajax({
//   url: troyeChannel,
//   method: "GET"
// }).then(response => {
//   const result = response;
//   console.log(result);
// });

// const start = () => {
//   gapi.client
//     .init({
//       apiKey: YT_API_KEY,
//       discoveryDocs: ["https://people.googleapis.com/$discovery/rest"]
//     })
//     .then(() => {
//       return gapi.client.people.people.get({
//         resourceName: "people/me",
//         "requestMask.includeField": "person.names"
//       });
//     })
//     .then(
//       response => {
//         console.log(response.result);
//       },
//       reason => {
//         console.log("Error: " + reason.result.error.message);
//       }
//     );
// };

// gapi.load("client", start);
