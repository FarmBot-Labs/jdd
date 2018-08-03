var SUPER_SECRET_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1bmtub3duIiwic3ViIjo2LCJpYXQiOjE1MzMyNTI5OTgsImp0aSI6IjYxZTdjNmU5LWYwNjQtNGNiNC1hNTliLThhMzJhY2JmNjExMiIsImlzcyI6Ii8vbXkuZmFybWJvdC5pbzo0NDMiLCJleHAiOjE1MzY3MDU5NzYsIm1xdHQiOiJicmlzay1iZWFyLnJtcS5jbG91ZGFtcXAuY29tIiwiYm90IjoiZGV2aWNlXzYiLCJ2aG9zdCI6InZiemN4c3FyIiwibXF0dF93cyI6IndzczovL2JyaXNrLWJlYXIucm1xLmNsb3VkYW1xcC5jb206NDQzL3dzL21xdHQiLCJvc191cGRhdGVfc2VydmVyIjoiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9mYXJtYm90L2Zhcm1ib3Rfb3MvcmVsZWFzZXMvbGF0ZXN0IiwiZndfdXBkYXRlX3NlcnZlciI6IkRFUFJFQ0FURUQiLCJpbnRlcmltX2VtYWlsIjoiY29ubm9yQGZhcm1ib3QuaW8iLCJiZXRhX29zX3VwZGF0ZV9zZXJ2ZXIiOiJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL0Zhcm1Cb3QvZmFybWJvdF9vcy9yZWxlYXNlcy8xMjE3Mzg5NCJ9.zqaDF5421y5gMLChQ7uJAVzssEmEr-zunRL6mwrMmxFDz-GuZ_dBXzE-4uyGIE8FrT9JZ-y1XPtilrjlUITsdV6-pkQ5cWWZZXG6Otq0EsK3ntzZHsfbOD6oeVBlvT-UpJYFirFUFcBA-sZ_WI0KCZzethWGYw9iHkjOM8eaK6eWBtnu1mrBR1oNN8U8lqU0bHhYhDzoJOH70kakm3tYRZwiBNP620R5hAXZZMvPrGKkQRu1JW-9NpVzxvi5cletlExriTJE0Y42k0j22JaEN4EJ1m5SZEhyxvnAEKcJEZd00JLWdp6ylOLgF4LWvXEj-efAM7QCJsMYKIPab0JeZw"

let bot = new fbjs.Farmbot({ token: SUPER_SECRET_TOKEN });

let side = "left";

bot
  .connect()
  .then(function () {
    console.log("connected!");
  })
  .catch(function(error) {
    console.error(error);
  })

bot
  .on("status", function(data, eventName) {
    console.log("I just got an " + eventName + " event!");
    $("#textarea" + side).text(JSON.stringify(data));
    if(side == "left") {
      side = "right";
    } else {
      side = "left";
    }
    $("#compare").click();
  })
