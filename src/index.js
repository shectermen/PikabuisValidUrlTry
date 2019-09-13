function isValidUrl(url) {
  return /(?:http|https):\/\/([0-9a-zA-Z\-])?(pikabu)/.test(url);
}

console.log(
  "isValidUrl",
  isValidUrl("http://pikabu.ru/page/interview/frontend/")
);
