/* eslint-disable */
! function (d) {
  var e, n = '<svg><symbol id="icon-zhedie" viewBox="0 0 1024 1024"><path d="M224 352a127.84 127.84 0 0 0 118.496-80h553.664a32 32 0 0 0 0-64H350.4C342.432 144.96 289.216 96 224 96a128 128 0 0 0 0 256z m0-192a64 64 0 1 1-0.032 128.032A64 64 0 0 1 224 160zM896.512 640H352c-1.504 0-2.816 0.672-4.256 0.864A127.744 127.744 0 0 0 224 544a128 128 0 0 0 0 256 127.744 127.744 0 0 0 123.744-96.864c1.44 0.192 2.752 0.864 4.256 0.864h544.512a32 32 0 0 0 0-64zM224 736a64 64 0 1 1 0.032-128.032A64 64 0 0 1 224 736zM896.512 416H608a32 32 0 0 0 0 64h288.512a32 32 0 0 0 0-64zM896.512 832H608a32 32 0 0 0 0 64h288.512a32 32 0 0 0 0-64z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
  if (t && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }! function (e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0);
      else {
        var t = function () {
          document.removeEventListener("DOMContentLoaded", t, !1), e()
        };
        document.addEventListener("DOMContentLoaded", t, !1)
      }
    else document.attachEvent && (o = e, i = d.document, a = !1, (c = function () {
      try {
        i.documentElement.doScroll("left")
      } catch (e) {
        return void setTimeout(c, 50)
      }
      n()
    })(), i.onreadystatechange = function () {
      "complete" == i.readyState && (i.onreadystatechange = null, n())
    });

    function n() {
      a || (a = !0, o())
    }
    var o, i, a, c
  }(function () {
    var e, t;
    (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", function (e, t) {
      t.firstChild ? function (e, t) {
        t.parentNode.insertBefore(e, t)
      }(e, t.firstChild) : t.appendChild(e)
    }(t, document.body))
  })
}(window);
