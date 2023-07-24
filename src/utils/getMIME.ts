/*
 * @Author: zhangy
 * @Date: 2023-07-24 11:19:39
 */
import { ValueOfObject } from '@/types'

const FileTypeInfo = {
  bmp: 'image/bmp',
  gif: 'image/gif',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/jpeg',
  webp: 'image/webp',
  html: 'text/html',
  txt: 'text/plain',
  vsd: 'application/vnd.visio',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.ms-powerpoint',
  doc: 'application/msword',
  docx: 'application/msword',
  xls: 'application/x-xls',
  xlsx: 'application/x-xls',
  pdf: 'application/pdf',
  zip: 'application/x-zip-compressed',
  rar: 'application/octet-stream',
  xml: 'text/xml',
  mp3: 'audio/mpeg',
  m4a: 'audio/mpeg',
  mp4: 'video/mpeg4'
} as const

type FileTypeMapping = ValueOfObject<typeof FileTypeInfo>

type FileType = keyof typeof FileTypeInfo

type ReturnTypeValue<T extends FileType> = FileTypeMapping[T]

export default <T extends FileType>(fileExtension: T): ReturnTypeValue<T> => {
  return FileTypeInfo[fileExtension] as ReturnTypeValue<T>
}
