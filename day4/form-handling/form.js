const handleUserName = (e) => {
  console.log("typed");
  console.log("-----");
  console.log(e);
  const elem = e.target;
  console.log(elem.value);
  titke.innerText = elem.value;
};
