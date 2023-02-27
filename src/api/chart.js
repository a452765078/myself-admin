import request from '@/utils/request'

/**
 * 登录
 */
export const getChartSheet = (regionId) => {
  return request({
    url: '/chart/sheets',
    params: {
      regionId
    }
  })
}
