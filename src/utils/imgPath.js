import { withPrefix } from "gatsby"

/**
 * 返回带 pathPrefix 的图片路径
 * 用于 static/img 目录下的图片
 */
export const imgPath = (filename) => withPrefix(`/img/${filename}`)
