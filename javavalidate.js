const form = document.getElementById("form");
const fname = document.getElementById("fname");
const sname = document.getElementById("sname");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const pword = document.getElementById("pword");
const pword1 = document.getElementById("pword1");
var mainerr = document.getElementById("mainerror");
var error = document.getElementById("error");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var error4 = document.getElementById("error4");
var error5 = document.getElementById("error5");
let error6 = document.getElementById("error6");
let error7 = document.getElementById("error7");

const uuname= document.getElementById("uuname");
const ppword= document.getElementById("ppword");
const merr=document.getElementById('merr');
const uerr=document.getElementById('uerr');
const perr=document.getElementById('perr');


function signup() {
  if (fname.value.length >= 6) {
    mainerr.textContent = ``;
    error.textContent = ``;
    if (sname.value.length >= 6) {
      error1.textContent = ``;
      if (uname.value.length >= 6) {
        error2.textContent = ``;
        if (email.value.length >= 3) {
          error3.textContent = ``;
          if (phone.value.length > 9) {
            error4.textContent = ``;

            if (pword.value.length >= 8) {
              error5.textContent = ``;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
                mainerr.style.color='green'
                mainerr.textContent = `You Have Registered Successfully Mr/Mrs ${uname.value}`;
                Register();
              } else {
                mainerr.style.color='red'
                mainerr.textContent = `Check on errors highlighted bellow`;
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            } else {
                mainerr.style.color='red'
              mainerr.textContent = `Check on errors highlighted bellow`;
              error5.textContent = `Must Be Atleast 8 characters`;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                mainerr.style.color='red'
                mainerr.textContent = `Check on errors highlighted bellow`;
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            }
          } else {
            mainerr.style.color='red'
            mainerr.textContent = `Check on errors highlighted bellow`;
            error4.textContent = "Must be ten Digits";
            if (pword.value.length >= 8) {
              error5.textContent = ``;
            } else {
                mainerr.style.color='red'
                mainerr.textContent = `Check on errors highlighted bellow`;
              error5.textContent = `Must Be Atleast 8 characters`;
            }
          }
        } else {
            mainerr.style.color='red'
          mainerr.textContent = `Check on errors highlighted bellow`;
          error3.textContent = `Email cant be empty`;
          if (phone.value.length > 9) {
            error4.textContent = ``;
            if (pword.value.length >= 8) {
              error5.textContent = ``;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                mainerr.style.color='red'
                mainerr.textContent = `Check on errors highlighted bellow`;
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            } else {
              error5.textContent = `Must Be Atleast 8 characters`;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                mainerr.style.color='red'
                mainerr.textContent = `Check on errors highlighted bellow`;
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            }
          } else {
            mainerr.style.color='red'
            mainerr.textContent = `Check on errors highlighted bellow`;
            error4.textContent = "Must be ten Digits";
            if (pword.value.length >= 8) {
              error5.textContent = ``;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                mainerr.style.color='red'
                mainerr.textContent = `Check on errors highlighted bellow`;
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            } else {
                mainerr.style.color='red'
                mainerr.textContent = `Check on errors highlighted bellow`;
              error5.textContent = `Must Be Atleast 8 characters`;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                mainerr.style.color='red'
                mainerr.textContent = `Check on errors highlighted bellow`;
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            }
          }
        }
      } else {
        mainerr.style.color='red'
        error2.textContent = `Must be atleast 6 characters`;
        mainerr.textContent = `Check on errors highlighted bellow`;

        if (email.value.length >= 3) {
          error3.textContent = ``;
        } else {
            mainerr.style.color='red'
          error3.textContent = `Email cant be empty`;
        }
      }
    } else {
        mainerr.style.color='red'
      mainerr.textContent = `Check on errors highlighted bellow`;
      error1.textContent = `Must be atleast 6 characters`;
      if (uname.value.length >= 6) {
        error2.textContent = ``;
      } else {
        mainerr.style.color='red'
        error2.textContent = `Must be atleast 6 characters`;
        mainerr.textContent = `Check on errors highlighted bellow`;
      }
    }
  } else {
    mainerr.style.color='red'
    mainerr.textContent = `Check on errors highlighted bellow`;
    error.textContent = `Must be atleast 6 characters`;
    if (sname.value.length >= 6) {
      error1.textContent = ``;
      if (uname.value.length >= 6) {
        error2.textContent = `Must be atleast 6 characters`;
      } else {
        error2.textContent = `Must be atleast 6 characters`;
      }
    } else {
      error1.textContent = `Must be atleast 6 characters`;
      if (uname.value.length >= 6) {
        error2.textContent = ``;
        if (email.value.length >= 3) {
          error3.textContent = ``;
          if (phone.value.length > 9) {
            error4.textContent = ``;
            if (pword.value.length >= 8) {
              error5.textContent = ``;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            } else {
              error5.textContent = `Must Be Atleast 8 characters`;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            }
          } else {
            error4.textContent = "Must be ten Digits";
            if (pword.value.length >= 8) {
              error5.textContent = ``;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            } else {
              error5.textContent = `Must Be Atleast 8 characters`;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            }
          }
        } else {
          error3.textContent = `Email cant be empty`;
        }
      } else {
        error2.textContent = `Must be atleast 6 characters`;

        if (email.value.length >= 3) {
          error3.textContent = ``;
          if (phone.value.length > 9) {
            error4.textContent = ``;
            if (pword.value.length >= 8) {
              error5.textContent = ``;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            } else {
              error5.textContent = `Must Be Atleast 8 characters`;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            }
          } else {
            error4.textContent = "Must be ten Digits";
            if (pword.value.length >= 8) {
              error5.textContent = ``;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            } else {
              error5.textContent = `Must Be Atleast 8 characters`;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            }
          }
        } else {
          error3.textContent = `Email cant be empty`;
          if (phone.value.length > 9) {
            error4.textContent = ``;
            if (pword.value.length >= 8) {
              error5.textContent = ``;
            } else {
              error5.textContent = `Must Be Atleast 8 characters`;
            }
          } else {
            error4.textContent = "Must be ten Digits";
            if (pword.value.length >= 8) {
              error5.textContent = ``;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            } else {
              error5.textContent = `Must Be Atleast 8 characters`;
              if (pword1.value.length >= 8) {
                error6.textContent = ``;
              } else {
                error6.textContent = `Must Be Atleast 8 characters`;
              }
            }
          }
        }
      }
    }
  }
}



function Register(){
    if(pword.value===pword1.value){
      mainerr.style.color='green'
      mainerr.textContent = `You Have Registered Successfully Mr ${uname.value}`;
      localStorage.setItem("1",fname.value)
      localStorage.setItem("2",sname.value)
      localStorage.setItem("3",uname.value)
      localStorage.setItem("4",email.value)
      localStorage.setItem("5",phone.value)
      localStorage.setItem("6",pword.value)
      localStorage.setItem("7",pword1.value)
      setTimeout(function(){
        window.location.href="login.html"
      },1500)
 
    }
  else{
    mainerr.style.color='red'
    mainerr.textContent=`Check on erros highligted bellow`
    error5.textContent = `Password dont match`;

  }

}

const ver1=localStorage.getItem("3")
const ver2=localStorage.getItem("6")
const ver3=localStorage.getItem("7")