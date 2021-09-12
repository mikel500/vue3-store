import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

export default () => {
  const storedArticleMessage = (string) =>
    createToast(string, {
      position: 'bottom-center',
      showCloseButton: false,
      hideProgressBar: true,
      timeout: 1500,
      showIcon: true,
      type: 'success',
      transition: 'slide',
    })
  return {
    storedArticleMessage,
  }
}
