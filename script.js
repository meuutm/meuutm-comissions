document.querySelector('a[href="#"]').addEventListener("click",(function(e){e.preventDefault();var t=this.textContent;navigator.clipboard.writeText(t).then((function(){var e=document.getElementById("customAlert");e.classList.add("show"),setTimeout((function(){e.classList.remove("show")}),2e3)})).catch((function(e){}))})),document.querySelector(".close-btn").addEventListener("click",(function(){document.getElementById("customAlert").classList.remove("show")}));