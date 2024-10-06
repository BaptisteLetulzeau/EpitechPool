function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    name = name + "=";
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
  

  function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  
  function acceptCookies() {
    setCookie("acceptsCookies", "true", 1);
    checkCookie();
  }
  
  function checkCookie() {
    const cookie = getCookie("acceptsCookies");
    const footerDiv = document.querySelector('footer > div');
    if (cookie === "true") {
      footerDiv.textContent = '<div>This site uses cookies. <button id="delete-cookie">Delete the cookie</button></div>';
      
      document.getElementById('delete-cookie').addEventListener('click', function() {
        deleteCookie("acceptsCookies");
        footerDiv.textContent = 'This site uses cookies, click on OK if you accept their use. <a href="#">OK</a>';
        document.querySelector('footer > div a').addEventListener('click', acceptCookies);
      });
    } else {
      document.querySelector('footer > div a').addEventListener('click', acceptCookies);
    }
  }
  
  document.addEventListener('DOMContentLoaded', checkCookie);
  