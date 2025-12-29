const sendData = (onSuccess, onFail, body) => {
  fetch('https://29.javascript.htmlacademy.pro/kekstagram/', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { sendData };
