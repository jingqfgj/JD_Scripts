import axios from "axios";
import {format} from "date-fns";

const CryptoJS = require('crypto-js')

let fp: string = '', tk: string = '', genKey: any = null

<<<<<<< HEAD
async function requestAlgo(appId: string, USER_AGENT: string = 'jdpingou;') {
  function generateFp() {
    let e = "0123456789";
    let a = 13;
    let i = '';
    for (; a--;)
      i += e[Math.random() * e.length | 0];
    return (i + Date.now()).slice(0, 16)
  }

  fp = generateFp()
=======
function getRandomIDPro() {
  let e, a = 10, n = 'number', i = '';
  switch (n) {
    case 'alphabet':
      e = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      break;
    case 'max':
      e = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
      break;
    case 'number':
    default:
      e = '0123456789';
  }
  for (; a--;) i += e[(Math.random() * e.length) | 0];
  return i;
}

async function requestAlgo(appId: string, USER_AGENT: string = 'jdpingou;') {
  let s = "", a = "0123456789", u = a, c = (Math.random() * 10) | 0;
  do {
    let ss = getRandomIDPro() + ""
    if (s.indexOf(ss) == -1) s += ss
  } while (s.length < 3)
  for (let i of s.slice()) u = u.replace(i, '')
  fp = getRandomIDPro() + "" + s + getRandomIDPro() + c + ""

>>>>>>> 9e83047... update
  let {data} = await axios.post(`https://cactus.jd.com/request_algo?g_ty=ajax`, `{"version":"3.0","fp":"${fp}","appId":"${appId}","timestamp":${Date.now()},"platform":"web","expandParams":""}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
<<<<<<< HEAD
      'host': 'cactus.jd.com',
      'Referer': 'https://cactus.jd.com',
=======
      'Origin': 'https://prodev.m.jd.com',
      'Referer': 'https://prodev.m.jd.com/',
>>>>>>> 9e83047... update
      'User-Agent': USER_AGENT
    }
  })
  tk = data.data.result.tk;
  genKey = new Function(`return ${data.data.result.algo}`)();
<<<<<<< HEAD
  return {fp, tk, genKey}
}

function geth5st(t: { key: string, value: string } [], appId: string) {
  let a = ''
  t.forEach(({key, value}) => {
    a += `${key}:${value}&`
  })
  a = a.slice(0, -1)
  let time = Date.now()
  let timestamp = format(time, "yyyyMMddHHmmssSSS");
  let hash1 = genKey(tk, fp.toString(), timestamp.toString(), appId.toString(), CryptoJS).toString(CryptoJS.enc.Hex);
  const hash2 = CryptoJS.HmacSHA256(a, hash1).toString();
  return encodeURIComponent(["".concat(timestamp.toString()), "".concat(fp.toString()), "".concat(appId.toString()), "".concat(tk), "".concat(hash2), "3.0", "".concat(time.toString())].join(";"))
=======
}

function geth5st(t: { key: string, value: string } [], appId: string) {
  let a = t.map(function (e) {
    return e["key"] + ":" + e["value"]
  })["join"]("&")
  let time = Date.now()
  let timestamp = format(time, "yyyyMMddhhmmssSSS");
  let hash1 = genKey(tk, fp.toString(), timestamp.toString(), appId.toString(), CryptoJS).toString();
  const hash2 = CryptoJS.HmacSHA256(a, hash1.toString()).toString();
  return ["".concat(timestamp.toString()), "".concat(fp.toString()), "".concat(appId.toString()), "".concat(tk), "".concat(hash2), "3.0", "".concat(time.toString())].join(";")
>>>>>>> 9e83047... update
}

export {
  requestAlgo,
<<<<<<< HEAD
  geth5st,
}
=======
  geth5st
}
>>>>>>> 9e83047... update
