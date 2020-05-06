const axios = require("axios");
const bodyparser = require("body-parser");

let facebookURL =
  "https://graph.facebook.com/2980188728728791/feed?fields=attachments,message,picture,link,name,caption,description,source&limit=1&access_token=EAALrPgMJw9YBAAGoMayvP2B24sZALOA3mZC3i0VubwvGvRz0aLGc2ANlm2obkwhX5qDDPXM5hpoF41BbNc8odunuLwmkiP5VlNldRXvEy95kWNYmattibc0CZCDXjCdmRkBYPgYTxKdZAVx2YQvYITls5kf9qdFJV5GRFymZBnZARfSWFeC5ZAcWSGFoAT1vYZA0xhPAZCqDdobjQDIHIHmPBlH3fRWvtQ6nNIWRTVUF9eQZDZD";

// app.use(bodyparser.json());

// app.use(
//   bodyparser.urlencoded({
//     limit: "150mb",
//     extended: false,
//   })
// );
axios.get(facebookURL).then((r) => {
  setTimeout(() => {
    // console.log(r.data.data);
    let datadesc = r.data.data[0];
    let imageSrc =
      r.data.data[0].attachments.data[0].subattachments.data[6].media.image.src;
    //console.log("datadesc === ", datadesc);
    //  console.log("attachments: ====", attachments);
    console.log(imageSrc);
  }, 100);
});
