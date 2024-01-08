import { showToast } from 'vant';

export default function filterResponse (res, successCb = null, errorCb = null) {
  return new Promise((resolve) => {
    if (res && res.code === 200) {
      successCb && successCb(res)
    } else {
      errorCb
        ? errorCb(res)
        : showToast({
          message:res.msg
        })
    }
    resolve(res)
  })
}
