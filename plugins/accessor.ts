import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/nuxt-intance'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
