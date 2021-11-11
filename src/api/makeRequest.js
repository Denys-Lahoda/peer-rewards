// dummy request function, can be replaced with fetch/axios/etc.
export default function ({ data }) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve({ data, status: 200 }), 2000);
  });
}
