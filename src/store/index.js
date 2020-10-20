import { createStore } from 'vuex'
import user from './modules/user'
import content from "./modules/content";
export const store = createStore({
  modules: {
    user,
    content
  }
})
